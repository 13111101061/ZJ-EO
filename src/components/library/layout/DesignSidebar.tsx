import React, { useEffect, useRef } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import gsap from 'gsap';
import { libraryRegistry } from '../../../data/libraryRegistry';
import './DesignSidebar.css';

const DesignSidebar: React.FC = () => {
    const [searchParams] = useSearchParams();
    const currentCategory = searchParams.get('category');
    const containerRef = useRef<HTMLDivElement>(null);
    
    const totalItems = libraryRegistry.reduce((acc, cat) => acc + cat.items.length, 0);

    // Initial Entry Animation
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.ds-item', 
                { x: -50, opacity: 0, skewX: 20 },
                { 
                    x: 0, 
                    opacity: 1, 
                    skewX: 0,
                    duration: 0.8, 
                    stagger: 0.05, 
                    ease: 'elastic.out(1, 0.5)',
                    delay: 0.2
                }
            );

            gsap.fromTo('.ds-header',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
            );
            
            // Continuous "Scanner" effect
            gsap.to('.ds-scanner-line', {
                top: '100%',
                duration: 4,
                ease: 'none',
                repeat: -1,
                repeatDelay: 1
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Magnetic Hover Effect
    const handleMouseMove = (e: React.MouseEvent, index: string) => {
        const item = e.currentTarget as HTMLElement;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move item slightly towards mouse
        gsap.to(item, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.5,
            ease: 'power3.out'
        });

        // Move text more for parallax
        const label = item.querySelector('.ds-label');
        if (label) {
            gsap.to(label, {
                x: x * 0.15 + 10, // Keep the active offset
                y: y * 0.15,
                duration: 0.5,
                ease: 'power3.out'
            });
        }
    };

    const handleMouseLeave = (e: React.MouseEvent) => {
        const item = e.currentTarget as HTMLElement;
        
        gsap.to(item, {
            x: 0,
            y: 0,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
        });

        const label = item.querySelector('.ds-label');
        if (label) {
            gsap.to(label, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)'
            });
        }
    };

    const chineseTitles: Record<string, string> = {
        'navbars': '导航栏',
        'sidebars': '侧边栏',
        'dropdowns': '下拉菜单',
        'cards': '卡片',
        'oracle_ui': 'Oracle UI',
        'workflownodes': '工作流节点',
        'wrappers': '容器组件',
        'toybox': '玩具箱'
    };

    return (
        <aside className="design-sidebar" ref={containerRef}>
            <div className="ds-noise"></div>
            <div className="ds-scanner-line"></div>
            
            <div className="ds-header">
                <div className="ds-title">
                    <span className="ds-blink" />
                    ARCHIVE_INDEX
                </div>
            </div>

            <nav className="ds-nav">
                <NavLink
                    to="/library"
                    end
                    className={() => `ds-item ${!currentCategory ? 'active' : ''}`}
                    onMouseMove={(e) => handleMouseMove(e, 'overview')}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="ds-label">总览 / OVERVIEW</span>
                    <span className="ds-count">{totalItems.toString().padStart(2, '0')}</span>
                    <div className="ds-item-bg"></div>
                </NavLink>

                {libraryRegistry.map((category) => {
                    const count = category.items.length.toString().padStart(2, '0');
                    const isActive = currentCategory === category.id;

                    return (
                        <NavLink
                            key={category.id}
                            to={`?category=${category.id}`}
                            className={() => `ds-item ${isActive ? 'active' : ''}`}
                            onMouseMove={(e) => handleMouseMove(e, category.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span className="ds-label">
                                {chineseTitles[category.id] || category.title}
                            </span>
                            <span className="ds-count">{count}</span>
                            <div className="ds-item-bg"></div>
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
};

export default DesignSidebar;
