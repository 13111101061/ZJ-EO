/**
 * 边缘计算模块类型定义
 * Edge Computing Module Type Definitions
 */

// 边缘函数响应类型
export interface EdgeFunctionResponse<T> {
    data: T;
    cached: boolean;
    cacheHit: boolean;
    edgeLocation: string;
    executionTime: number;
    timestamp: number;
}

// 边缘存储项类型
export interface EdgeStorageItem<T = any> {
    key: string;
    value: T;
    metadata: {
        createdAt: number;
        expiresAt: number;
        accessCount: number;
        lastAccessed: number;
        version: number;
    };
}

// 缓存策略配置
export interface CacheConfig {
    ttl: number; // Time to live in milliseconds
    strategy: 'network-first' | 'cache-first' | 'stale-while-revalidate' | 'network-only';
    maxSize: number;
}

// 边缘函数配置
export interface EdgeFunctionConfig {
    name: string;
    endpoint: string;
    cacheConfig: CacheConfig;
    retryAttempts: number;
    timeout: number;
}

// 边缘存储统计
export interface EdgeStorageStats {
    totalItems: number;
    totalSize: number;
    hitRate: number;
    missRate: number;
    averageAccessTime: number;
}

// 边缘节点信息
export interface EdgeNodeInfo {
    region: string;
    city: string;
    latency: number;
    loadPercentage: number;
}

// 博客文章访问统计（使用边缘存储）
export interface PostVisitStats {
    postId: string;
    visits: number;
    uniqueVisitors: Set<string>;
    lastVisit: number;
    popularRegions: Map<string, number>;
}

// 边缘函数请求日志
export interface EdgeRequestLog {
    id: string;
    function: string;
    timestamp: number;
    duration: number;
    cached: boolean;
    success: boolean;
    error?: string;
}
