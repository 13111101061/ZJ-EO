import React from 'react';
import './Wrappers.css';

// Common Props
interface WrapperProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

// Default Placeholder Content for Preview
const DefaultPlaceholder = () => (
    <div style={{
        width: '100%',
        minHeight: '200px',
        background: 'rgba(255,255,255,0.02)',
        border: '1px dashed rgba(255,255,255,0.1)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        padding: '20px'
    }}>
        <div style={{ width: '40px', height: '40px', background: '#222', borderRadius: '8px' }}></div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#444' }}>COMPONENT_SLOT</div>
        <div style={{ width: '60%', height: '4px', background: '#222', borderRadius: '2px' }}></div>
        <div style={{ width: '40%', height: '4px', background: '#222', borderRadius: '2px' }}></div>
    </div>
);

// 1. The Blueprint Deck
interface BlueprintDeckProps extends WrapperProps {
    info?: string;
}
export const BlueprintDeck: React.FC<BlueprintDeckProps> = ({ children, info = "W: 100% | H: AUTO", className = "", style }) => {
    return (
        <div className={`lib-wrap-1 ${className}`} style={style}>
            <div className="lib-w1-header">{info}</div>
            {children || <DefaultPlaceholder />}
        </div>
    );
};

// 2. The Obsidian Vault
interface ObsidianVaultProps extends WrapperProps {
    pillText?: string;
}
export const ObsidianVault: React.FC<ObsidianVaultProps> = ({ children, pillText = "Interactive", className = "", style }) => {
    return (
        <div className={`lib-wrap-2 ${className}`} style={style}>
            <div className="lib-w2-inner">
                {children || <DefaultPlaceholder />}
                <div className="lib-w2-pill">{pillText}</div>
            </div>
        </div>
    );
};

// 3. The Code Terminal
interface CodeTerminalProps extends WrapperProps {
    filename?: string;
}
export const CodeTerminal: React.FC<CodeTerminalProps> = ({ children, filename = "preview.tsx", className = "", style }) => {
    return (
        <div className={`lib-wrap-3 ${className}`} style={style}>
            <div className="lib-w3-bar">
                <div className="lib-w3-dot"></div><div className="lib-w3-dot"></div><div className="lib-w3-dot"></div>
                <div className="lib-w3-title">{filename}</div>
            </div>
            <div className="lib-w3-body">
                {children || <DefaultPlaceholder />}
            </div>
        </div>
    );
};

// 4. The Grid Canvas
export const GridCanvas: React.FC<WrapperProps> = ({ children, className = "", style }) => {
    return (
        <div className={`lib-wrap-4 ${className}`} style={style}>
            <div className="lib-w4-mark lib-tl"></div><div className="lib-w4-mark lib-tr"></div>
            <div className="lib-w4-mark lib-bl"></div><div className="lib-w4-mark lib-br"></div>
            {children || <DefaultPlaceholder />}
        </div>
    );
};

// 5. The Neon Frame
export const NeonFrame: React.FC<WrapperProps> = ({ children, className = "", style }) => {
    return (
        <div className={`lib-wrap-5 ${className}`} style={style}>
            <div className="lib-w5-inner">
                {children || <DefaultPlaceholder />}
            </div>
        </div>
    );
};

// 6. The Glass Stack
export const GlassStack: React.FC<WrapperProps> = ({ children, className = "", style }) => {
    return (
        <div className={`lib-wrap-6 ${className}`} style={style}>
            <div className="lib-w6-toolbar">
                <div className="lib-w6-tool"><i className="ri-code-s-slash-line"></i></div>
                <div className="lib-w6-tool"><i className="ri-file-copy-line"></i></div>
            </div>
            {children || <DefaultPlaceholder />}
        </div>
    );
};

// 7. The Industrial Tag
interface IndustrialTagProps extends WrapperProps {
    id?: string;
    version?: string;
}
export const IndustrialTag: React.FC<IndustrialTagProps> = ({ children, id = "ID: COMP_01", version = "V.1.0", className = "", style }) => {
    return (
        <div className={`lib-wrap-7 ${className}`} style={style}>
            <div className="lib-w7-tag">{id}</div>
            <div className="lib-w7-meta">{version}</div>
            {children || <DefaultPlaceholder />}
        </div>
    );
};

// 8. The Hover Reveal
interface HoverRevealProps extends WrapperProps {
    buttonText?: string;
    onButtonClick?: () => void;
}
export const HoverReveal: React.FC<HoverRevealProps> = ({ children, buttonText = "View Details", onButtonClick, className = "", style }) => {
    return (
        <div className={`lib-wrap-8 ${className}`} style={style}>
            {children || <DefaultPlaceholder />}
            <div className="lib-w8-overlay">
                <div className="lib-w8-btn" onClick={onButtonClick}>{buttonText}</div>
            </div>
        </div>
    );
};
export { GlassCard } from './GlassCard';
