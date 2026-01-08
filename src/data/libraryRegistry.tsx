import React from 'react';
import { FloatingGlass, DynamicPill, LuminousBorder, ArchitectBlueprint, AcrobatSplit, StackedDeck, TransparentFilm, CyberTerminal, TheWhiteLab, TheFluidAurora, TheSoftClay, TheNeuralHub, RoyalGridNavbar, FloatingIslandNavbar, DarkAvantGardeNavbar, MonolithNavbar, TheUltimateLuminous, TheFloatingGlass, TheNeonHorizon, TheInvisibleTech, TheCommandNotch, TheElegantSerif, TheGlowingOrb, TheSplitDeck, MinimalLuxury, BrutalistTech, ModernButton, CyberButton, NavbarWithChildren } from '@/components/library/catalog/navbars';
import AINeuralNavbar from '@/components/library/catalog/navbars/AINeuralNavbar';
import { BlackCapsule, NeonEdge, GlassPanel, SplitIslands, FloatingDock, ExpandingRail, PrecisionTree, ModularDock, CyberSpine, SimpleSidebarWithHover, CollapsibleSidebar, PrismAI, AnalogSynth, CreativePrismSidebar, BusinessClaySidebar, SidebarPro } from '@/components/library/catalog/sidebars';
import { VisualMatrix, ParameterTuner, DocsTree, BentoGrid, ModelSelector, CommandList, StackDropdown, FeatureDropdown, AppGridDropdown, BentoBoxDropdown, SidebarLogicDropdown, FooterDropdown, InteractiveListDropdown, UserProfileDropdown, TagsCloudDropdown, MinimalDividerDropdown, SmartDropdown, VisualMenu, InteractiveGrid, DropdownContainer, LiquidChromeDropdown, PrismGlassDropdown, KineticTypeDropdown, GlassStackDropdown, NeonTerminalDropdown, SwissLineDropdown, OrigamiDropdown, BlobDropdown, PixelDropdown, BrutalistMagDropdown, HologramDropdown, CardStackDropdown, RadialCompassDropdown, GlitchDropdown } from '@/components/library/catalog/dropdowns';
import { GreenSpecCard, MoreActivitiesCard, FoodFruitDrawCard, CardDemo, ExpandableCardOnClick } from '@/components/library/catalog/cards';
import { OraclePromptCard, OracleProcessCard, OracleStatusBar } from '@/components/library/catalog/oracle';
import { LinearNode, ArtisticNode, LinearStandard, LinearAmbient, LinearPrism, LinearFrost, LinearGhost, LinearNeon, LinearStack, LinearGrid, LinearSpotlight } from '@/components/library/catalog/workflownodes';
import { BlueprintDeck, ObsidianVault, CodeTerminal, GridCanvas, NeonFrame, GlassStack, IndustrialTag, HoverReveal, GlassCard } from '@/components/library/catalog/wrappers';
import { ToyButtonPush, ToyProfileCard, ToySearchPill, ToyToggle } from '@/components/library/catalog/toybox';

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
      { id: 'NAV_28', title: 'AI Neural Network', description: 'System status bar with mega dropdowns.', component: AINeuralNavbar },
      { id: 'NAV_29', title: 'Modern Button', description: 'Clean modern button component.', component: ModernButton },
      { id: 'NAV_30', title: 'Cyber Button', description: 'Cyberpunk styled button.', component: CyberButton },
      { id: 'NAV_31', title: 'Navbar With Children', description: 'Navbar with nested children support.', component: NavbarWithChildren }
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
      { id: 'SIDE_15', title: 'Business Clay', description: 'Soft ceramic bubbles with floating aesthetic.', component: BusinessClaySidebar },
      { id: 'SIDE_16', title: 'Sidebar Pro', description: 'Professional sidebar component.', component: SidebarPro }
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
      { id: 'DD_19', title: 'Interactive Grid', description: 'Card-based app grid dropdown.', component: InteractiveGrid },
      { id: 'DD_20', title: 'Dropdown Container', description: 'Generic dropdown container component.', component: DropdownContainer },
      { id: 'DD_21', title: 'Liquid Chrome', description: 'Liquid chrome animated dropdown.', component: LiquidChromeDropdown },
      { id: 'DD_22', title: 'Prism Glass', description: 'Prism glass dropdown with rainbow border.', component: PrismGlassDropdown },
      { id: 'DD_23', title: 'Kinetic Type', description: 'Kinetic typography dropdown.', component: KineticTypeDropdown },
      { id: 'DD_24', title: 'Glass Stack', description: 'Vision OS style glass dropdown.', component: GlassStackDropdown },
      { id: 'DD_25', title: 'Neon Terminal', description: 'Cyberpunk terminal dropdown.', component: NeonTerminalDropdown },
      { id: 'DD_26', title: 'Swiss Line', description: 'Minimalist Swiss design dropdown.', component: SwissLineDropdown },
      { id: 'DD_27', title: 'Origami 3D', description: '3D folding paper dropdown.', component: OrigamiDropdown },
      { id: 'DD_28', title: 'Organic Blob', description: 'Gooey blob animation dropdown.', component: BlobDropdown },
      { id: 'DD_29', title: '8-Bit Retro', description: 'Pixel art game style dropdown.', component: PixelDropdown },
      { id: 'DD_30', title: 'Brutalist Mag', description: 'Brutalist magazine dropdown.', component: BrutalistMagDropdown },
      { id: 'DD_31', title: 'Hologram', description: 'Sci-fi hologram dropdown.', component: HologramDropdown },
      { id: 'DD_32', title: 'Card Stack', description: 'Material 3 card stack dropdown.', component: CardStackDropdown },
      { id: 'DD_33', title: 'Radial Compass', description: 'Circular radial menu.', component: RadialCompassDropdown },
      { id: 'DD_34', title: 'Glitch', description: 'Glitch art dropdown.', component: GlitchDropdown }
    ]
  },
  {
    id: 'cards',
    title: 'Cards',
    description: 'Interactive and animated card components.',
    items: [
      { id: 'CARD_01', title: 'Green Spec Card', description: 'Tile 1: 今日话题 / 福利群 / 热门博主 / 成长计划', component: GreenSpecCard },
      { id: 'CARD_02', title: 'More Activities', description: 'Tile 2: 更多活动 (2x2 瓷片区)', component: MoreActivitiesCard },
      { id: 'CARD_03', title: 'Food Fruit Draw', description: 'Tile 3: 美食专区 / 水果免费抽奖', component: FoodFruitDrawCard },
      { id: 'CARD_04', title: 'Card Demo', description: 'Demo card component.', component: CardDemo },
      { id: 'CARD_05', title: 'Expandable Card On Click', description: 'Card that expands when clicked.', component: ExpandableCardOnClick }
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
      { id: 'WF_02', title: 'Artistic Node', description: 'Gradient glow artistic node.', component: ArtisticNode },
      { id: 'WF_03', title: 'Linear Standard', description: 'Standard Linear style node.', component: LinearStandard },
      { id: 'WF_04', title: 'Linear Ambient', description: 'Ambient glow node.', component: LinearAmbient },
      { id: 'WF_05', title: 'Linear Prism', description: 'Prism edge node.', component: LinearPrism },
      { id: 'WF_06', title: 'Linear Frost', description: 'Frost gradient node.', component: LinearFrost },
      { id: 'WF_07', title: 'Linear Ghost', description: 'Ghost interface node.', component: LinearGhost },
      { id: 'WF_08', title: 'Linear Neon', description: 'Neon line node.', component: LinearNeon },
      { id: 'WF_09', title: 'Linear Stack', description: 'Stacked glass node.', component: LinearStack },
      { id: 'WF_10', title: 'Linear Grid', description: 'Grid glass node.', component: LinearGrid },
      { id: 'WF_11', title: 'Linear Spotlight', description: 'Spotlight node.', component: LinearSpotlight }
    ]
  },
  {
    id: 'wrappers',
    title: 'Wrappers',
    description: 'Container components with decorative frames and overlays.',
    items: [
      { id: 'WRAP_01', title: 'Blueprint Deck', description: 'Technical blueprint frame with info header.', component: BlueprintDeck },
      { id: 'WRAP_02', title: 'Obsidian Vault', description: 'Dark overlay with interactive pill.', component: ObsidianVault },
      { id: 'WRAP_03', title: 'Code Terminal', description: 'Terminal-style window with file header.', component: CodeTerminal },
      { id: 'WRAP_04', title: 'Grid Canvas', description: 'Corner-marked grid canvas.', component: GridCanvas },
      { id: 'WRAP_05', title: 'Neon Frame', description: 'Glowing neon border container.', component: NeonFrame },
      { id: 'WRAP_06', title: 'Glass Stack', description: 'Frosted glass with toolbar.', component: GlassStack },
      { id: 'WRAP_07', title: 'Industrial Tag', description: 'Industrial-style tagged container.', component: IndustrialTag },
      { id: 'WRAP_08', title: 'Hover Reveal', description: 'Container with hover overlay action.', component: HoverReveal },
      { id: 'WRAP_09', title: 'Glass Card', description: 'Glassmorphism card wrapper.', component: GlassCard }
    ]
  },
  {
    id: 'toybox',
    title: 'Toybox',
    description: 'Playful, toy-like UI components with bold colors.',
    items: [
      { id: 'TOY_01', title: 'Push Button', description: '3D hard shadow button.', component: ToyButtonPush },
      { id: 'TOY_02', title: 'Profile Card', description: 'Cute profile card with avatar.', component: ToyProfileCard },
      { id: 'TOY_03', title: 'Search Pill', description: 'Pill-shaped search input.', component: ToySearchPill },
      { id: 'TOY_04', title: 'Toggle Switch', description: 'Playful toggle switch.', component: ToyToggle }
    ]
  }
];
