/**
 * 组件生成器脚本
 *
 * 用法:
 *   pnpm component:create -c <category> -t <title>  创建单个组件
 *   pnpm component:batch -f <file>                 批量创建组件
 *   pnpm component:list [-c <category>]            列出组件
 *   pnpm component:help                            显示帮助
 */

const fs = require('fs');
const path = require('path');

// ============ 配置路径 ============

const PROJECT_ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(PROJECT_ROOT, 'src/data/components.config.json');
const LOADER_PATH = path.join(PROJECT_ROOT, 'src/data/componentLoader.ts');
const CATALOG_PATH = path.join(PROJECT_ROOT, 'src/components/library/catalog');

// ============ 分类ID到前缀映射 ============

const CATEGORY_PREFIX = {
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
  contact: 'CONTACT',
  cta: 'CTA',
  features: 'FEAT',
  logos: 'LOGO',
  pricing: 'PRICE',
  stats: 'STAT',
  auth: 'AUTH',
};

// ============ 模板 ============

const COMPONENT_TEMPLATE = `import React from 'react';
import './{COMPONENT_NAME}.css';

interface {COMPONENT_NAME}Props {
  // Add your props here
}

const {COMPONENT_NAME}: React.FC<{COMPONENT_NAME}Props> = (props) => {
  return (
    <div className="{COMPONENT_KEBAB}">
      {/* Component content */}
      <span>{COMPONENT_NAME} Component</span>
    </div>
  );
};

export default {COMPONENT_NAME};
`;

const CSS_TEMPLATE = `.{COMPONENT_KEBAB} {
  /* Add your styles here */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  min-height: 100px;
}
`;

// ============ 工具函数 ============

function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, c => c.toUpperCase());
}

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .toLowerCase();
}

function loadConfig() {
  const content = fs.readFileSync(CONFIG_PATH, 'utf-8');
  return JSON.parse(content);
}

function saveConfig(config) {
  fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf-8');
  console.log('✅ 已更新 components.config.json');
}

function getNextId(category, config) {
  const prefix = CATEGORY_PREFIX[category] || 'COMP';
  const existingIds = config.components
    .filter(c => c.category === category)
    .map(c => c.id);

  const numbers = existingIds
    .map(id => parseInt(id.replace(`${prefix}_`, ''), 10))
    .filter(n => !isNaN(n));

  const max = numbers.length > 0 ? Math.max(...numbers) : 0;
  return `${prefix}_${String(max + 1).padStart(2, '0')}`;
}

function ensureCategoryExists(category) {
  const categoryPath = path.join(CATALOG_PATH, category);
  if (!fs.existsSync(categoryPath)) {
    fs.mkdirSync(categoryPath, { recursive: true });
    console.log(`📁 创建分类目录: ${category}`);
  }
}

function appendToLoader(componentId, category, componentName) {
  let content = fs.readFileSync(LOADER_PATH, 'utf-8');

  // 找到对应分类的位置
  const categoryHeader = `// ========== ${category.charAt(0).toUpperCase() + category.slice(1)} ==========`;
  const importStatement = `  '${componentId}': React.lazy(() => import('@/components/library/catalog/${category}/${componentName}')),\n`;

  // 检查是否已存在
  if (content.includes(`'${componentId}':`)) {
    console.log(`⚠️  Loader 中已存在组件: ${componentId}`);
    return;
  }

  // 找到分类位置并添加
  const categoryIndex = content.indexOf(categoryHeader);
  if (categoryIndex !== -1) {
    // 找到该分类后的第一个插入点
    const nextCategoryIndex = content.indexOf('// ==========', categoryIndex + 1);
    const insertIndex = nextCategoryIndex !== -1 ? nextCategoryIndex : content.indexOf('};', categoryIndex);

    content = content.slice(0, insertIndex) + importStatement + content.slice(insertIndex);
    fs.writeFileSync(LOADER_PATH, content, 'utf-8');
    console.log(`✅ 已添加到 componentLoader.ts: ${componentId}`);
  } else {
    // 分类不存在，添加新分类
    const lastCategoryIndex = content.lastIndexOf('// ==========');
    const nextInsertIndex = content.indexOf('\n', lastCategoryIndex) + 1;

    const newSection = `\n  // ========== ${category.charAt(0).toUpperCase() + category.slice(1)} ==========\n${importStatement}`;
    content = content.slice(0, nextInsertIndex) + newSection + content.slice(nextInsertIndex);
    fs.writeFileSync(LOADER_PATH, content, 'utf-8');
    console.log(`✅ 已添加新分类和组件到 componentLoader.ts: ${componentId}`);
  }
}

// ============ 命令处理 ============

function createComponent(options) {
  const { category, name, title, description } = options;

  // 验证分类
  if (!CATEGORY_PREFIX[category]) {
    console.error(`❌ 未知的分类: ${category}`);
    console.log(`   可用分类: ${Object.keys(CATEGORY_PREFIX).join(', ')}`);
    process.exit(1);
  }

  // 加载配置
  const config = loadConfig();

  // 生成组件信息
  const componentName = name || toPascalCase(title);
  const componentId = getNextId(category, config);

  // 确保分类目录存在
  ensureCategoryExists(category);

  // 创建组件文件
  const componentPath = path.join(CATALOG_PATH, category, `${componentName}.tsx`);
  const cssPath = path.join(CATALOG_PATH, category, `${componentName}.css`);

  if (fs.existsSync(componentPath)) {
    console.error(`❌ 组件文件已存在: ${componentPath}`);
    process.exit(1);
  }

  // 写入组件文件
  const componentContent = COMPONENT_TEMPLATE
    .replace(/{COMPONENT_NAME}/g, componentName)
    .replace(/{COMPONENT_KEBAB}/g, toKebabCase(componentName));

  fs.writeFileSync(componentPath, componentContent, 'utf-8');
  fs.writeFileSync(cssPath, CSS_TEMPLATE.replace(/{COMPONENT_KEBAB}/g, toKebabCase(componentName)), 'utf-8');

  console.log(`📄 创建组件文件: ${componentPath}`);
  console.log(`📄 创建样式文件: ${cssPath}`);

  // 更新配置文件
  config.components.push({
    id: componentId,
    title: title || componentName,
    description: description || `${componentName} component`,
    category: category,
    file: componentName,
  });
  config.lastUpdated = new Date().toISOString();
  saveConfig(config);

  // 更新 loader
  appendToLoader(componentId, category, componentName);

  console.log(`\n🎉 组件创建成功!`);
  console.log(`   ID: ${componentId}`);
  console.log(`   名称: ${componentName}`);
  console.log(`   分类: ${category}`);
  console.log(`\n   运行 pnpm dev 查看效果`);
}

function batchCreate(options) {
  const { file } = options;

  if (!fs.existsSync(file)) {
    console.error(`❌ 批量配置文件不存在: ${file}`);
    process.exit(1);
  }

  const batchConfig = JSON.parse(fs.readFileSync(file, 'utf-8'));

  console.log(`\n📦 开始批量创建 ${batchConfig.components.length} 个组件...\n`);

  batchConfig.components.forEach((comp, index) => {
    console.log(`[${index + 1}/${batchConfig.components.length}] 创建组件: ${comp.title}`);
    createComponent({
      category: comp.category,
      name: comp.name,
      title: comp.title,
      description: comp.description,
    });
  });

  console.log(`\n🎉 批量创建完成! 共创建 ${batchConfig.components.length} 个组件`);
}

function listComponents(options) {
  const { category } = options;
  const config = loadConfig();

  let components = config.components;
  if (category) {
    components = components.filter(c => c.category === category);
  }

  console.log(`\n📦 组件列表 (共 ${components.length} 个)\n`);

  // 按分类分组
  const grouped = {};
  components.forEach(comp => {
    if (!grouped[comp.category]) {
      grouped[comp.category] = [];
    }
    grouped[comp.category].push(comp);
  });

  const categoryNames = {
    navbars: '导航栏',
    sidebars: '侧边栏',
    dropdowns: '下拉菜单',
    cards: '卡片',
    oracle_ui: 'Oracle UI',
    workflownodes: '工作流节点',
    wrappers: '容器组件',
    toybox: '玩具箱',
  };

  Object.entries(grouped).forEach(([cat, comps]) => {
    const catConfig = config.categories.find(c => c.id === cat);
    const chineseName = categoryNames[cat] || cat;
    console.log(`  ${chineseName} / ${catConfig?.title || cat} (${comps.length})`);

    comps.slice(0, 5).forEach(comp => {
      console.log(`    ├── [${comp.id}] ${comp.title}`);
    });

    if (comps.length > 5) {
      console.log(`    └── ... 还有 ${comps.length - 5} 个组件`);
    }
    console.log('');
  });

  console.log(`💡 使用 pnpm component:create -c <分类> -t <标题> 创建新组件`);
}

function showHelp() {
  console.log(`
📚 组件生成器帮助

命令:
  create   创建单个组件
  batch    批量创建组件
  list     列出所有组件
  help     显示帮助信息

选项:
  -c, --category <id>   分类ID (必需)
  -n, --name <name>     组件名称 (PascalCase)
  -t, --title <title>   组件标题 (必需)
  -d, --desc <desc>     组件描述
  -f, --file <path>     批量配置文件路径

示例:
  pnpm component:create -c navbars -t "My Navbar" -d "自定义导航栏"
  pnpm component:batch -f ./my-components.json
  pnpm component:list
  pnpm component:list -c dropdowns

可用分类:
  navbars, sidebars, dropdowns, cards, oracle_ui,
  workflownodes, wrappers, toybox, hero, backgrounds,
  footers, faq, testimonials, bento, blog, contact,
  cta, features, logos, pricing, stats, auth
`);
}

// ============ CLI 入口 ============

function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  const parseOptions = (args) => {
    const options = {};
    for (let i = 0; i < args.length; i++) {
      if (args[i].startsWith('-')) {
        const key = args[i].replace(/^-+/, '');
        const value = args[i + 1] && !args[i + 1].startsWith('-') ? args[i + 1] : true;
        options[key] = value;
        if (value !== true) i++;
      }
    }
    return options;
  };

  const options = parseOptions(args.slice(1));

  switch (command) {
    case 'create':
      if (!options.c && !options.category) {
        console.error('❌ 缺少必需参数: -c, --category <id>');
        console.log('   运行 pnpm component:help 查看帮助');
        process.exit(1);
      }
      if (!options.t && !options.title) {
        console.error('❌ 缺少必需参数: -t, --title <title>');
        console.log('   运行 pnpm component:help 查看帮助');
        process.exit(1);
      }
      createComponent({
        category: options.c || options.category,
        name: options.n || options.name,
        title: options.t || options.title,
        description: options.d || options.desc || options.description,
      });
      break;

    case 'batch':
      if (!options.f && !options.file) {
        console.error('❌ 缺少必需参数: -f, --file <path>');
        process.exit(1);
      }
      batchCreate({
        file: options.f || options.file,
      });
      break;

    case 'list':
      listComponents({
        category: options.c || options.category,
      });
      break;

    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;

    default:
      if (!command) {
        showHelp();
      } else {
        console.error(`❌ 未知命令: ${command}`);
        console.log('   运行 pnpm component:help 查看帮助');
        process.exit(1);
      }
  }
}

main();