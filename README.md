
这是一个组件库系统，专为React组件提供良好的展示体验。它支持多种协议（HTML、CSS等），并集成了静态博客功能，节点展示配有边缘缓存功能，可实现快速加载。组件也有良好的链接可添加模块，避免组件架构混乱难以维护，同时也提供了丰富的文档和示例，方便开发者使用和定制。组件展示还集成了优秀的缓存机制，可有效减少加载时间，提升用户体验。也集成了流式加载以及优秀的分类懒加载机制。

## 项目简介

这是一个基于 React 18、Vite 和 TypeScript 构建的现代化 Web 应用程序。项目具有以下特色功能：

- **丰富的组件库** - 140+ 预制组件，覆盖导航、侧边栏、卡片等常见场景
- **博客系统** - 基于 React 的博客系统，支持标签筛选、阅读进度追踪
- **边缘计算模块** - 模拟边缘函数、边缘存储和多级缓存的实验性功能

---

## 技术栈

| 技术 | 版本 | 说明 |
|------------|---------|-------------|
| React | 18.3.1 | UI 框架 |
| TypeScript | 5.7.2 | 类型安全的 JavaScript |
| Vite | 7.2.7 | 构建工具和开发服务器 |
| React Router DOM | 7.3.0 | 客户端路由 |
| Framer Motion | 12.9.2 | 动画库 |
| Tailwind CSS | 3.4.17 | 原子化 CSS |
| GSAP | 3.14.2 | 专业动画库 |
| Three.js | 0.167.1 | 3D 图形库 |
| pnpm | - | 包管理器 |

---

## 快速开始

### 环境要求

- Node.js 16.x 或更高版本
- pnpm 8.x 或更高版本

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
# 启动开发服务器 (http://localhost:3000)
pnpm run dev

# 或者使用显式标志
pnpm run dev:client
```

### 构建生产版本

```bash
pnpm run build
```

---

## 项目结构

```
├── src/
│   ├── pages/                    # 页面组件
│   │   ├── Home.tsx              # 首页
│   │   ├── Blog/                 # 博客模块
│   │   │   ├── index.tsx         # 博客列表页
│   │   │   ├── BlogPost.tsx      # 博客详情页
│   │   │   ├── blogData.ts       # 博客数据源
│   │   │   ├── EdgeDemoModule.tsx # 边缘计算演示
│   │   │   └── edge/             # 边缘计算层
│   │   │       ├── types.ts      # 类型定义
│   │   │       ├── EdgeStorage.ts # IndexedDB 封装
│   │   │       ├── EdgeCache.ts  # 多级缓存
│   │   │       └── EdgeFunction.ts # 边缘函数
│   │   ├── Library/              # 组件库浏览页
│   │   └── FusionHome/           # Fusion 首页
│   ├── components/
│   │   ├── layout/               # 布局组件
│   │   ├── sections/             # 页面区块
│   │   ├── library/              # 组件库
│   │   │   ├── catalog/          # 组件分类
│   │   │   │   ├── navbars/      # 31 个导航栏组件
│   │   │   │   ├── sidebars/     # 16 个侧边栏组件
│   │   │   │   ├── dropdowns/    # 34 个下拉菜单组件
│   │   │   │   ├── cards/        # 卡片组件
│   │   │   │   ├── hero/         # 英雄区组件
│   │   │   │   ├── backgrounds/  # 背景组件
│   │   │   │   ├── footers/      # 页脚组件
│   │   │   │   ├── faq/          # FAQ 组件
│   │   │   │   ├── testimonials/ # 证言组件
│   │   │   │   ├── wrappers/     # 包装容器组件
│   │   │   │   ├── workflownodes/ # 工作流节点
│   │   │   │   ├── toybox/       # 玩具风格组件
│   │   │   │   └── oracle/       # Oracle UI 组件
│   │   │   └── ui/               # UI 辅助组件
│   │   └── ui/                   # 基础 UI 组件
│   ├── data/
│   │   └── libraryRegistry.tsx   # 组件注册表
│   ├── App.tsx                   # 路由配置
│   └── main.tsx                  # 入口文件
├── public/                       # 静态资源
├── package.json                  # 依赖配置
├── vite.config.ts                # Vite 配置
└── tsconfig.json                 # TypeScript 配置
```

---

## 组件库说明

项目包含一个综合组件库，共 **140+ 个组件**，分为 11 个类别。


### 使用方式

#### 直接导入

```tsx
import { FloatingGlass, DynamicPill } from '@/components/library/catalog/navbars';

export default function MyPage() {
  return (
    <>
      <FloatingGlass />
      <DynamicPill />
    </>
  );
}
```

#### 通过注册表动态使用

```tsx
import { libraryRegistry } from '@/data/libraryRegistry';

const navbars = libraryRegistry.find(cat => cat.id === 'navbars');
// 通过 navbars.items 访问所有导航栏组件
```

### 组件特点

- **类型安全** - 完整的 TypeScript 支持
- **可定制** - 支持 `className` 和 `style` 属性
- **可组合** - 支持 `children` 嵌套内容
- **独立样式** - 每个组件都有专用 CSS 文件
- **一键复制** - 浏览器中可直接复制组件代码

### 组件展示

访问 `/library` 路由可以浏览所有组件的实时预览和源代码。

---

## 博客模块说明

一个功能丰富的博客系统，采用未来主义、赛博朋克风格设计。

### 功能特性

- **Bento 网格布局** - 动态卡片网格，支持多种尺寸
- **标签筛选** - 按类别筛选文章（THEORY、DESIGN、ART、HCI、ML）
- **阅读进度** - 详情页的滚动进度指示器
- **动态主题** - 每篇文章可自定义强调色和纹理
- **侧边栏导航** - 基于类别的筛选导航
- **流畅动画** - Framer Motion 过渡效果

### 博客结构

```
Blog/
├── index.tsx           # 列表页，带网格布局
├── BlogPost.tsx        # 详情页，带阅读进度
├── blogData.ts         # 文章数据和类型定义
├── Blog.css            # 列表页样式
└── BlogPost.css        # 详情页样式
```

### 博客文章类型

```typescript
interface BlogPost {
    id: string;              // 文章 ID
    title: string;           // 标题
    excerpt: string;         // 摘要
    date: string;            // 日期
    readTime: string;        // 阅读时长
    tags: string[];          // 标签
    size?: 'normal' | 'wide' | 'tall' | 'hero'; // 卡片尺寸
    content?: string;        // 完整内容
    themeColor?: string;     // 主题色
    texture?: string;        // 纹理背景
}
```

### 路由

- `/blog` - 博客列表页
- `/blog/:id` - 博客详情页

---

## 边缘计算模块说明

这是一个实验性模块，在浏览器中演示边缘计算概念，模拟边缘函数、边缘存储和缓存策略。

### 架构设计

模块实现了一个三层架构：

```
┌─────────────────────────────────────────────────────────────┐
│                    边缘计算层                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │   内存缓存   │    │  IndexedDB   │    │    网络      │  │
│  │   (L1)      │◄──►│  (L2 缓存)   │◄──►│   (源站)     │  │
│  └─────────────┘    └──────────────┘    └──────────────┘  │
│         ▲                   ▲                   ▲          │
│         │                   │                   │          │
│         └───────────────────┴───────────────────┘          │
│                             │                              │
│                    ┌──────────────┐                        │
│                    │  边缘缓存    │                        │
│                    │   管理器     │                        │
│                    └──────────────┘                        │
│                             │                              │
│                    ┌──────────────┐                        │
│                    │   边缘函数   │                        │
│                    └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### 核心组件

#### 1. 边缘存储 (`EdgeStorage.ts`)

IndexedDB 封装，模拟边缘 KV 存储。

**功能特性：**
- 键值存储，支持 TTL 过期时间
- 自动过期清理
- 访问统计
- 批量操作
- 前缀查询

**使用示例：**

```typescript
import { edgeStorage } from '@/pages/Blog/edge';

// 设置值，1 小时过期
await edgeStorage.set('key', { data: 'value' }, 3600000);

// 获取值
const value = await edgeStorage.get('key');

// 获取统计信息
const stats = await edgeStorage.getStats();
console.log(stats.hitRate); // 缓存命中率
```

#### 2. 边缘缓存 (`EdgeCache.ts`)

多级缓存，支持多种缓存策略。

**缓存策略：**
- `cache-first` - 优先使用缓存
- `network-first` - 优先网络请求，失败时回退到缓存
- `stale-while-revalidate` - 使用缓存的同时异步更新
- `network-only` - 仅使用网络，跳过缓存

**使用示例：**

```typescript
import { edgeCache } from '@/pages/Blog/edge';

const result = await edgeCache.get(
    'api',           // 前缀
    'posts',         // 标识符
    async () => await fetchPosts(),  // 数据获取函数
    {
        strategy: 'cache-first',
        ttl: 300000,  // 5 分钟
        maxSize: 100,
        timeout: 5000
    }
);
```

#### 3. 边缘函数 (`EdgeFunction.ts`)

模拟边缘函数执行环境。

**预定义函数：**

| 函数名 | 说明 |
|----------|-------------|
| `blog.recommend` | 内容推荐 |
| `blog.syncProgress` | 阅读进度同步 |
| `blog.getPopularComments` | 获取热门评论 |
| `content.personalize` | 内容个性化 |
| `analytics.realtime` | 实时分析 |
| `cdn.prefetch` | CDN 预取预测 |
| `abtest.allocate` | A/B 测试分配 |
| `ratelimit.check` | 限流检查 |

**使用示例：**

```typescript
import { edgeFunction } from '@/pages/Blog/edge';

const result = await edgeFunction.execute(
    {
        name: 'blog.recommend',
        endpoint: '/api/edge/blog.recommend',
        cacheConfig: {
            strategy: 'cache-first',
            ttl: 300000,
            maxSize: 100,
            timeout: 5000
        },
        retryAttempts: 3,
        timeout: 5000
    },
    { currentPostId: 'LOG_001', limit: 3 }
);

console.log(result.data);
console.log(result.cached);        // 是否来自缓存
console.log(result.edgeLocation);  // 边缘节点位置
```

### 演示模块

`EdgeDemoModule.tsx` 组件提供了一个交互式界面，用于测试所有边缘计算功能。

**功能：**
- 执行不同参数的边缘函数
- 查看缓存命中/未命中率
- 监控边缘节点统计
- 测试不同缓存策略
- 查看实时活动日志

**访问方式：** 滚动到博客页面底部即可看到边缘计算模块。

### 性能优势

| 层级 | 访问时间 | 说明 |
|-------|-------------|-------------|
| 内存缓存 (L1) | < 1ms | 内存中，最快访问 |
| IndexedDB (L2) | 5-20ms | 持久化，容量较大 |
| 网络 | 100-500ms | 最慢，但数据最新 |

---

## 开发脚本

```bash
# 开发
pnpm run dev              # 启动开发服务器
pnpm run dev:client       # 启动开发服务器（带标志）

# 构建
pnpm run build            # 构建生产版本
pnpm run build:client     # 仅构建客户端

# 工具
pnpm run ingest           # 导入 HTML 文件
pnpm run component:create # 创建新组件
pnpm run component:batch  # 批量创建组件
pnpm run component:list   # 列出所有组件
pnpm run component:help   # 组件帮助
```

---

## 浏览器支持

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

---

## 许可证

MIT License

---

<div align="center">

**使用 React + Vite 构建 ❤️**

</div>
