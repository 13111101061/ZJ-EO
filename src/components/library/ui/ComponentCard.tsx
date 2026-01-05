import React, { useState } from 'react';
import { ComponentItem } from '@/data/libraryRegistry';

interface ComponentCardProps {
    item: ComponentItem;
    categoryId?: string;
}

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

    const PreviewComponent = item.component as React.ComponentType;
    const WrapperComponent = item.component as React.ComponentType<{ children?: React.ReactNode }>;

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
                    {categoryId === 'wrappers' ? (
                        <WrapperComponent>
                            <div className="preview-sample">
                                <div className="preview-sample-badge">SAMPLE_CONTENT</div>
                                <div className="preview-sample-line" />
                                <div className="preview-sample-line short" />
                            </div>
                        </WrapperComponent>
                    ) : (
                        <div className="preview-viewport">
                            <PreviewComponent />
                        </div>
                    )}
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
