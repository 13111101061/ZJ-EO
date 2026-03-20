/**
 * 组件库类型定义
 * 用于支持懒加载和热添加配置
 */

import React from 'react';

// ============ 元数据类型（轻量级，用于配置文件）============

/**
 * 组件元数据
 * 不包含组件引用，只存储路径信息
 */
export interface ComponentMeta {
  id: string;
  title: string;
  description?: string;
  colSpan?: number;
  code?: string;
  /** 组件路径，用于动态加载 */
  componentPath: string;
  /** 分类ID */
  categoryId: string;
}

/**
 * 分类元数据
 */
export interface CategoryMeta {
  id: string;
  title: string;
  description: string;
  /** 该分类下所有组件ID */
  componentIds: string[];
}

// ============ 配置文件类型 ============

/**
 * 组件配置项
 * 用于 components.config.json
 */
export interface ComponentConfig {
  id: string;
  title: string;
  description?: string;
  category: string;
  /** 组件文件名（不含扩展名） */
  file: string;
  colSpan?: number;
  code?: string;
  /** 标签，用于搜索 */
  tags?: string[];
}

/**
 * 分类配置项
 */
export interface CategoryConfig {
  id: string;
  title: string;
  description: string;
  /** 排序权重 */
  order: number;
  /** 图标名称 */
  icon?: string;
}

/**
 * 组件库配置文件结构
 */
export interface LibraryConfig {
  version: string;
  lastUpdated: string;
  categories: CategoryConfig[];
  components: ComponentConfig[];
}

// ============ 运行时类型（兼容旧接口）============

/**
 * 组件项（运行时）
 * 包含实际的组件引用
 */
export interface ComponentItem {
  id: string;
  title: string;
  description?: string;
  component: React.ComponentType;
  code?: string;
  colSpan?: number;
}

/**
 * 分类（运行时）
 * 包含实际的组件引用
 */
export interface Category {
  id: string;
  title: string;
  description: string;
  items: ComponentItem[];
}

// ============ 工具类型 ============

/**
 * 分类ID到路径前缀的映射
 */
export const CATEGORY_PATH_MAP: Record<string, string> = {
  navbars: '@/components/library/catalog/navbars',
  sidebars: '@/components/library/catalog/sidebars',
  dropdowns: '@/components/library/catalog/dropdowns',
  cards: '@/components/library/catalog/cards',
  oracle_ui: '@/components/library/catalog/oracle',
  workflownodes: '@/components/library/catalog/workflownodes',
  wrappers: '@/components/library/catalog/wrappers',
  toybox: '@/components/library/catalog/toybox',
  hero: '@/components/library/catalog/hero',
  backgrounds: '@/components/library/catalog/backgrounds',
  footers: '@/components/library/catalog/footers',
  faq: '@/components/library/catalog/faq',
  testimonials: '@/components/library/catalog/testimonials',
  bento: '@/components/library/catalog/bento',
  blog: '@/components/library/catalog/blog',
  blogcontent: '@/components/library/catalog/blogcontent',
  contact: '@/components/library/catalog/contact',
  cta: '@/components/library/catalog/cta',
  features: '@/components/library/catalog/features',
  logos: '@/components/library/catalog/logos',
  pricing: '@/components/library/catalog/pricing',
  stats: '@/components/library/catalog/stats',
  auth: '@/components/library/catalog/auth',
};

/**
 * 分类ID到前缀的映射（用于生成组件ID）
 */
export const CATEGORY_PREFIX_MAP: Record<string, string> = {
  navbars: 'NAV',
  sidebars: 'SIDE',
  dropdowns: 'DD',
  cards: 'CARD',
  oracle_ui: 'ORACLE',
  workflownodes: 'WF',
  wrappers: 'WRAP',
  toybox: 'TOY',
  hero: 'HERO',
  backgrounds: 'BG',
  footers: 'FOOTER',
  faq: 'FAQ',
  testimonials: 'TEST',
  bento: 'BENTO',
  blog: 'BLOG',
  blogcontent: 'BC',
  contact: 'CONTACT',
  cta: 'CTA',
  features: 'FEAT',
  logos: 'LOGO',
  pricing: 'PRICE',
  stats: 'STAT',
  auth: 'AUTH',
};