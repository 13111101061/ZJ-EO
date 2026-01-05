import React from 'react';
import './Sidebars.css';

export const BlackCapsule: React.FC = () => {
    return (
        <div className="dock-1">
            <div className="d1-logo"><i className="ri-flashlight-fill"></i></div>
            
            <div className="d1-item active">
                <i className="ri-home-4-fill"></i>
                <div className="d1-tooltip">Home</div>
            </div>
            <div className="d1-item">
                <i className="ri-image-edit-line"></i>
                <div className="d1-tooltip">Vision</div>
            </div>
            <div className="d1-item">
                <i className="ri-mic-2-line"></i>
                <div className="d1-tooltip">Voice</div>
            </div>
            <div className="d1-item">
                <i className="ri-quill-pen-line"></i>
                <div className="d1-tooltip">Writer</div>
            </div>
            
            <div style={{marginTop:'auto', paddingTop:'20px', borderTop:'1px solid #222', width:'40px', display:'flex', justifyContent:'center'}}>
                <div className="d1-item" style={{width:'36px', height:'36px'}}><i className="ri-settings-4-line" style={{fontSize:'16px'}}></i></div>
            </div>
        </div>
    );
};

export const GlassPanel: React.FC = () => {
    return (
        <div className="dock-2">
            <div className="d2-brand">
                <i className="ri-command-fill d2-logo-icon"></i>
                <span className="d2-brand-text">NEXUS.AI</span>
            </div>

            <div className="d2-group-title">Creation</div>
            <div className="d2-link active">
                <i className="ri-magic-line"></i> <span>Studio</span>
            </div>
            <div className="d2-link">
                <i className="ri-gallery-line"></i> <span>Gallery</span>
            </div>
            
            <div className="d2-group-title" style={{marginTop:'20px'}}>Library</div>
            <div className="d2-link">
                <i className="ri-folder-3-line"></i> <span>Projects</span>
            </div>
            <div className="d2-link">
                <i className="ri-star-line"></i> <span>Favorites</span>
            </div>

            <div className="d2-user">
                <div style={{width:'32px', height:'32px', background:'#fff', borderRadius:'50%'}}></div>
                <div style={{fontSize:'13px'}}>
                    <div>User01</div>
                    <div style={{fontSize:'10px', color:'#666'}}>Pro Plan</div>
                </div>
            </div>
        </div>
    );
};

export const SplitIslands: React.FC = () => {
    return (
        <div className="dock-3-wrap">
            <div className="d3-block-brand">
                <i className="ri-infinity-line"></i>
            </div>
            
            <div className="d3-block-menu">
                <div className="d3-btn active"><i className="ri-apps-2-fill"></i></div>
                <div className="d3-btn"><i className="ri-pie-chart-2-fill"></i></div>
                <div className="d3-btn"><i className="ri-folder-5-fill"></i></div>
                <div className="d3-btn"><i className="ri-community-fill"></i></div>
            </div>
            
            <div className="d3-block-set">
                <i className="ri-user-settings-line" style={{fontSize:'20px'}}></i>
            </div>
        </div>
    );
};

export const NeonEdge: React.FC = () => {
    return (
        <div className="dock-4">
            <div className="d4-item active">
                <div className="d4-icon"><i className="ri-dashboard-3-line"></i></div>
                <div className="d4-text">Overview</div>
            </div>
            <div className="d4-item">
                <div className="d4-icon"><i className="ri-openai-fill"></i></div>
                <div className="d4-text">AI Models</div>
            </div>
            <div className="d4-item">
                <div className="d4-icon"><i className="ri-file-code-line"></i></div>
                <div className="d4-text">API Keys</div>
            </div>
            <div className="d4-item">
                <div className="d4-icon"><i className="ri-shield-check-line"></i></div>
                <div className="d4-text">Safety</div>
            </div>
            <div className="d4-item">
                <div className="d4-icon"><i className="ri-book-read-line"></i></div>
                <div className="d4-text">Docs</div>
            </div>
        </div>
    );
};

// --- 5. Floating Dock (from 19.html) ---
export const FloatingDock: React.FC = () => {
    return (
        <div className="lib-sb-19-1">
            <div className="lib-s19-1-logo"><i className="ri-brain-line"></i></div>
            <div className="lib-s19-1-menu">
                <div className="lib-s19-1-icon active">
                    <i className="ri-home-5-line"></i>
                </div>
                <div className="lib-s19-1-icon">
                    <i className="ri-image-2-line"></i>
                </div>
                <div className="lib-s19-1-icon">
                    <i className="ri-voiceprint-line"></i>
                </div>
                <div className="lib-s19-1-icon">
                    <i className="ri-chat-1-line"></i>
                    <div className="lib-s19-1-dot"></div>
                </div>
            </div>
            <div className="lib-s19-1-profile"></div>
        </div>
    );
};

// --- 6. Expanding Rail (from 19.html) ---
export const ExpandingRail: React.FC = () => {
    return (
        <div className="lib-sb-19-2-container">
            <div className="lib-sb-19-2">
                <div className="lib-s19-2-head">
                    <i className="ri-command-fill" style={{ fontSize: '24px', marginRight: '15px' }}></i>
                    <span className="lib-s19-2-brand">NEXUS</span>
                </div>
                <div className="lib-s19-2-list">
                    <div className="lib-s19-2-item">
                        <div className="lib-s19-2-icon"><i className="ri-dashboard-line"></i></div>
                        <div className="lib-s19-2-text">Dashboard</div>
                    </div>
                    <div className="lib-s19-2-item">
                        <div className="lib-s19-2-icon"><i className="ri-file-text-line"></i></div>
                        <div className="lib-s19-2-text">Projects</div>
                    </div>
                    <div className="lib-s19-2-item">
                        <div className="lib-s19-2-icon"><i className="ri-settings-4-line"></i></div>
                        <div className="lib-s19-2-text">Settings</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 7. Precision Tree (from 19.html) ---
export const PrecisionTree: React.FC = () => {
    return (
        <div className="lib-sb-19-3">
            <div className="lib-s19-3-group">
                <div className="lib-s19-3-title">Main</div>
                <div className="lib-s19-3-node">
                    <a href="#" className="lib-s19-3-link active"><span>/</span> Overview</a>
                </div>
                <div className="lib-s19-3-node">
                    <a href="#" className="lib-s19-3-link"><span>/</span> Activity</a>
                </div>
            </div>
            <div className="lib-s19-3-group">
                <div className="lib-s19-3-title">Workspace</div>
                <div className="lib-s19-3-node">
                    <a href="#" className="lib-s19-3-link"><span>#</span> TextGen</a>
                </div>
                <div className="lib-s19-3-node">
                    <a href="#" className="lib-s19-3-link"><span>#</span> ImageLab</a>
                </div>
                <div className="lib-s19-3-node">
                    <a href="#" className="lib-s19-3-link"><span>#</span> VoiceBox</a>
                </div>
            </div>
        </div>
    );
};

// --- 8. Modular Dock (from 19.html) ---
export const ModularDock: React.FC = () => {
    return (
        <div className="lib-sb-19-4">
            {/* Left Rail */}
            <div className="lib-s19-4-rail">
                <div className="lib-s19-4-app-icon active"><i className="ri-image-edit-line"></i></div>
                <div className="lib-s19-4-app-icon"><i className="ri-video-line"></i></div>
                <div className="lib-s19-4-app-icon"><i className="ri-music-2-line"></i></div>
            </div>
            {/* Right Panel */}
            <div className="lib-s19-4-panel">
                <div className="lib-s19-4-header">Image Tools</div>
                <div className="lib-s19-4-tool"><i className="ri-brush-line"></i> Inpainting</div>
                <div className="lib-s19-4-tool"><i className="ri-crop-line"></i> Upscale</div>
                <div className="lib-s19-4-tool"><i className="ri-magic-line"></i> Remove BG</div>
            </div>
        </div>
    );
};

// --- 9. Cyber Spine (from 19.html) ---
export const CyberSpine: React.FC = () => {
    return (
        <div className="lib-sb-19-5">
            <div className="lib-s19-5-spine"></div>
            <div style={{ height: '40px' }}></div>
            
            <div className="lib-s19-5-node active">
                <i className="ri-cpu-line"></i>
                <div className="lib-s19-5-label">CORE</div>
            </div>
            <div className="lib-s19-5-node">
                <i className="ri-database-2-line"></i>
                <div className="lib-s19-5-label">DATA</div>
            </div>
            <div className="lib-s19-5-node">
                <i className="ri-shield-keyhole-line"></i>
                <div className="lib-s19-5-label">SECURITY</div>
            </div>
            <div className="lib-s19-5-node">
                <i className="ri-terminal-box-line"></i>
                <div className="lib-s19-5-label">LOGS</div>
            </div>
        </div>
    );
};

export { SidebarPro } from './SidebarPro';
export { SimpleSidebarWithHover } from './SimpleSidebarWithHover';
export { CollapsibleSidebar } from './CollapsibleSidebar';
export { PrismAI } from './PrismAI';
export { AnalogSynth } from './AnalogSynth';
export { CreativePrismSidebar, BusinessClaySidebar } from '../../sidebars';
