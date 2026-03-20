/**
 * 组件懒加载器
 * 实现组件级别的按需加载
 *
 * 注意：组件从各自的 index.tsx 文件中按名称导出
 */

import React, { ComponentType, LazyExoticComponent } from 'react';

// ============ 懒加载组件映射 ============
// 组件从 index.tsx 中按需导出

const lazyComponents: Record<string, LazyExoticComponent<ComponentType<any>>> = {
  // ========== Navbars ==========
  'NAV_01': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.FloatingGlass }))),
  'NAV_02': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.DynamicPill }))),
  'NAV_03': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.LuminousBorder }))),
  'NAV_04': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.ArchitectBlueprint }))),
  'NAV_05': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.AcrobatSplit }))),
  'NAV_06': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.StackedDeck }))),
  'NAV_07': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TransparentFilm }))),
  'NAV_08': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.CyberTerminal }))),
  'NAV_09': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheWhiteLab }))),
  'NAV_10': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheFluidAurora }))),
  'NAV_11': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheSoftClay }))),
  'NAV_12': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheNeuralHub }))),
  'NAV_14': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.RoyalGridNavbar }))),
  'NAV_15': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.FloatingIslandNavbar }))),
  'NAV_16': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.DarkAvantGardeNavbar }))),
  'NAV_17': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.MonolithNavbar }))),
  'NAV_18': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheUltimateLuminous }))),
  'NAV_19': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheFloatingGlass }))),
  'NAV_20': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheNeonHorizon }))),
  'NAV_21': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheInvisibleTech }))),
  'NAV_22': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheCommandNotch }))),
  'NAV_23': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheElegantSerif }))),
  'NAV_24': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheGlowingOrb }))),
  'NAV_25': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.TheSplitDeck }))),
  'NAV_26': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.MinimalLuxury }))),
  'NAV_27': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.BrutalistTech }))),
  'NAV_28': React.lazy(() => import('@/components/library/catalog/navbars/AINeuralNavbar').then(m => ({ default: m.default }))),
  'NAV_29': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.ModernButton }))),
  'NAV_30': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.CyberButton }))),
  'NAV_31': React.lazy(() => import('@/components/library/catalog/navbars').then(m => ({ default: m.NavbarWithChildren }))),

  // ========== Sidebars ==========
  'SIDE_01': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.BlackCapsule }))),
  'SIDE_02': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.NeonEdge }))),
  'SIDE_03': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.GlassPanel }))),
  'SIDE_04': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.SplitIslands }))),
  'SIDE_05': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.FloatingDock }))),
  'SIDE_06': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.ExpandingRail }))),
  'SIDE_07': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.PrecisionTree }))),
  'SIDE_08': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.ModularDock }))),
  'SIDE_09': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.CyberSpine }))),
  'SIDE_10': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.SimpleSidebarWithHover }))),
  'SIDE_11': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.CollapsibleSidebar }))),
  'SIDE_12': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.PrismAI }))),
  'SIDE_13': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.AnalogSynth }))),
  'SIDE_14': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.CreativePrismSidebar }))),
  'SIDE_15': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.BusinessClaySidebar }))),
  'SIDE_16': React.lazy(() => import('@/components/library/catalog/sidebars').then(m => ({ default: m.SidebarPro }))),

  // ========== Dropdowns ==========
  'DD_01': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.VisualMatrix }))),
  'DD_02': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.ParameterTuner }))),
  'DD_03': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.DocsTree }))),
  'DD_04': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.BentoGrid }))),
  'DD_05': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.ModelSelector }))),
  'DD_06': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.CommandList }))),
  'DD_07': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.StackDropdown }))),
  'DD_08': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.FeatureDropdown }))),
  'DD_09': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.AppGridDropdown }))),
  'DD_10': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.BentoBoxDropdown }))),
  'DD_11': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.SidebarLogicDropdown }))),
  'DD_12': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.FooterDropdown }))),
  'DD_13': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.InteractiveListDropdown }))),
  'DD_14': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.UserProfileDropdown }))),
  'DD_15': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.TagsCloudDropdown }))),
  'DD_16': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.MinimalDividerDropdown }))),
  'DD_17': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.SmartDropdown }))),
  'DD_18': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.VisualMenu }))),
  'DD_19': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.InteractiveGrid }))),
  'DD_20': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.DropdownContainer }))),
  'DD_21': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.LiquidChromeDropdown }))),
  'DD_22': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.PrismGlassDropdown }))),
  'DD_23': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.KineticTypeDropdown }))),
  'DD_24': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.GlassStackDropdown }))),
  'DD_25': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.NeonTerminalDropdown }))),
  'DD_26': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.SwissLineDropdown }))),
  'DD_27': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.OrigamiDropdown }))),
  'DD_28': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.BlobDropdown }))),
  'DD_29': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.PixelDropdown }))),
  'DD_30': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.BrutalistMagDropdown }))),
  'DD_31': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.HologramDropdown }))),
  'DD_32': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.CardStackDropdown }))),
  'DD_33': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.RadialCompassDropdown }))),
  'DD_34': React.lazy(() => import('@/components/library/catalog/dropdowns').then(m => ({ default: m.GlitchDropdown }))),

  // ========== Cards ==========
  'CARD_01': React.lazy(() => import('@/components/library/catalog/cards').then(m => ({ default: m.GreenSpecCard }))),
  'CARD_02': React.lazy(() => import('@/components/library/catalog/cards').then(m => ({ default: m.MoreActivitiesCard }))),
  'CARD_03': React.lazy(() => import('@/components/library/catalog/cards').then(m => ({ default: m.FoodFruitDrawCard }))),
  'CARD_04': React.lazy(() => import('@/components/library/catalog/cards').then(m => ({ default: m.CardDemo }))),
  'CARD_05': React.lazy(() => import('@/components/library/catalog/cards').then(m => ({ default: m.ExpandableCardOnClick }))),

  // ========== Oracle UI ==========
  'ORACLE_01': React.lazy(() => import('@/components/library/catalog/oracle').then(m => ({ default: m.OraclePromptCard }))),
  'ORACLE_02': React.lazy(() => import('@/components/library/catalog/oracle').then(m => ({ default: m.OracleProcessCard }))),
  'ORACLE_03': React.lazy(() => import('@/components/library/catalog/oracle').then(m => ({ default: m.OracleStatusBar }))),

  // ========== Workflow Nodes ==========
  'WF_01': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearNode }))),
  'WF_02': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.ArtisticNode }))),
  'WF_03': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearStandard }))),
  'WF_04': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearAmbient }))),
  'WF_05': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearPrism }))),
  'WF_06': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearFrost }))),
  'WF_07': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearGhost }))),
  'WF_08': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearNeon }))),
  'WF_09': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearStack }))),
  'WF_10': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearGrid }))),
  'WF_11': React.lazy(() => import('@/components/library/catalog/workflownodes').then(m => ({ default: m.LinearSpotlight }))),

  // ========== Wrappers ==========
  'WRAP_01': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.BlueprintDeck }))),
  'WRAP_02': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.ObsidianVault }))),
  'WRAP_03': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.CodeTerminal }))),
  'WRAP_04': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.GridCanvas }))),
  'WRAP_05': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.NeonFrame }))),
  'WRAP_06': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.GlassStack }))),
  'WRAP_07': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.IndustrialTag }))),
  'WRAP_08': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.HoverReveal }))),
  'WRAP_09': React.lazy(() => import('@/components/library/catalog/wrappers').then(m => ({ default: m.GlassCard }))),

  // ========== Toybox ==========
  'TOY_01': React.lazy(() => import('@/components/library/catalog/toybox').then(m => ({ default: m.ToyButtonPush }))),
  'TOY_02': React.lazy(() => import('@/components/library/catalog/toybox').then(m => ({ default: m.ToyProfileCard }))),
  'TOY_03': React.lazy(() => import('@/components/library/catalog/toybox').then(m => ({ default: m.ToySearchPill }))),
  'TOY_04': React.lazy(() => import('@/components/library/catalog/toybox').then(m => ({ default: m.ToyToggle }))),
};

// ============ 导出的 API ============

/**
 * 获取懒加载组件
 * @param componentId 组件ID
 * @returns 懒加载组件或 null
 */
export const getLazyComponent = (
  componentId: string
): LazyExoticComponent<ComponentType<any>> | null => {
  return lazyComponents[componentId] || null;
};

/**
 * 检查组件是否存在
 * @param componentId 组件ID
 */
export const hasComponent = (componentId: string): boolean => {
  return componentId in lazyComponents;
};

/**
 * 获取所有已注册的组件ID
 */
export const getAllComponentIds = (): string[] => {
  return Object.keys(lazyComponents);
};

/**
 * 分类前缀映射
 */
const CATEGORY_PREFIXES: Record<string, string> = {
  navbars: 'NAV_',
  sidebars: 'SIDE_',
  dropdowns: 'DD_',
  cards: 'CARD_',
  oracle_ui: 'ORACLE_',
  workflownodes: 'WF_',
  wrappers: 'WRAP_',
  toybox: 'TOY_',
};

/**
 * 获取分类下所有组件ID
 * @param categoryId 分类ID
 */
export const getCategoryComponentIds = (categoryId: string): string[] => {
  const prefix = CATEGORY_PREFIXES[categoryId];
  if (!prefix) return [];

  return Object.keys(lazyComponents).filter(id => id.startsWith(prefix));
};

/**
 * 预加载分类的所有组件
 * 用于优化用户体验，在用户可能访问的分类上提前加载
 * @param categoryId 分类ID
 */
export const preloadCategory = async (categoryId: string): Promise<void> => {
  const ids = getCategoryComponentIds(categoryId);

  // 并行预加载所有组件
  await Promise.all(
    ids.map(id => {
      const component = lazyComponents[id];
      if (component) {
        // 触发懒加载 - 访问 _status 会触发加载
        return (component as any)._status;
      }
      return Promise.resolve();
    })
  );
};

export default {
  getLazyComponent,
  hasComponent,
  getAllComponentIds,
  getCategoryComponentIds,
  preloadCategory,
};