import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { libraryRegistry } from '@/data/libraryRegistry';

const Sidebar: React.FC = () => {
    const [searchParams] = useSearchParams();
    const currentCategory = searchParams.get('category');

    // Calculate total items for "All" view
    const totalItems = libraryRegistry.reduce((acc, cat) => acc + cat.items.length, 0);

    return (
        <aside className="sidebar">
            <div className="toc-header">
                <span className="blink-dot"></span>
                /// 目录
            </div>

            <nav className="toc-list">
                <NavLink
                    to="/library"
                    end
                    className={({ isActive }) =>
                        `toc-item ${!currentCategory && isActive ? 'active' : ''}`
                    }
                >
                    <span className="toc-name">总览</span>
                    <span className="toc-count">{totalItems.toString().padStart(2, '0')} 个组件</span>
                </NavLink>

                {libraryRegistry.map((category) => {
                    const isActive = currentCategory === category.id;
                    const count = category.items.length.toString().padStart(2, '0');

                    // 中文标题映射
                    const chineseTitles: Record<string, string> = {
                        'navbars': '导航栏',
                        'sidebars': '侧边栏',
                        'dropdowns': '下拉菜单',
                        'cards': '卡片',
                        'oracle_ui': 'Oracle UI'
                    };

                    return (
                        <NavLink
                            key={category.id}
                            to={`?category=${category.id}`}
                            className={`toc-item ${isActive ? 'active' : ''}`}
                        >
                            <span className="toc-name">{chineseTitles[category.id] || category.title}</span>
                            <span className="toc-count">{count} 个</span>
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;
