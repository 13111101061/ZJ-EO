/**
 * 边缘缓存策略层
 * Edge Cache Strategy Layer
 * 实现多级缓存：内存缓存 -> IndexedDB 缓存 -> 网络请求
 */

import { edgeStorage } from './EdgeStorage';
import { CacheConfig, EdgeNodeInfo } from './types';

// 缓存层级类型
type CacheLevel = 'memory' | 'indexeddb' | 'network';

// 缓存结果
interface CacheResult<T> {
    data: T;
    level: CacheLevel;
    hit: boolean;
    age: number;
}

// 内存缓存项
interface MemoryCacheItem<T> {
    data: T;
    timestamp: number;
    expiresAt: number;
    accessCount: number;
}

/**
 * 边缘缓存管理器
 */
class EdgeCacheManager {
    // L1 内存缓存 - 最快访问
    private memoryCache: Map<string, MemoryCacheItem<any>> = new Map();
    private readonly MAX_MEMORY_SIZE = 50; // 最大内存缓存条目数

    // 模拟的边缘节点信息
    private edgeNodes: EdgeNodeInfo[] = [
        { region: 'asia-east', city: 'Taipei', latency: 15, loadPercentage: 35 },
        { region: 'asia-northeast', city: 'Tokyo', latency: 25, loadPercentage: 42 },
        { region: 'us-west', city: 'Los Angeles', latency: 120, loadPercentage: 28 },
        { region: 'eu-central', city: 'Frankfurt', latency: 180, loadPercentage: 31 }
    ];

    private currentEdgeNode: EdgeNodeInfo = this.edgeNodes[0];

    constructor() {
        // 模拟选择最近的边缘节点
        this.selectOptimalEdgeNode();
        // 定期清理过期的内存缓存
        setInterval(() => this.cleanupMemoryCache(), 60000);
    }

    /**
     * 选择最优边缘节点
     */
    private selectOptimalEdgeNode(): void {
        // 模拟基于延迟和负载选择最优节点
        this.currentEdgeNode = this.edgeNodes.reduce((best, node) => {
            const score = node.latency + (node.loadPercentage * 2);
            const bestScore = best.latency + (best.loadPercentage * 2);
            return score < bestScore ? node : best;
        });
    }

    /**
     * 获取当前边缘节点信息
     */
    getEdgeNodeInfo(): EdgeNodeInfo {
        return { ...this.currentEdgeNode };
    }

    /**
     * 生成缓存键
     */
    private generateCacheKey(prefix: string, identifier: string): string {
        return `edge:cache:${prefix}:${identifier}`;
    }

    /**
     * 清理过期的内存缓存
     */
    private cleanupMemoryCache(): void {
        const now = Date.now();
        const entries = Array.from(this.memoryCache.entries());

        // 删除过期项
        entries.forEach(([key, item]) => {
            if (item.expiresAt < now) {
                this.memoryCache.delete(key);
            }
        });

        // 如果超过最大容量，删除最少使用的项
        if (this.memoryCache.size > this.MAX_MEMORY_SIZE) {
            const sorted = entries.sort((a, b) => a[1].accessCount - b[1].accessCount);
            const toRemove = sorted.slice(0, this.memoryCache.size - this.MAX_MEMORY_SIZE);
            toRemove.forEach(([key]) => this.memoryCache.delete(key));
        }
    }

    /**
     * 从内存缓存获取
     */
    private getFromMemory<T>(key: string): T | null {
        const item = this.memoryCache.get(key);
        if (!item) return null;

        if (item.expiresAt < Date.now()) {
            this.memoryCache.delete(key);
            return null;
        }

        item.accessCount++;
        return item.data as T;
    }

    /**
     * 设置内存缓存
     */
    private setToMemory<T>(key: string, data: T, ttl: number): void {
        this.memoryCache.set(key, {
            data,
            timestamp: Date.now(),
            expiresAt: Date.now() + ttl,
            accessCount: 0
        });
    }

    /**
     * 网络优先策略
     */
    async networkFirst<T>(
        key: string,
        fetcher: () => Promise<T>,
        config: CacheConfig
    ): Promise<CacheResult<T>> {
        const startTime = Date.now();

        try {
            // 尝试网络请求
            const data = await this.withTimeout(fetcher(), config);

            // 缓存结果
            const memoryTtl = Math.min(config.ttl, 300000); // 内存缓存最多 5 分钟
            this.setToMemory(key, data, memoryTtl);
            await edgeStorage.set(key, data, config.ttl);

            return {
                data,
                level: 'network',
                hit: false,
                age: 0
            };
        } catch (error) {
            // 网络失败，尝试从缓存获取
            const cached = await this.getFromAnyCache<T>(key);
            if (cached) {
                return {
                    data: cached.data,
                    level: cached.level,
                    hit: true,
                    age: Date.now() - cached.timestamp
                };
            }
            throw error;
        }
    }

    /**
     * 缓存优先策略
     */
    async cacheFirst<T>(
        key: string,
        fetcher: () => Promise<T>,
        config: CacheConfig
    ): Promise<CacheResult<T>> {
        // 先检查内存缓存
        const memoryData = this.getFromMemory<T>(key);
        if (memoryData) {
            return {
                data: memoryData,
                level: 'memory',
                hit: true,
                age: 0
            };
        }

        // 检查 IndexedDB 缓存
        const idbData = await edgeStorage.get<T>(key);
        if (idbData) {
            // 回填内存缓存
            const memoryTtl = Math.min(config.ttl, 300000);
            this.setToMemory(key, idbData, memoryTtl);

            return {
                data: idbData,
                level: 'indexeddb',
                hit: true,
                age: 0
            };
        }

        // 缓存未命中，请求数据
        const data = await this.withTimeout(fetcher(), config);

        // 缓存结果
        const memoryTtl = Math.min(config.ttl, 300000);
        this.setToMemory(key, data, memoryTtl);
        await edgeStorage.set(key, data, config.ttl);

        return {
            data,
            level: 'network',
            hit: false,
            age: 0
        };
    }

    /**
     * 过期重新验证策略
     */
    async staleWhileRevalidate<T>(
        key: string,
        fetcher: () => Promise<T>,
        config: CacheConfig
    ): Promise<CacheResult<T>> {
        // 检查缓存（不过期）
        const memoryData = this.getFromMemory<T>(key);
        const idbData = await edgeStorage.get<T>(key);

        const cachedData = memoryData || idbData;
        const cacheLevel = memoryData ? 'memory' : 'indexeddb';

        if (cachedData) {
            // 异步更新缓存
            this.withTimeout(fetcher(), config)
                .then(async (newData) => {
                    const memoryTtl = Math.min(config.ttl, 300000);
                    this.setToMemory(key, newData, memoryTtl);
                    await edgeStorage.set(key, newData, config.ttl);
                })
                .catch(() => {
                    // 静默失败，返回缓存数据
                });

            return {
                data: cachedData,
                level: cacheLevel,
                hit: true,
                age: 0
            };
        }

        // 无缓存，直接请求
        const data = await this.withTimeout(fetcher(), config);

        const memoryTtl = Math.min(config.ttl, 300000);
        this.setToMemory(key, data, memoryTtl);
        await edgeStorage.set(key, data, config.ttl);

        return {
            data,
            level: 'network',
            hit: false,
            age: 0
        };
    }

    /**
     * 仅网络策略
     */
    async networkOnly<T>(
        fetcher: () => Promise<T>
    ): Promise<CacheResult<T>> {
        const data = await fetcher();
        return {
            data,
            level: 'network',
            hit: false,
            age: 0
        };
    }

    /**
     * 从任意缓存层获取数据
     */
    private async getFromAnyCache<T>(key: string): Promise<{
        data: T;
        level: CacheLevel;
        timestamp: number;
    } | null> {
        // 内存缓存
        const memoryItem = this.memoryCache.get(key);
        if (memoryItem && memoryItem.expiresAt > Date.now()) {
            return {
                data: memoryItem.data as T,
                level: 'memory',
                timestamp: memoryItem.timestamp
            };
        }

        // IndexedDB 缓存
        const idbData = await edgeStorage.get<T>(key);
        if (idbData) {
            return {
                data: idbData,
                level: 'indexeddb',
                timestamp: Date.now()
            };
        }

        return null;
    }

    /**
     * 带超时的请求
     */
    private async withTimeout<T>(promise: Promise<T>, config: CacheConfig): Promise<T> {
        return Promise.race([
            promise,
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('Request timeout')), config.timeout || 10000)
            )
        ]);
    }

    /**
     * 通用获取方法（根据策略选择）
     */
    async get<T>(
        prefix: string,
        identifier: string,
        fetcher: () => Promise<T>,
        config: CacheConfig
    ): Promise<CacheResult<T>> {
        const key = this.generateCacheKey(prefix, identifier);

        switch (config.strategy) {
            case 'network-first':
                return this.networkFirst(key, fetcher, config);
            case 'cache-first':
                return this.cacheFirst(key, fetcher, config);
            case 'stale-while-revalidate':
                return this.staleWhileRevalidate(key, fetcher, config);
            case 'network-only':
                return this.networkOnly(fetcher);
            default:
                return this.cacheFirst(key, fetcher, config);
        }
    }

    /**
     * 预热缓存
     */
    async warmup<T>(
        prefix: string,
        items: Array<{
            identifier: string;
            data: T;
        }>,
        ttl: number = 3600000
    ): Promise<void> {
        const operations = items.map(({ identifier, data }) => ({
            type: 'set' as const,
            key: this.generateCacheKey(prefix, identifier),
            value: data,
            ttl
        }));

        await edgeStorage.transactionSet(operations);

        // 同时填充内存缓存
        items.forEach(({ identifier, data }) => {
            const key = this.generateCacheKey(prefix, identifier);
            const memoryTtl = Math.min(ttl, 300000);
            this.setToMemory(key, data, memoryTtl);
        });
    }

    /**
     * 清除特定前缀的所有缓存
     */
    async clearByPrefix(prefix: string): Promise<void> {
        // 清除内存缓存
        const keyPrefix = `edge:cache:${prefix}`;
        for (const key of this.memoryCache.keys()) {
            if (key.startsWith(keyPrefix)) {
                this.memoryCache.delete(key);
            }
        }

        // 清除 IndexedDB 缓存
        const keys = await edgeStorage.keys();
        const deleteOps = keys
            .filter(key => key.startsWith(keyPrefix))
            .map(key => ({ type: 'delete' as const, key }));

        await edgeStorage.transactionSet(deleteOps);
    }

    /**
     * 获取缓存统计
     */
    getCacheStats(): {
        memorySize: number;
        memoryMaxSize: number;
        edgeNode: EdgeNodeInfo;
    } {
        return {
            memorySize: this.memoryCache.size,
            memoryMaxSize: this.MAX_MEMORY_SIZE,
            edgeNode: this.getEdgeNodeInfo()
        };
    }

    /**
     * 清空所有缓存
     */
    async clearAll(): Promise<void> {
        this.memoryCache.clear();
        await edgeStorage.clear();
    }

    /**
     * 检查缓存是否存在
     */
    async has(prefix: string, identifier: string): Promise<boolean> {
        const key = this.generateCacheKey(prefix, identifier);

        // 检查内存缓存
        if (this.memoryCache.has(key)) {
            const item = this.memoryCache.get(key)!;
            return item.expiresAt > Date.now();
        }

        // 检查 IndexedDB
        return await edgeStorage.has(key);
    }

    /**
     * 删除特定缓存
     */
    async delete(prefix: string, identifier: string): Promise<void> {
        const key = this.generateCacheKey(prefix, identifier);
        this.memoryCache.delete(key);
        await edgeStorage.delete(key);
    }

    /**
     * 批量删除缓存
     */
    async batchDelete(prefix: string, identifiers: string[]): Promise<void> {
        const ops = identifiers.map(identifier => ({
            type: 'delete' as const,
            key: this.generateCacheKey(prefix, identifier)
        }));

        for (const op of ops) {
            this.memoryCache.delete(op.key);
        }

        await edgeStorage.transactionSet(ops);
    }

    /**
     * 获取或设置（缓存穿透保护）
     */
    async getOrSet<T>(
        prefix: string,
        identifier: string,
        fetcher: () => Promise<T>,
        config: CacheConfig
    ): Promise<T> {
        const result = await this.get(prefix, identifier, fetcher, config);
        return result.data;
    }

    /**
     * 原子递增操作（用于计数器）
     */
    async increment(prefix: string, identifier: string, delta: number = 1): Promise<number> {
        const key = this.generateCacheKey(prefix, identifier);
        const current = await edgeStorage.get<number>(key) || 0;
        const newValue = current + delta;
        await edgeStorage.set(key, newValue, 3600000);
        return newValue;
    }

    /**
     * 获取多个键的值（批量获取）
     */
    async getMultiple<T>(
        prefix: string,
        identifiers: string[]
    ): Promise<Map<string, T>> {
        const results = new Map<string, T>();

        for (const identifier of identifiers) {
            const key = this.generateCacheKey(prefix, identifier);
            const data = this.getFromMemory<T>(key) || await edgeStorage.get<T>(key);
            if (data) {
                results.set(identifier, data);
            }
        }

        return results;
    }

    /**
     * 设置多个键的值（批量设置）
     */
    async setMultiple<T>(
        prefix: string,
        items: Array<{ identifier: string; data: T; ttl?: number }>
    ): Promise<void> {
        const operations = items.map(({ identifier, data, ttl = 3600000 }) => ({
            type: 'set' as const,
            key: this.generateCacheKey(prefix, identifier),
            value: data,
            ttl
        }));

        await edgeStorage.transactionSet(operations);
    }
}

// 单例导出
export const edgeCache = new EdgeCacheManager();
