/**
 * 组件库注册表
 * 基于配置文件生成，支持懒加载
 *
 * 新增组件步骤：
 * 1. 在 src/components/library/catalog/{category}/ 下创建组件文件
 * 2. 在 src/data/components.config.json 中添加组件配置
 * 3. 在 src/data/componentLoader.ts 中添加懒加载定义
 * 4. 运行 pnpm dev 验证
 */

import React from 'react';
import { Category, CategoryMeta, ComponentItem, ComponentMeta } from './types';
import { getLazyComponent, getCategoryComponentIds } from './componentLoader';
import config from './components.config.json';

// ============ 从配置生成元数据 ============

/**
 * 分类元数据列表
 */
export const categoryRegistry: CategoryMeta[] = config.categories.map(cat => ({
  id: cat.id,
  title: cat.title,
  description: cat.description,
  componentIds: config.components
    .filter(comp => comp.category === cat.id)
    .map(comp => comp.id),
}));

/**
 * 组件元数据映射（按组件ID索引）
 */
export const componentRegistry: Record<string, ComponentMeta> = Object.fromEntries(
  config.components.map(comp => [
    comp.id,
    {
      id: comp.id,
      title: comp.title,
      description: comp.description,
      colSpan: (comp as any).colSpan,
      code: (comp as any).code,
      componentPath: `@/components/library/catalog/${comp.category}/${comp.file}`,
      categoryId: comp.category,
    },
  ])
);

// ============ 兼容旧 API ============

/**
 * 获取分类的组件列表
 * 兼容旧的 libraryRegistry 结构
 */
const buildCategoryItems = (categoryId: string): ComponentItem[] => {
  const componentIds = getCategoryComponentIds(categoryId);

  return componentIds.map(id => {
    const meta = componentRegistry[id];
    const LazyComponent = getLazyComponent(id);

    return {
      id: meta?.id || id,
      title: meta?.title || id,
      description: meta?.description,
      colSpan: meta?.colSpan,
      code: meta?.code,
      // 使用懒加载组件，类型断言保持兼容
      component: (LazyComponent || (() => null)) as React.ComponentType,
    };
  });
};

/**
 * 组件库注册表（兼容旧结构）
 * 这里的 component 是懒加载组件，需要配合 Suspense 使用
 */
export const libraryRegistry: Category[] = categoryRegistry.map(cat => ({
  id: cat.id,
  title: cat.title,
  description: cat.description,
  items: buildCategoryItems(cat.id),
}));

// ============ 工具函数 ============

/**
 * 根据ID获取分类
 */
export const getCategoryById = (categoryId: string): CategoryMeta | undefined => {
  return categoryRegistry.find(cat => cat.id === categoryId);
};

/**
 * 根据ID获取组件元数据
 */
export const getComponentMeta = (componentId: string): ComponentMeta | undefined => {
  return componentRegistry[componentId];
};

/**
 * 获取所有分类ID
 */
export const getAllCategoryIds = (): string[] => {
  return categoryRegistry.map(cat => cat.id);
};

/**
 * 获取组件总数
 */
export const getTotalComponentCount = (): number => {
  return config.components.length;
};

/**
 * 搜索组件
 */
export const searchComponents = (query: string): ComponentMeta[] => {
  const lowerQuery = query.toLowerCase();

  return config.components
    .filter(comp =>
      comp.title.toLowerCase().includes(lowerQuery) ||
      comp.description?.toLowerCase().includes(lowerQuery) ||
      comp.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
    .map(comp => componentRegistry[comp.id]);
};

// ============ 导出类型（重新导出以保持兼容）============

export type { ComponentItem, Category } from './types';

// 默认导出
export default libraryRegistry;