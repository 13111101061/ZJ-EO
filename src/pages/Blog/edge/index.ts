/**
 * Edge Computing Module Exports
 * 边缘计算模块导出索引
 */

// Types
export * from './types';

// Core Services
export { edgeStorage } from './EdgeStorage';
export { edgeCache } from './EdgeCache';
export { edgeFunction } from './EdgeFunction';

// Re-export main classes for advanced usage
export { EdgeStorage } from './EdgeStorage';
export { EdgeCacheManager } from './EdgeCache';
export { EdgeFunctionService } from './EdgeFunction';
