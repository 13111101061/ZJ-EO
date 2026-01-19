/**
 * 边缘函数服务层
 * Edge Function Service Layer
 * 模拟边缘函数的执行、负载均衡和区域路由
 */

import { edgeCache } from './EdgeCache';
import { edgeStorage } from './EdgeStorage';
import {
    EdgeFunctionResponse,
    EdgeFunctionConfig,
    EdgeRequestLog
} from './types';

// 边缘函数注册表
type EdgeFunctionHandler = (params: any) => Promise<any>;

class EdgeFunctionService {
    private functions: Map<string, EdgeFunctionHandler> = new Map();
    private requestLogs: EdgeRequestLog[] = [];
    private readonly MAX_LOG_SIZE = 1000;

    // 模拟的边缘区域配置
    private readonly regions = [
        { id: 'asia-east-1', name: 'Taipei', latency: 15 },
        { id: 'asia-northeast-1', name: 'Tokyo', latency: 28 },
        { id: 'us-west-1', name: 'Los Angeles', latency: 145 },
        { id: 'eu-central-1', name: 'Frankfurt', latency: 198 },
        { id: 'us-east-1', name: 'Virginia', latency: 210 }
    ];

    private currentRegion = this.regions[0];

    /**
     * 注册边缘函数
     */
    registerFunction(name: string, handler: EdgeFunctionHandler): void {
        this.functions.set(name, handler);
    }

    /**
     * 执行边缘函数
     */
    async execute<T>(
        config: EdgeFunctionConfig,
        params: any = {}
    ): Promise<EdgeFunctionResponse<T>> {
        const startTime = Date.now();
        const logId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        try {
            // 检查函数是否存在
            const handler = this.functions.get(config.name);
            if (!handler) {
                throw new Error(`Edge function '${config.name}' not found`);
            }

            // 检查缓存
            const cacheKey = `${config.name}_${JSON.stringify(params)}`;
            const cacheConfig = config.cacheConfig;

            // 尝试从缓存获取
            const cachedResult = await this.tryGetFromCache<T>(cacheKey, cacheConfig);
            if (cachedResult) {
                this.logRequest({
                    id: logId,
                    function: config.name,
                    timestamp: Date.now(),
                    duration: Date.now() - startTime,
                    cached: true,
                    success: true
                });

                return {
                    data: cachedResult,
                    cached: true,
                    cacheHit: true,
                    edgeLocation: this.currentRegion.id,
                    executionTime: Date.now() - startTime,
                    timestamp: Date.now()
                };
            }

            // 执行函数（带重试机制）
            let lastError: Error | null = null;
            let result: T;

            for (let attempt = 0; attempt < config.retryAttempts; attempt++) {
                try {
                    result = await this.withTimeout(handler(params), config.timeout);
                    break;
                } catch (error) {
                    lastError = error as Error;
                    if (attempt < config.retryAttempts - 1) {
                        // 指数退避
                        await this.delay(Math.pow(2, attempt) * 100);
                    }
                }
            }

            if (result === undefined) {
                throw lastError || new Error('Function execution failed');
            }

            // 缓存结果
            await this.cacheResult(cacheKey, result, cacheConfig);

            this.logRequest({
                id: logId,
                function: config.name,
                timestamp: Date.now(),
                duration: Date.now() - startTime,
                cached: false,
                success: true
            });

            return {
                data: result as T,
                cached: false,
                cacheHit: false,
                edgeLocation: this.currentRegion.id,
                executionTime: Date.now() - startTime,
                timestamp: Date.now()
            };

        } catch (error) {
            this.logRequest({
                id: logId,
                function: config.name,
                timestamp: Date.now(),
                duration: Date.now() - startTime,
                cached: false,
                success: false,
                error: (error as Error).message
            });

            throw error;
        }
    }

    /**
     * 尝试从缓存获取结果
     */
    private async tryGetFromCache<T>(cacheKey: string, config: any): Promise<T | null> {
        try {
            const result = await edgeCache.get(
                'function',
                cacheKey,
                async () => null,
                {
                    strategy: config.strategy || 'cache-first',
                    ttl: config.ttl || 300000,
                    maxSize: config.maxSize || 100,
                    timeout: config.timeout || 5000
                }
            );

            if (result.hit) {
                return result.data;
            }
            return null;
        } catch {
            return null;
        }
    }

    /**
     * 缓存结果
     */
    private async cacheResult<T>(cacheKey: string, data: T, config: any): Promise<void> {
        try {
            await edgeCache.setMultiple('function', [{
                identifier: cacheKey,
                data,
                ttl: config.ttl || 300000
            }]);
        } catch {
            // 缓存失败不影响主流程
        }
    }

    /**
     * 带超时的执行
     */
    private async withTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
        return Promise.race([
            promise,
            new Promise<never>((_, reject) =>
                setTimeout(() => reject(new Error('Function execution timeout')), timeout)
            )
        ]);
    }

    /**
     * 延迟函数
     */
    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * 记录请求日志
     */
    private logRequest(log: EdgeRequestLog): void {
        this.requestLogs.push(log);
        if (this.requestLogs.length > this.MAX_LOG_SIZE) {
            this.requestLogs.shift();
        }
    }

    /**
     * 获取请求日志
     */
    getRequestLogs(functionName?: string): EdgeRequestLog[] {
        if (functionName) {
            return this.requestLogs.filter(log => log.function === functionName);
        }
        return [...this.requestLogs];
    }

    /**
     * 获取性能统计
     */
    getPerformanceStats(functionName?: string) {
        const logs = functionName
            ? this.requestLogs.filter(log => log.function === functionName)
            : this.requestLogs;

        if (logs.length === 0) {
            return {
                totalRequests: 0,
                successRate: 0,
                averageExecutionTime: 0,
                cacheHitRate: 0,
                p95ExecutionTime: 0,
                p99ExecutionTime: 0
            };
        }

        const successful = logs.filter(log => log.success);
        const cached = logs.filter(log => log.cached);
        const executionTimes = logs.map(log => log.duration).sort((a, b) => a - b);

        return {
            totalRequests: logs.length,
            successRate: (successful.length / logs.length) * 100,
            averageExecutionTime: this.average(logs.map(l => l.duration)),
            cacheHitRate: (cached.length / logs.length) * 100,
            p95ExecutionTime: executionTimes[Math.floor(executionTimes.length * 0.95)] || 0,
            p99ExecutionTime: executionTimes[Math.floor(executionTimes.length * 0.99)] || 0
        };
    }

    /**
     * 计算平均值
     */
    private average(numbers: number[]): number {
        if (numbers.length === 0) return 0;
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    /**
     * 批量执行边缘函数
     */
    async executeBatch<T>(
        requests: Array<{
            config: EdgeFunctionConfig;
            params: any;
        }>
    ): Promise<EdgeFunctionResponse<T>[]> {
        const results = await Promise.allSettled(
            requests.map(req => this.execute<T>(req.config, req.params))
        );

        return results.map((result, index) => {
            if (result.status === 'fulfilled') {
                return result.value;
            }
            return {
                data: null as T,
                cached: false,
                cacheHit: false,
                edgeLocation: this.currentRegion.id,
                executionTime: 0,
                timestamp: Date.now()
            };
        });
    }

    /**
     * 预热边缘函数
     */
    async warmup(
        functionName: string,
        paramsList: any[]
    ): Promise<void> {
        const handler = this.functions.get(functionName);
        if (!handler) return;

        const cacheConfig = {
            strategy: 'cache-first' as const,
            ttl: 300000,
            maxSize: 100,
            timeout: 5000
        };

        const warmupData = await Promise.all(
            paramsList.map(async params => {
                const cacheKey = `${functionName}_${JSON.stringify(params)}`;
                const data = await handler(params);
                return { identifier: cacheKey, data };
            })
        );

        await edgeCache.warmup('function', warmupData, cacheConfig.ttl);
    }

    /**
     * 清除函数缓存
     */
    async clearFunctionCache(functionName: string): Promise<void> {
        await edgeCache.clearByPrefix(`function_${functionName}`);
    }

    /**
     * 获取当前区域信息
     */
    getCurrentRegion() {
        return { ...this.currentRegion };
    }

    /**
     * 获取所有可用区域
     */
    getAvailableRegions() {
        return [...this.regions];
    }

    /**
     * 模拟区域切换
     */
    switchRegion(regionId: string): boolean {
        const region = this.regions.find(r => r.id === regionId);
        if (region) {
            this.currentRegion = region;
            return true;
        }
        return false;
    }

    /**
     * 清除日志
     */
    clearLogs(): void {
        this.requestLogs = [];
    }

    /**
     * 获取已注册的函数列表
     */
    getRegisteredFunctions(): string[] {
        return Array.from(this.functions.keys());
    }
}

// 创建单例实例
export const edgeFunction = new EdgeFunctionService();

// ==================== 预定义的边缘函数 ====================

/**
 * 博客文章推荐函数
 * 基于访问历史和标签相似度推荐文章
 */
edgeFunction.registerFunction('blog.recommend', async (params: {
    currentPostId: string;
    userTags?: string[];
    limit?: number;
}) => {
    const { currentPostId, userTags = [], limit = 3 } = params;

    // 模拟推荐算法延迟
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200));

    // 模拟返回推荐结果
    return {
        recommendations: [
            { id: 'LOG_007', score: 0.95, reason: 'Similar tags: THEORY' },
            { id: 'LOG_003', score: 0.87, reason: 'Popular in your region' },
            { id: 'LOG_005', score: 0.76, reason: 'Trending now' }
        ].slice(0, limit),
        algorithm: 'collaborative_filtering',
        generatedAt: Date.now()
    };
});

/**
 * 文章阅读进度同步函数
 * 将阅读进度同步到边缘存储
 */
edgeFunction.registerFunction('blog.syncProgress', async (params: {
    postId: string;
    userId: string;
    progress: number;
    timestamp: number;
}) => {
    const { postId, userId, progress, timestamp } = params;

    // 存储到边缘存储
    await edgeStorage.set(`progress:${userId}:${postId}`, {
        progress,
        timestamp,
        syncedAt: Date.now()
    }, 86400000); // 24 小时过期

    return {
        success: true,
        syncedAt: Date.now(),
        storageRegion: edgeFunction.getCurrentRegion().id
    };
});

/**
 * 获取文章热门评论函数
 * 从边缘缓存获取热门评论
 */
edgeFunction.registerFunction('blog.getPopularComments', async (params: {
    postId: string;
    limit?: number;
}) => {
    const { postId, limit = 10 } = params;

    // 模拟从缓存获取
    await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 100));

    return {
        comments: [
            {
                id: 'c1',
                author: 'EdgeUser_001',
                content: 'Great insights on synthetic data!',
                upvotes: 42,
                timestamp: Date.now() - 3600000
            },
            {
                id: 'c2',
                author: 'DevFromTokyo',
                content: 'The entropy analysis is spot on.',
                upvotes: 38,
                timestamp: Date.now() - 7200000
            }
        ].slice(0, limit),
        total: 156,
        cached: true
    };
});

/**
 * 内容个性化函数
 * 根据用户偏好调整内容展示
 */
edgeFunction.registerFunction('content.personalize', async (params: {
    content: string;
    preferences: {
        language?: string;
        readingLevel?: 'beginner' | 'intermediate' | 'advanced';
        theme?: 'light' | 'dark' | 'auto';
    };
}) => {
    const { content, preferences } = params;

    // 模拟个性化处理
    await new Promise(resolve => setTimeout(resolve, 150));

    return {
        personalizedContent: content,
        appliedTransformations: [
            'reading_level_adjusted',
            'theme_applied'
        ],
        preferences,
        processedAt: Date.now()
    };
});

/**
 * 实时分析函数
 * 分析用户行为并返回洞察
 */
edgeFunction.registerFunction('analytics.realtime', async (params: {
    events: Array<{
        type: string;
        timestamp: number;
        data: any;
    }>;
}) => {
    const { events } = params;

    // 模拟实时分析
    await new Promise(resolve => setTimeout(resolve, 200));

    return {
        insights: {
            totalEvents: events.length,
            uniqueUsers: new Set(events.map(e => e.data.userId)).size,
            topEvents: ['page_view', 'scroll_depth', 'engagement'],
            averageSessionDuration: 245000, // 4:05
            bounceRate: 0.32
        },
        processedAt: Date.now()
    };
});

/**
 * CDN 预取函数
 * 预测并预取用户可能访问的内容
 */
edgeFunction.registerFunction('cdn.prefetch', async (params: {
    currentPath: string;
    userHistory: string[];
}) => {
    const { currentPath, userHistory } = params;

    // 模拟预取决策
    await new Promise(resolve => setTimeout(resolve, 100));

    return {
        prefetchUrls: [
            '/blog/LOG_007',
            '/blog/LOG_008',
            '/api/recommendations'
        ],
        priority: 'high',
        estimatedBandwidthSaved: '2.4MB',
        expiresAt: Date.now() + 300000 // 5 分钟后过期
    };
});

/**
 * A/B 测试变体分配函数
 */
edgeFunction.registerFunction('abtest.allocate', async (params: {
    experimentId: string;
    userId: string;
    variants: string[];
}) => {
    const { experimentId, userId, variants } = params;

    // 基于用户 ID 的一致性哈希
    const hash = userId.split('').reduce((acc, char) => {
        return ((acc << 5) - acc) + char.charCodeAt(0);
    }, 0);
    const variantIndex = Math.abs(hash) % variants.length;

    return {
        experimentId,
        userId,
        variant: variants[variantIndex],
        allocatedAt: Date.now(),
        consistency: 'deterministic'
    };
});

/**
 * 限流检查函数
 */
edgeFunction.registerFunction('ratelimit.check', async (params: {
    identifier: string;
    limit: number;
    window: number; // 毫秒
}) => {
    const { identifier, limit, window } = params;

    const key = `ratelimit:${identifier}`;
    const now = Date.now();
    const windowStart = now - window;

    // 获取当前计数
    const current = await edgeStorage.get<{
        count: number;
        resetAt: number;
    }>(key);

    if (!current || current.resetAt < windowStart) {
        // 新的窗口
        await edgeStorage.set(key, {
            count: 1,
            resetAt: now + window
        }, window);

        return {
            allowed: true,
            remaining: limit - 1,
            resetAt: now + window
        };
    }

    if (current.count >= limit) {
        return {
            allowed: false,
            remaining: 0,
            resetAt: current.resetAt,
            retryAfter: Math.ceil((current.resetAt - now) / 1000)
        };
    }

    // 增加计数
    await edgeStorage.set(key, {
        count: current.count + 1,
        resetAt: current.resetAt
    }, window);

    return {
        allowed: true,
        remaining: limit - current.count - 1,
        resetAt: current.resetAt
    };
});
