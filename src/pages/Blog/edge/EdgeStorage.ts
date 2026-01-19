/**
 * 边缘存储层 - IndexedDB 封装
 * Edge Storage Layer - IndexedDB Wrapper
 * 模拟边缘节点上的 KV 存储服务
 */

import {
    EdgeStorageItem,
    EdgeStorageStats,
    PostVisitStats
} from './types';

const DB_NAME = 'edge_storage_db';
const DB_VERSION = 1;
const STORE_NAME = 'edge_kv_store';
const STATS_STORE = 'edge_stats';

class EdgeStorage {
    private db: IDBDatabase | null = null;
    private initPromise: Promise<void> | null = null;
    private memoryCache: Map<string, any> = new Map();
    private accessLog: Map<string, number> = new Map();

    /**
     * 初始化 IndexedDB 数据库
     */
    async init(): Promise<void> {
        if (this.initPromise) return this.initPromise;

        this.initPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, DB_VERSION);

            request.onerror = () => reject(request.error);
            request.onsuccess = () => {
                this.db = request.result;
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = (event.target as IDBOpenDBRequest).result;

                // 创建主存储
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    const store = db.createObjectStore(STORE_NAME, { keyPath: 'key' });
                    store.createIndex('expiresAt', 'metadata.expiresAt', { unique: false });
                }

                // 创建统计存储
                if (!db.objectStoreNames.contains(STATS_STORE)) {
                    db.createObjectStore(STATS_STORE, { keyPath: 'key' });
                }
            };
        });

        return this.initPromise;
    }

    /**
     * 获取存储对象
     */
    private getStore(mode: IDBTransactionMode = 'readonly'): IDBObjectStore {
        if (!this.db) throw new Error('Database not initialized');
        const transaction = this.db.transaction([STORE_NAME], mode);
        return transaction.objectStore(STORE_NAME);
    }

    /**
     * 设置值（带 TTL）
     */
    async set<T>(key: string, value: T, ttl: number = 3600000): Promise<void> {
        await this.init();

        const item: EdgeStorageItem<T> = {
            key,
            value,
            metadata: {
                createdAt: Date.now(),
                expiresAt: Date.now() + ttl,
                accessCount: 0,
                lastAccessed: Date.now(),
                version: 1
            }
        };

        // 同时更新内存缓存
        this.memoryCache.set(key, value);

        const store = this.getStore('readwrite');
        await new Promise<void>((resolve, reject) => {
            const request = store.put(item);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * 获取值
     */
    async get<T>(key: string): Promise<T | null> {
        await this.init();

        // 先检查内存缓存
        if (this.memoryCache.has(key)) {
            this.logAccess(key, true);
            return this.memoryCache.get(key);
        }

        const store = this.getStore('readonly');
        const item = await new Promise<EdgeStorageItem<T> | undefined>((resolve, reject) => {
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        if (!item) {
            this.logAccess(key, false);
            return null;
        }

        // 检查是否过期
        if (item.metadata.expiresAt < Date.now()) {
            await this.delete(key);
            this.logAccess(key, false);
            return null;
        }

        // 更新访问统计
        item.metadata.accessCount++;
        item.metadata.lastAccessed = Date.now();

        // 更新内存缓存
        this.memoryCache.set(key, item.value);

        const updateStore = this.getStore('readwrite');
        await new Promise<void>((resolve, reject) => {
            const request = updateStore.put(item);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });

        this.logAccess(key, true);
        return item.value;
    }

    /**
     * 删除值
     */
    async delete(key: string): Promise<void> {
        await this.init();
        this.memoryCache.delete(key);

        const store = this.getStore('readwrite');
        await new Promise<void>((resolve, reject) => {
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * 清除所有数据
     */
    async clear(): Promise<void> {
        await this.init();
        this.memoryCache.clear();

        const store = this.getStore('readwrite');
        await new Promise<void>((resolve, reject) => {
            const request = store.clear();
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * 记录访问日志
     */
    private logAccess(key: string, hit: boolean): void {
        const current = this.accessLog.get(key) || 0;
        this.accessLog.set(key, current + (hit ? 1 : 0));
    }

    /**
     * 获取存储统计
     */
    async getStats(): Promise<EdgeStorageStats> {
        await this.init();

        const store = this.getStore('readonly');
        const items = await new Promise<EdgeStorageItem[]>((resolve, reject) => {
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        const totalItems = items.length;
        const totalSize = JSON.stringify(items).length;
        const totalAccesses = Array.from(this.accessLog.values()).reduce((a, b) => a + b, 0);
        const cacheHits = this.memoryCache.size;

        return {
            totalItems,
            totalSize,
            hitRate: totalAccesses > 0 ? cacheHits / totalAccesses : 0,
            missRate: totalAccesses > 0 ? (totalAccesses - cacheHits) / totalAccesses : 0,
            averageAccessTime: totalItems > 0 ? totalAccesses / totalItems : 0
        };
    }

    /**
     * 清理过期数据
     */
    async cleanup(): Promise<number> {
        await this.init();

        const store = this.getStore('readwrite');
        const index = store.index('expiresAt');
        const now = Date.now();

        let deletedCount = 0;

        await new Promise<void>((resolve, reject) => {
            const request = index.openCursor(IDBKeyRange.upperBound(now));
            request.onsuccess = (event) => {
                const cursor = (event.target as IDBRequest).result;
                if (cursor) {
                    cursor.delete();
                    deletedCount++;
                    cursor.continue();
                } else {
                    resolve();
                }
            };
            request.onerror = () => reject(request.error);
        });

        return deletedCount;
    }

    /**
     * 获取或创建文章访问统计
     */
    async getPostStats(postId: string): Promise<PostVisitStats> {
        const key = `stats:post:${postId}`;
        let stats = await this.get<PostVisitStats>(key);

        if (!stats) {
            stats = {
                postId,
                visits: 0,
                uniqueVisitors: new Set<string>(),
                lastVisit: Date.now(),
                popularRegions: new Map<string, number>()
            };
            await this.set(key, stats);
        }

        return stats;
    }

    /**
     * 记录文章访问
     */
    async recordPostVisit(postId: string, visitorId: string, region: string): Promise<void> {
        const stats = await this.getPostStats(postId);
        stats.visits++;
        stats.lastVisit = Date.now();
        stats.uniqueVisitors.add(visitorId);

        const currentRegionCount = stats.popularRegions.get(region) || 0;
        stats.popularRegions.set(region, currentRegionCount + 1);

        await this.set(`stats:post:${postId}`, stats);
    }

    /**
     * 批量操作
     */
    async batchSet<T>(items: Array<{ key: string; value: T; ttl?: number }>): Promise<void> {
        await this.init();

        const store = this.getStore('readwrite');
        const promises = items.map(({ key, value, ttl = 3600000 }) => {
            const item: EdgeStorageItem<T> = {
                key,
                value,
                metadata: {
                    createdAt: Date.now(),
                    expiresAt: Date.now() + ttl,
                    accessCount: 0,
                    lastAccessed: Date.now(),
                    version: 1
                }
            };

            this.memoryCache.set(key, value);

            return new Promise<void>((resolve, reject) => {
                const request = store.put(item);
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
        });

        await Promise.all(promises);
    }

    /**
     * 前缀查询
     */
    async getByPrefix(prefix: string): Promise<Array<{ key: string; value: any }>> {
        await this.init();

        const store = this.getStore('readonly');
        const results: Array<{ key: string; value: any }> = [];

        await new Promise<void>((resolve, reject) => {
            const request = store.openCursor();
            request.onsuccess = (event) => {
                const cursor = (event.target as IDBRequest).result;
                if (cursor) {
                    if (cursor.key.toString().startsWith(prefix)) {
                        results.push({
                            key: cursor.key.toString(),
                            value: cursor.value.value
                        });
                    }
                    cursor.continue();
                } else {
                    resolve();
                }
            };
            request.onerror = () => reject(request.error);
        });

        return results;
    }

    /**
     * 获取所有键
     */
    async keys(): Promise<string[]> {
        await this.init();

        const store = this.getStore('readonly');
        return new Promise<string[]>((resolve, reject) => {
            const request = store.getAllKeys();
            request.onsuccess = () => resolve(request.result as string[]);
            request.onerror = () => reject(request.error);
        });
    }

    /**
     * 检查键是否存在
     */
    async has(key: string): Promise<boolean> {
        const value = await this.get(key);
        return value !== null;
    }

    /**
     * 设置多个键值对（原子操作）
     */
    async transactionSet<T>(operations: Array<{
        type: 'set' | 'delete';
        key: string;
        value?: T;
        ttl?: number;
    }>): Promise<void> {
        await this.init();

        const store = this.getStore('readwrite');
        const promises = operations.map(op => {
            if (op.type === 'set' && op.value !== undefined) {
                const item: EdgeStorageItem<T> = {
                    key: op.key,
                    value: op.value,
                    metadata: {
                        createdAt: Date.now(),
                        expiresAt: Date.now() + (op.ttl || 3600000),
                        accessCount: 0,
                        lastAccessed: Date.now(),
                        version: 1
                    }
                };
                this.memoryCache.set(op.key, op.value);
                return new Promise<void>((resolve, reject) => {
                    const request = store.put(item);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(request.error);
                });
            } else if (op.type === 'delete') {
                this.memoryCache.delete(op.key);
                return new Promise<void>((resolve, reject) => {
                    const request = store.delete(op.key);
                    request.onsuccess = () => resolve();
                    request.onerror = () => reject(request.error);
                });
            }
            return Promise.resolve();
        });

        await Promise.all(promises);
    }
}

// 单例导出
export const edgeStorage = new EdgeStorage();
