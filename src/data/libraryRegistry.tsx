import React from 'react';
import { FloatingGlass, DynamicPill, LuminousBorder, ArchitectBlueprint, AcrobatSplit, StackedDeck, TransparentFilm, CyberTerminal, TheWhiteLab, TheFluidAurora, TheSoftClay, TheNeuralHub, RoyalGridNavbar, FloatingIslandNavbar, DarkAvantGardeNavbar, MonolithNavbar, TheUltimateLuminous, TheFloatingGlass, TheNeonHorizon, TheInvisibleTech, TheCommandNotch, TheElegantSerif, TheGlowingOrb, TheSplitDeck, MinimalLuxury, BrutalistTech } from '@/components/library/catalog/navbars';
import AINeuralNavbar from '@/components/library/catalog/navbars/AINeuralNavbar';
import { BlackCapsule, NeonEdge, GlassPanel, SplitIslands, FloatingDock, ExpandingRail, PrecisionTree, ModularDock, CyberSpine, SimpleSidebarWithHover, CollapsibleSidebar, PrismAI, AnalogSynth, CreativePrismSidebar, BusinessClaySidebar } from '@/components/library/catalog/sidebars';
import { VisualMatrix, ParameterTuner, DocsTree, BentoGrid, ModelSelector, CommandList, StackDropdown, FeatureDropdown, AppGridDropdown, BentoBoxDropdown, SidebarLogicDropdown, FooterDropdown, InteractiveListDropdown, UserProfileDropdown, TagsCloudDropdown, MinimalDividerDropdown, SmartDropdown, VisualMenu, InteractiveGrid } from '@/components/library/catalog/dropdowns';
import { GreenSpecCard, MoreActivitiesCard, FoodFruitDrawCard } from '@/components/library/catalog/cards';
import { OraclePromptCard, OracleProcessCard, OracleStatusBar } from '@/components/library/catalog/oracle';
import { LinearNode, ArtisticNode } from '@/components/library/catalog/workflownodes';

export interface ComponentItem {
  id: string;
  title: string;
  description?: string;
  component: React.ComponentType;
  code?: string;
  colSpan?: number;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  items: ComponentItem[];
}

export const libraryRegistry: Category[] = [
  {
    id: 'navbars',
    title: 'Navbars',
    description: 'Navigation headers and top bars.',
    items: [
      { id: 'NAV_01', title: 'The Floating Glass', description: 'A frosted glass navigation bar.', component: FloatingGlass },
      { id: 'NAV_02', title: 'Dynamic Pill', description: 'Expands on hover.', component: DynamicPill },
      { id: 'NAV_03', title: 'Luminous Border', description: 'Animated gradient borders.', component: LuminousBorder },
      { id: 'NAV_04', title: 'Architect Blueprint', description: 'Dashed lines and technical feel.', component: ArchitectBlueprint },
      { id: 'NAV_05', title: 'Acrobat Split', description: 'Extreme spacing tension.', component: AcrobatSplit },
      { id: 'NAV_06', title: 'Stacked Deck', description: 'Depth and layering.', component: StackedDeck },
      { id: 'NAV_07', title: 'Transparent Film', description: 'Minimalist transparency.', component: TransparentFilm },
      { id: 'NAV_08', title: 'Cyber Terminal', description: 'Hacker console aesthetic.', component: CyberTerminal },
      { id: 'NAV_09', title: 'The White Lab', description: 'Clean scientific interface.', component: TheWhiteLab },
      { id: 'NAV_10', title: 'The Fluid Aurora', description: 'Organic background gradients.', component: TheFluidAurora },
      { id: 'NAV_11', title: 'The Soft Clay', description: 'Neumorphic soft UI.', component: TheSoftClay },
      { id: 'NAV_12', title: 'The Neural Hub', description: 'AI data visualization header.', component: TheNeuralHub },
      { id: 'NAV_14', title: 'Royal Grid', description: 'Luxury fashion grid layout.', component: RoyalGridNavbar },
      { id: 'NAV_15', title: 'Floating Island', description: 'Bottom-fixed glass dock.', component: FloatingIslandNavbar },
      { id: 'NAV_16', title: 'Dark Avant-Garde', description: 'Minimalist high-fashion bottom bar.', component: DarkAvantGardeNavbar },
      { id: 'NAV_17', title: 'Monolith AI', description: 'Mega-menu system with ticker.', component: MonolithNavbar },
      { id: 'NAV_18', title: 'Ultimate Luminous', description: 'Aether-themed mega menu.', component: TheUltimateLuminous },
      { id: 'NAV_19', title: 'SaaS Glass', description: 'Standard floating glass navbar.', component: TheFloatingGlass },
      { id: 'NAV_20', title: 'Neon Horizon', description: 'Cyberpunk glowing border.', component: TheNeonHorizon },
      { id: 'NAV_21', title: 'Invisible Tech', description: 'Minimalist tech aesthetic.', component: TheInvisibleTech },
      { id: 'NAV_22', title: 'Command Notch', description: 'Utility-focused top bar.', component: TheCommandNotch },
      { id: 'NAV_23', title: 'Elegant Serif', description: 'Luxury fashion layout.', component: TheElegantSerif },
      { id: 'NAV_24', title: 'Glowing Orb', description: 'Dreamy atmospheric navbar.', component: TheGlowingOrb },
      { id: 'NAV_25', title: 'Split Deck', description: 'Structured split layout.', component: TheSplitDeck },
      { id: 'NAV_26', title: 'Minimal Luxury', description: 'Frosted glass with serif elegance.', component: MinimalLuxury },
      { id: 'NAV_27', title: 'Brutalist Tech', description: 'Neon green with ticker animation.', component: BrutalistTech },
      { id: 'NAV_28', title: 'AI Neural Network', description: 'System status bar with mega dropdowns.', component: AINeuralNavbar }
    ]
  },
  {
    id: 'sidebars',
    title: 'Sidebars',
    description: 'Vertical navigation drawers.',
    items: [
      { id: 'SIDE_01', title: 'Black Capsule', description: 'Floating island dock.', component: BlackCapsule },
      { id: 'SIDE_02', title: 'Neon Edge', description: 'Cyberpunk vertical strip.', component: NeonEdge },
      { id: 'SIDE_03', title: 'Glass Panel', description: 'Frosted blur sidebar.', component: GlassPanel },
      { id: 'SIDE_04', title: 'Split Islands', description: 'Deconstructed navigation blocks.', component: SplitIslands },
      { id: 'SIDE_05', title: 'Floating Dock', description: 'Mac-style floating menu.', component: FloatingDock },
      { id: 'SIDE_06', title: 'Expanding Rail', description: 'Hover-expand navigation.', component: ExpandingRail },
      { id: 'SIDE_07', title: 'Precision Tree', description: 'Hierarchical file tree.', component: PrecisionTree },
      { id: 'SIDE_08', title: 'Modular Dock', description: 'Productivity tool palette.', component: ModularDock },
      { id: 'SIDE_09', title: 'Cyber Spine', description: 'Sci-fi backbone navigation.', component: CyberSpine },
      { id: 'SIDE_10', title: 'Simple Sidebar With Hover', description: 'Sidebars component with modern design.', component: SimpleSidebarWithHover },
      { id: 'SIDE_11', title: 'Collapsible Sidebar', description: 'Sidebars component with modern design.', component: CollapsibleSidebar },
      { id: 'SIDE_12', title: 'Prism AI', description: 'Holographic gradient sidebar.', component: PrismAI },
      { id: 'SIDE_13', title: 'Analog Synth', description: 'Vintage knobs and paper texture.', component: AnalogSynth },
      { id: 'SIDE_14', title: 'Creative Prism', description: 'Holographic rotating gradient panel.', component: CreativePrismSidebar },
      { id: 'SIDE_15', title: 'Business Clay', description: 'Soft ceramic bubbles with floating aesthetic.', component: BusinessClaySidebar }
    ]
  },
  {
    id: 'dropdowns',
    title: 'Dropdowns',
    description: 'Contextual menus and popovers.',
    items: [
      { id: 'DD_01', title: 'Visual Matrix', description: 'Grid-based rich content menu.', component: VisualMatrix },
      { id: 'DD_02', title: 'Parameter Tuner', description: 'Interactive control panel.', component: ParameterTuner },
      { id: 'DD_03', title: 'Docs Tree', description: 'Hierarchical documentation nav.', component: DocsTree },
      { id: 'DD_04', title: 'Bento Grid', description: 'Feature blocks layout.', component: BentoGrid },
      { id: 'DD_05', title: 'Model Selector', description: 'AI model switcher.', component: ModelSelector },
      { id: 'DD_06', title: 'Command List', description: 'Keyboard-driven command palette.', component: CommandList },
      { id: 'DD_07', title: 'The Stack', description: 'Classic tech stack list (Imported).', component: StackDropdown },
      { id: 'DD_08', title: 'Feature Card', description: 'Marketing split layout (Imported).', component: FeatureDropdown },
      { id: 'DD_09', title: 'App Grid', description: 'Matrix of application icons (Imported).', component: AppGridDropdown },
      { id: 'DD_10', title: 'Bento Box', description: 'Modern block layout (Imported).', component: BentoBoxDropdown },
      { id: 'DD_11', title: 'Sidebar Logic', description: 'Tabbed navigation content (Imported).', component: SidebarLogicDropdown },
      { id: 'DD_12', title: 'Footer Action', description: 'Dropdown with footer actions (Imported).', component: FooterDropdown },
      { id: 'DD_13', title: 'Interactive List', description: 'Neon highlight list (Imported).', component: InteractiveListDropdown },
      { id: 'DD_14', title: 'User Profile', description: 'Personal account menu (Imported).', component: UserProfileDropdown },
      { id: 'DD_15', title: 'Tags Cloud', description: 'Topic tag collection (Imported).', component: TagsCloudDropdown },
      { id: 'DD_16', title: 'Minimal Divider', description: 'Clean, divided list (Imported).', component: MinimalDividerDropdown },
      { id: 'DD_17', title: 'Smart Dropdown', description: 'Intelligent dropdown with search functionality', component: SmartDropdown },
      { id: 'DD_18', title: 'Visual Menu', description: 'Image preview dropdown menu.', component: VisualMenu },
      { id: 'DD_19', title: 'Interactive Grid', description: 'Card-based app grid dropdown.', component: InteractiveGrid }
    ]
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Interactive and animated card components.',
    items: [
      { id: 'CARD_01', title: 'Green Spec Card', description: 'Tile 1: 今日话题 / 福利群 / 热门博主 / 成长计划', component: GreenSpecCard },
      { id: 'CARD_02', title: 'More Activities', description: 'Tile 2: 更多活动 (2x2 瓷片区)', component: MoreActivitiesCard },
      { id: 'CARD_03', title: 'Food Fruit Draw', description: 'Tile 3: 美食专区 / 水果免费抽奖', component: FoodFruitDrawCard }
    ]
  },
  {
    id: 'oracle_ui',
    title: 'Oracle UI',
    description: 'High-fidelity holographic data components.',
    items: [
      { id: 'ORACLE_01', title: 'Prompt Command', description: 'Holographic prompt terminal.', component: OraclePromptCard },
      { id: 'ORACLE_02', title: 'Process Node', description: 'Cyberpunk workflow step.', component: OracleProcessCard },
      { id: 'ORACLE_03', title: 'System Status', description: 'High-density status bar.', component: OracleStatusBar }
    ]
  },
  {
    id: 'workflownodes',
    title: 'Workflow Nodes',
    description: 'Node-based workflow components for AI tools.',
    items: [
      { id: 'WF_01', title: 'Linear Node', description: 'Frosted glass workflow node.', component: LinearNode },
      { id: 'WF_02', title: 'Artistic Node', description: 'Gradient glow artistic node.', component: ArtisticNode }
    ]
  }
];
