# 项目说明

## 项目简介

本项目是一个基于现代前端技术栈开发的 Web 应用程序。

## 技术栈

- **框架**: React + Vite
- **包管理器**: pnpm
- **语言**: TypeScript

## 环境要求

- Node.js 16.x 或更高版本
- pnpm 8.x 或更高版本

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm run dev
```

开发服务器将在 http://localhost:3000 启动

### 3. 构建生产版本

```bash
pnpm run build
```

### 4. 预览生产构建

```bash
pnpm run preview
```

## 项目结构

```
├── src/              # 源代码目录
├── public/           # 静态资源目录
├── package.json      # 项目配置文件
└── vite.config.ts    # Vite 配置文件
```

## 开发规范

- 使用 TypeScript 进行类型检查
- 遵循 ESLint 代码规范
- 提交代码前确保通过所有测试

## 常见问题

如遇到依赖安装问题，可以尝试：
- 清除缓存: `pnpm store prune`
- 删除 node_modules 后重新安装: `rm -rf node_modules && pnpm install`
