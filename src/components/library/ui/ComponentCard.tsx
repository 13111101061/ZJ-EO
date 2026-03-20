import React, { useState, Suspense } from 'react';
import { ComponentItem } from '@/data/libraryRegistry';
import { getLazyComponent } from '@/data/componentLoader';

interface ComponentCardProps {
    item: ComponentItem;
    categoryId?: string;
}

// 加载骨架屏组件
const ComponentSkeleton: React.FC = () => (
    <div className="component-skeleton" style={{
        width: '100%',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
        backgroundSize: '200% 100%',
        animation: 'skeleton-pulse 1.5s ease-in-out infinite',
        borderRadius: '8px',
    }}>
        <style>{`
            @keyframes skeleton-pulse {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
            }
        `}</style>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
            LOADING_COMPONENT...
        </span>
    </div>
);

// 懒加载组件包装器
const LazyComponentWrapper: React.FC<{
    componentId: string;
    categoryId?: string;
}> = ({ componentId, categoryId }) => {
    const LazyComponent = getLazyComponent(componentId);

    if (!LazyComponent) {
        return (
            <div style={{ padding: '20px', color: '#ff6b6b', fontSize: '12px' }}>
                Component not found: {componentId}
            </div>
        );
    }

    // wrappers 分类需要 children
    if (categoryId === 'wrappers') {
        return (
            <Suspense fallback={<ComponentSkeleton />}>
                <LazyComponent>
                    <div className="preview-sample">
                        <div className="preview-sample-badge">SAMPLE_CONTENT</div>
                        <div className="preview-sample-line" />
                        <div className="preview-sample-line short" />
                    </div>
                </LazyComponent>
            </Suspense>
        );
    }

    return (
        <Suspense fallback={<ComponentSkeleton />}>
            <div className="preview-viewport">
                <LazyComponent />
            </div>
        </Suspense>
    );
};

const ComponentCard: React.FC<ComponentCardProps> = ({ item, categoryId }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            let codeToCopy = item.code;
            if (!codeToCopy) {
                // Fallback: Get the rendered HTML from the preview stage
                const element = document.getElementById(item.id);
                const stageContent = element?.querySelector('.stage-content');
                if (stageContent) {
                    // Simple HTML formatting
                    let html = stageContent.innerHTML;
                    // Basic formatting: add newlines after closing tags if not present
                    // This is a rough approximation, better to use a library if available, but keeping it dependency-free
                    html = html.replace(/>/g, '>\n').replace(/</g, '\n<').replace(/\n\n/g, '\n').trim();
                    codeToCopy = `<!-- ${item.title} -->\n` + html;
                }
            }

            if (codeToCopy) {
                await navigator.clipboard.writeText(codeToCopy);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div
            className="comp-card-shell"
            id={item.id}
            style={item.colSpan ? { gridColumn: `span ${item.colSpan}` } : undefined}
        >
            {/* Glass Header */}
            <div className="comp-card-header">
                <div className="header-left">
                    <div className={`status-dot ${copied ? 'active' : ''}`} style={copied ? {background:'#0f0', boxShadow:'0 0 10px #0f0'} : {}}></div>
                    <span className="comp-id-tag">{item.id}</span>
                    <span className="comp-title-text">{item.title}</span>
                </div>
                <div className="header-right">
                    <div className="tech-deco">/// SYSTEM.Render</div>
                </div>
            </div>

            {/* Main Preview Stage */}
            <div className="comp-stage-wrapper">
                <div className="stage-grid-bg"></div>
                <div className="stage-content" data-category={categoryId ?? 'unknown'}>
                    {/* 使用懒加载组件包装器 */}
                    <LazyComponentWrapper
                        componentId={item.id}
                        categoryId={categoryId}
                    />
                </div>

                {/* Decorative Corners */}
                <div className="corner-bracket tl"></div>
                <div className="corner-bracket tr"></div>
                <div className="corner-bracket bl"></div>
                <div className="corner-bracket br"></div>
            </div>

            {/* Footer / Actions */}
            <div className="comp-card-footer">
                <div className="footer-meta">
                    <span className="meta-label">STATUS:</span> <span className="meta-val">STABLE</span>
                </div>
                <div className="footer-actions">
                    <button className="action-btn" onClick={handleCopy}>
                        <i className={copied ? "ri-check-line" : "ri-code-s-slash-line"}></i>
                        <span>{copied ? "COPIED CODE" : "COPY CODE"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ComponentCard);
