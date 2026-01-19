/**
 * 边缘计算演示模块组件
 * Edge Computing Demo Module Component
 * 展示边缘函数、边缘存储和缓存的使用
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { edgeFunction } from './edge/EdgeFunction';
import { edgeStorage } from './edge/EdgeStorage';
import { edgeCache } from './edge/EdgeCache';
import { EdgeFunctionResponse } from './edge/types';
import './EdgeDemoModule.css';

interface DemoTab {
    id: string;
    label: string;
    icon: string;
}

const DEMO_TABS: DemoTab[] = [
    { id: 'functions', label: 'Edge Functions', icon: '⚡' },
    { id: 'storage', label: 'Edge Storage', icon: '💾' },
    { id: 'cache', label: 'Cache Strategy', icon: '🔄' },
    { id: 'stats', label: 'Statistics', icon: '📊' }
];

const EdgeDemoModule: React.FC = () => {
    const [activeTab, setActiveTab] = useState('functions');
    const [isLoading, setIsLoading] = useState(false);
    const [logs, setLogs] = useState<Array<{
        id: string;
        type: 'info' | 'success' | 'error';
        message: string;
        timestamp: number;
    }>>([]);

    // 边缘函数状态
    const [functionResults, setFunctionResults] = useState<EdgeFunctionResponse<any>[]>([]);
    const [selectedFunction, setSelectedFunction] = useState('blog.recommend');

    // 边缘存储状态
    const [storageKeys, setStorageKeys] = useState<string[]>([]);
    const [storageValue, setStorageValue] = useState('');
    const [storageStats, setStorageStats] = useState<any>(null);

    // 缓存状态
    const [cacheStats, setCacheStats] = useState<any>(null);
    const [cacheTests, setCacheTests] = useState<Array<{
        name: string;
        strategy: string;
        result: string;
        time: number;
    }>>([]);

    // 添加日志
    const addLog = useCallback((type: 'info' | 'success' | 'error', message: string) => {
        setLogs(prev => [...prev, {
            id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type,
            message,
            timestamp: Date.now()
        }].slice(-50)); // 保留最近 50 条
    }, []);

    // 初始化
    useEffect(() => {
        loadInitialData();
        const interval = setInterval(loadInitialData, 5000); // 每 5 秒刷新
        return () => clearInterval(interval);
    }, []);

    const loadInitialData = async () => {
        try {
            // 加载存储统计
            const stats = await edgeStorage.getStats();
            setStorageStats(stats);

            // 加载缓存统计
            const cache = edgeCache.getCacheStats();
            setCacheStats(cache);

            // 加载存储键
            const keys = await edgeStorage.keys();
            setStorageKeys(keys.slice(0, 20)); // 显示前 20 个
        } catch (error) {
            console.error('Failed to load initial data:', error);
        }
    };

    // 执行边缘函数
    const executeFunction = async () => {
        setIsLoading(true);
        addLog('info', `Executing edge function: ${selectedFunction}`);

        try {
            const config = {
                name: selectedFunction,
                endpoint: `/api/edge/${selectedFunction}`,
                cacheConfig: {
                    strategy: 'cache-first' as const,
                    ttl: 300000,
                    maxSize: 100,
                    timeout: 5000
                },
                retryAttempts: 3,
                timeout: 5000
            };

            const params = getFunctionParams(selectedFunction);
            const result = await edgeFunction.execute(config, params);

            setFunctionResults(prev => [result, ...prev].slice(0, 10));
            addLog('success', `Function executed in ${result.executionTime}ms | Cache: ${result.cached ? 'HIT' : 'MISS'} | Region: ${result.edgeLocation}`);
        } catch (error) {
            addLog('error', `Function execution failed: ${(error as Error).message}`);
        } finally {
            setIsLoading(false);
        }
    };

    const getFunctionParams = (funcName: string) => {
        switch (funcName) {
            case 'blog.recommend':
                return { currentPostId: 'LOG_001', limit: 3 };
            case 'blog.syncProgress':
                return { postId: 'LOG_001', userId: 'user_123', progress: 75, timestamp: Date.now() };
            case 'blog.getPopularComments':
                return { postId: 'LOG_001', limit: 5 };
            case 'content.personalize':
                return { content: 'Sample content', preferences: { readingLevel: 'advanced' } };
            case 'analytics.realtime':
                return { events: [{ type: 'page_view', timestamp: Date.now(), data: {} }] };
            case 'cdn.prefetch':
                return { currentPath: '/blog/LOG_001', userHistory: ['/blog', '/home'] };
            case 'abtest.allocate':
                return { experimentId: 'exp_001', userId: 'user_123', variants: ['A', 'B', 'C'] };
            case 'ratelimit.check':
                return { identifier: 'user_123', limit: 10, window: 60000 };
            default:
                return {};
        }
    };

    // 存储操作
    const setStorage = async () => {
        const key = `demo_${Date.now()}`;
        const value = storageValue || `Demo value ${Math.random().toString(36).substr(2, 9)}`;

        try {
            await edgeStorage.set(key, value, 3600000);
            addLog('success', `Stored: ${key} = ${value}`);
            setStorageValue('');
            loadInitialData();
        } catch (error) {
            addLog('error', `Storage failed: ${(error as Error).message}`);
        }
    };

    const getStorage = async (key: string) => {
        try {
            const value = await edgeStorage.get(key);
            if (value !== null) {
                addLog('success', `Retrieved: ${key} = ${JSON.stringify(value)}`);
            } else {
                addLog('info', `Key not found: ${key}`);
            }
        } catch (error) {
            addLog('error', `Retrieval failed: ${(error as Error).message}`);
        }
    };

    const deleteStorage = async (key: string) => {
        try {
            await edgeStorage.delete(key);
            addLog('success', `Deleted: ${key}`);
            loadInitialData();
        } catch (error) {
            addLog('error', `Delete failed: ${(error as Error).message}`);
        }
    };

    // 缓存测试
    const testCacheStrategy = async (strategy: string) => {
        setIsLoading(true);
        const startTime = Date.now();

        try {
            const config = {
                name: 'blog.recommend',
                endpoint: '/api/edge/blog.recommend',
                cacheConfig: {
                    strategy: strategy as any,
                    ttl: 300000,
                    maxSize: 100,
                    timeout: 5000
                },
                retryAttempts: 1,
                timeout: 5000
            };

            // 第一次调用（缓存未命中）
            const result1 = await edgeFunction.execute(config, { currentPostId: 'LOG_001' });
            const firstCallTime = result1.executionTime;

            // 第二次调用（缓存命中）
            const result2 = await edgeFunction.execute(config, { currentPostId: 'LOG_001' });
            const secondCallTime = result2.executionTime;

            setCacheTests(prev => [{
                name: `${strategy} test`,
                strategy,
                result: result2.cached ? 'HIT' : 'MISS',
                time: Date.now() - startTime
            }, ...prev].slice(0, 10));

            addLog('success', `${strategy} test complete | First: ${firstCallTime}ms, Second: ${secondCallTime}ms`);
        } catch (error) {
            addLog('error', `Cache test failed: ${(error as Error).message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // 清除所有数据
    const clearAll = async () => {
        try {
            await edgeStorage.clear();
            await edgeCache.clearAll();
            edgeFunction.clearLogs();
            setFunctionResults([]);
            setCacheTests([]);
            addLog('success', 'All edge data cleared');
            loadInitialData();
        } catch (error) {
            addLog('error', `Clear failed: ${(error as Error).message}`);
        }
    };

    return (
        <div className="edge-demo-module">
            <div className="edge-demo-header">
                <div className="edge-demo-title">
                    <span className="edge-icon">⚡</span>
                    <h2>EDGE COMPUTING MODULE</h2>
                </div>
                <div className="edge-demo-status">
                    <span className={`status-indicator ${isLoading ? 'active' : ''}`}></span>
                    <span className="status-text">{isLoading ? 'Processing...' : 'Ready'}</span>
                </div>
            </div>

            {/* 标签页导航 */}
            <div className="edge-demo-tabs">
                {DEMO_TABS.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <span className="tab-icon">{tab.icon}</span>
                        <span className="tab-label">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* 内容区域 */}
            <div className="edge-demo-content">
                <AnimatePresence mode="wait">
                    {activeTab === 'functions' && (
                        <motion.div
                            key="functions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="tab-content"
                        >
                            <div className="function-controls">
                                <select
                                    value={selectedFunction}
                                    onChange={(e) => setSelectedFunction(e.target.value)}
                                    className="function-select"
                                >
                                    <option value="blog.recommend">blog.recommend - 文章推荐</option>
                                    <option value="blog.syncProgress">blog.syncProgress - 进度同步</option>
                                    <option value="blog.getPopularComments">blog.getPopularComments - 热门评论</option>
                                    <option value="content.personalize">content.personalize - 内容个性化</option>
                                    <option value="analytics.realtime">analytics.realtime - 实时分析</option>
                                    <option value="cdn.prefetch">cdn.prefetch - CDN 预取</option>
                                    <option value="abtest.allocate">abtest.allocate - A/B 测试</option>
                                    <option value="ratelimit.check">ratelimit.check - 限流检查</option>
                                </select>
                                <button
                                    onClick={executeFunction}
                                    disabled={isLoading}
                                    className="execute-btn"
                                >
                                    {isLoading ? 'Executing...' : 'Execute ⚡'}
                                </button>
                            </div>

                            <div className="results-section">
                                <h4>Recent Results</h4>
                                <div className="results-list">
                                    {functionResults.length === 0 ? (
                                        <div className="empty-state">No results yet. Execute a function to see results.</div>
                                    ) : (
                                        functionResults.map((result, idx) => (
                                            <div key={idx} className="result-card">
                                                <div className="result-header">
                                                    <span className="result-function">{selectedFunction}</span>
                                                    <span className={`result-cache ${result.cached ? 'hit' : 'miss'}`}>
                                                        {result.cached ? '✓ CACHE HIT' : '✗ CACHE MISS'}
                                                    </span>
                                                </div>
                                                <div className="result-meta">
                                                    <span>⏱ {result.executionTime}ms</span>
                                                    <span>🌍 {result.edgeLocation}</span>
                                                    <span>📅 {new Date(result.timestamp).toLocaleTimeString()}</span>
                                                </div>
                                                <div className="result-data">
                                                    <pre>{JSON.stringify(result.data, null, 2)}</pre>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'storage' && (
                        <motion.div
                            key="storage"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="tab-content"
                        >
                            <div className="storage-controls">
                                <input
                                    type="text"
                                    value={storageValue}
                                    onChange={(e) => setStorageValue(e.target.value)}
                                    placeholder="Enter value to store..."
                                    className="storage-input"
                                />
                                <button onClick={setStorage} className="store-btn">
                                    Store 💾
                                </button>
                            </div>

                            <div className="storage-stats">
                                <div className="stat-card">
                                    <span className="stat-label">Total Items</span>
                                    <span className="stat-value">{storageStats?.totalItems || 0}</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-label">Total Size</span>
                                    <span className="stat-value">{((storageStats?.totalSize || 0) / 1024).toFixed(2)} KB</span>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-label">Hit Rate</span>
                                    <span className="stat-value">{((storageStats?.hitRate || 0) * 100).toFixed(1)}%</span>
                                </div>
                            </div>

                            <div className="storage-keys">
                                <h4>Stored Keys</h4>
                                <div className="keys-list">
                                    {storageKeys.length === 0 ? (
                                        <div className="empty-state">No keys stored yet.</div>
                                    ) : (
                                        storageKeys.map(key => (
                                            <div key={key} className="key-item">
                                                <span className="key-name">{key}</span>
                                                <div className="key-actions">
                                                    <button onClick={() => getStorage(key)} className="key-btn get">
                                                        Get
                                                    </button>
                                                    <button onClick={() => deleteStorage(key)} className="key-btn delete">
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'cache' && (
                        <motion.div
                            key="cache"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="tab-content"
                        >
                            <div className="cache-controls">
                                <button onClick={() => testCacheStrategy('cache-first')} className="cache-test-btn">
                                    Test Cache-First
                                </button>
                                <button onClick={() => testCacheStrategy('network-first')} className="cache-test-btn">
                                    Test Network-First
                                </button>
                                <button onClick={() => testCacheStrategy('stale-while-revalidate')} className="cache-test-btn">
                                    Test Stale-While-Revalidate
                                </button>
                            </div>

                            <div className="cache-info">
                                <h4>Cache Statistics</h4>
                                <div className="cache-stats-grid">
                                    <div className="cache-stat">
                                        <span className="cache-stat-label">Memory Cache</span>
                                        <span className="cache-stat-value">
                                            {cacheStats?.memorySize || 0} / {cacheStats?.memoryMaxSize || 0}
                                        </span>
                                    </div>
                                    <div className="cache-stat">
                                        <span className="cache-stat-label">Edge Region</span>
                                        <span className="cache-stat-value">{cacheStats?.edgeNode?.city || 'Unknown'}</span>
                                    </div>
                                    <div className="cache-stat">
                                        <span className="cache-stat-label">Latency</span>
                                        <span className="cache-stat-value">{cacheStats?.edgeNode?.latency || 0}ms</span>
                                    </div>
                                    <div className="cache-stat">
                                        <span className="cache-stat-label">Load</span>
                                        <span className="cache-stat-value">{cacheStats?.edgeNode?.loadPercentage || 0}%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="cache-tests">
                                <h4>Cache Test Results</h4>
                                <div className="cache-tests-list">
                                    {cacheTests.length === 0 ? (
                                        <div className="empty-state">Run a cache test to see results.</div>
                                    ) : (
                                        cacheTests.map((test, idx) => (
                                            <div key={idx} className="cache-test-result">
                                                <span className="test-name">{test.name}</span>
                                                <span className="test-strategy">{test.strategy}</span>
                                                <span className={`test-result ${test.result === 'HIT' ? 'hit' : 'miss'}`}>
                                                    {test.result}
                                                </span>
                                                <span className="test-time">{test.time}ms</span>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {activeTab === 'stats' && (
                        <motion.div
                            key="stats"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="tab-content"
                        >
                            <div className="overall-stats">
                                <div className="stats-grid">
                                    <div className="stat-box">
                                        <span className="stat-box-title">Edge Node</span>
                                        <span className="stat-box-value">{cacheStats?.edgeNode?.city || 'Unknown'}</span>
                                        <span className="stat-box-sub">{cacheStats?.edgeNode?.region || ''}</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-box-title">Functions</span>
                                        <span className="stat-box-value">{edgeFunction.getRegisteredFunctions().length}</span>
                                        <span className="stat-box-sub">Registered</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-box-title">Storage Items</span>
                                        <span className="stat-box-value">{storageStats?.totalItems || 0}</span>
                                        <span className="stat-box-sub">{((storageStats?.totalSize || 0) / 1024).toFixed(1)} KB</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-box-title">Cache Hit Rate</span>
                                        <span className="stat-box-value">{((storageStats?.hitRate || 0) * 100).toFixed(1)}%</span>
                                        <span className="stat-box-sub">Memory: {cacheStats?.memorySize || 0}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="action-buttons">
                                <button onClick={clearAll} className="clear-all-btn">
                                    Clear All Data 🗑️
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* 日志区域 */}
            <div className="edge-demo-logs">
                <h4>Activity Log</h4>
                <div className="logs-list">
                    {logs.length === 0 ? (
                        <div className="empty-state">No activity yet.</div>
                    ) : (
                        logs.map(log => (
                            <div key={log.id} className={`log-entry log-${log.type}`}>
                                <span className="log-time">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                <span className="log-message">{log.message}</span>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default EdgeDemoModule;
