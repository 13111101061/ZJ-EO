import React from 'react';
import './Navbars.css';

// --- 1. Dynamic Pill ---
export const DynamicPill: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '40px 0', display: 'flex', justifyContent: 'center' }}>
            <div className="lib-nav-17-1-pill">
                <div className="lib-n17-1-logo">Ai.</div>
                <div className="lib-n17-1-content">
                    <div className="lib-n17-1-link">Products</div>
                    <div className="lib-n17-1-link">Research</div>
                    <div className="lib-n17-1-link">Company</div>
                    <div className="lib-n17-1-link">Docs</div>
                    <div className="lib-n17-1-cta">Get Started</div>
                </div>
            </div>
        </div>
    );
};

// --- 2. Luminous Border ---
export const LuminousBorder: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <div className="lib-nav-17-2-box">
                <div className="lib-nav-17-2-inner">
                    <div className="lib-n17-2-brand">Prism.Labs</div>
                    <div className="lib-n17-2-menu">
                        <div className="lib-n17-2-item">Features</div>
                        <div className="lib-n17-2-item">Pricing</div>
                        <div className="lib-n17-2-item">Blog</div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div className="lib-n17-2-item" style={{ border: '1px solid #333' }}>Login</div>
                        <div className="lib-n17-2-item" style={{ background: '#fff', color: '#000' }}>Sign Up</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- 3. Architect Blueprint ---
export const ArchitectBlueprint: React.FC = () => {
    return (
        <nav className="lib-nav-17-3">
            <div className="lib-n17-3-left">
                <div className="lib-n17-3-logo">STRUCT</div>
            </div>
            <div className="lib-n17-3-mid">
                <div className="lib-n17-3-link">Projects</div>
                <div className="lib-n17-3-link">Studio</div>
                <div className="lib-n17-3-link">News</div>
            </div>
            <div className="lib-n17-3-right">
                COORD: 34.0522° N
            </div>
        </nav>
    );
};

// --- 4. Acrobat Split ---
export const AcrobatSplit: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <div className="lib-nav-17-4">
                <div className="lib-n17-4-capsule">
                    <i className="ri-triangle-fill"></i> DELTA
                </div>
                <div className="lib-n17-4-bar">
                    <div className="lib-n17-4-link">Work</div>
                    <div className="lib-n17-4-link">Culture</div>
                    <div className="lib-n17-4-link">Contact</div>
                    <div className="lib-n17-4-btn"><i className="ri-arrow-right-up-line"></i></div>
                </div>
            </div>
        </div>
    );
};

// --- 5. Stacked Deck ---
export const StackedDeck: React.FC = () => {
    return (
        <div className="lib-nav-17-5-container">
            <div style={{ position: 'relative' }}>
                <div className="lib-nav-17-5-layer1"></div>
                <div className="lib-nav-17-5">
                    <div className="lib-n17-5-brand">VOGUE</div>
                    <div className="lib-n17-5-menu">
                        <div className="lib-n17-5-item">Runway</div>
                        <div className="lib-n17-5-item">Collections</div>
                        <div className="lib-n17-5-item">Beauty</div>
                    </div>
                    <div className="lib-n17-5-item"><i className="ri-search-line"></i></div>
                </div>
            </div>
        </div>
    );
};


// --- 6. Transparent Film ---
export const TransparentFilm: React.FC = () => {
    return (
        <nav className="lib-nav-17-6">
            <div className="lib-n17-6-item">Journal</div>
            <div className="lib-n17-6-item">Shop</div>
            <div className="lib-n17-6-logo">PURE.</div>
            <div className="lib-n17-6-item">About</div>
            <div className="lib-n17-6-item">Cart (0)</div>
        </nav>
    );
};

// --- 7. Cyber Terminal ---
export const CyberTerminal: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <div className="lib-nav-17-7">
                <div className="lib-n17-7-blink">_ROOT@SYSTEM:~$</div>
                <div className="lib-n17-7-menu">
                    <div className="lib-n17-7-link">/ACCESS</div>
                    <div className="lib-n17-7-link">/LOGS</div>
                    <div className="lib-n17-7-link">/CONFIG</div>
                </div>
                <div className="lib-n17-7-blink" style={{ width: '10px', height: '20px', background: '#0f0' }}></div>
            </div>
        </div>
    );
};

// --- 8. The White Lab ---
export const TheWhiteLab: React.FC = () => {
    return (
        <div className="wrap-white">
            <nav className="nav-white">
                <a href="#" className="w-logo"><span></span>LAB.</a>
                <div className="w-menu">
                    <div className="w-link">
                        Products
                        <div className="w-mega">
                            <div className="w-grid">
                                <div className="w-desc">
                                    <h4>Platform</h4>
                                    <p>Our unified platform for building and scaling AI applications.</p>
                                </div>
                                <div className="w-tools">
                                    <a href="#" className="w-card">
                                        <span className="w-card-icon">⚡</span>
                                        <span className="w-card-title">Compute</span>
                                        <span className="w-card-sub">Serverless GPU inference</span>
                                    </a>
                                    <a href="#" className="w-card">
                                        <span className="w-card-icon">🧠</span>
                                        <span className="w-card-title">Training</span>
                                        <span className="w-card-sub">Fine-tune models</span>
                                    </a>
                                    <a href="#" className="w-card">
                                        <span className="w-card-icon">📊</span>
                                        <span className="w-card-title">Datasets</span>
                                        <span className="w-card-sub">Manage data</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-link">Solutions</div>
                    <div className="w-link">Pricing</div>
                    <div className="w-link">Docs</div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ padding: '10px 20px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Log in</div>
                    <div style={{ padding: '10px 20px', background: '#000', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>Start Building</div>
                </div>
            </nav>
        </div>
    );
};

// --- 9. The Fluid Aurora ---
export const TheFluidAurora: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <nav>
                <a href="#" className="a-logo">Imagine.</a>
                <div className="a-menu-capsule">
                    <div className="a-item">
                        Explore
                        <div className="a-mega">
                            <div className="a-feature">
                                <div className="a-icon-box"><i className="ri-image-line"></i></div>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: 600, marginBottom: '5px' }}>Image Gen</div>
                                    <div style={{ fontSize: '12px', color: '#aaa' }}>Create stunning visuals</div>
                                </div>
                            </div>
                            <div className="a-feature">
                                <div className="a-icon-box"><i className="ri-video-line"></i></div>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: 600, marginBottom: '5px' }}>Video Synth</div>
                                    <div style={{ fontSize: '12px', color: '#aaa' }}>Text to video generation</div>
                                </div>
                            </div>
                            <div className="a-feature">
                                <div className="a-icon-box"><i className="ri-music-line"></i></div>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: 600, marginBottom: '5px' }}>Audio Lab</div>
                                    <div style={{ fontSize: '12px', color: '#aaa' }}>AI music composition</div>
                                </div>
                            </div>
                            <div className="a-feature">
                                <div className="a-icon-box"><i className="ri-code-line"></i></div>
                                <div>
                                    <div style={{ color: '#fff', fontWeight: 600, marginBottom: '5px' }}>Code Assist</div>
                                    <div style={{ fontSize: '12px', color: '#aaa' }}>Smart programming buddy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="a-item">Community</div>
                    <div className="a-item">Pricing</div>
                </div>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <i className="ri-user-line" style={{ color: '#fff' }}></i>
                </div>
            </nav>
        </div>
    );
};

// --- 10. The Soft Clay ---
export const TheSoftClay: React.FC = () => {
    return (
        <div className="wrap-soft">
            <nav className="nav-soft">
                <a href="#" className="s-logo"><i className="ri-stack-fill"></i> Untitled</a>
                <div className="s-menu">
                    <div className="s-btn">
                        Products
                        <div className="s-mega">
                            <div className="s-sidebar">
                                <h4>Platform</h4>
                                <a href="#" className="s-link">Overview</a>
                                <a href="#" className="s-link">Integrations</a>
                                <a href="#" className="s-link">Settings</a>
                            </div>
                            <div className="s-grid">
                                <a href="#" className="s-card">
                                    <div className="s-card-img"></div>
                                    <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '5px' }}>Analytics</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>Track your growth</div>
                                </a>
                                <a href="#" className="s-card">
                                    <div className="s-card-img"></div>
                                    <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '5px' }}>Automations</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>Save time on tasks</div>
                                </a>
                                <a href="#" className="s-card">
                                    <div className="s-card-img"></div>
                                    <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '5px' }}>Reports</div>
                                    <div style={{ fontSize: '12px', color: '#666' }}>Share insights</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="s-btn">Resources</div>
                    <div className="s-btn">Company</div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div className="s-btn">Log in</div>
                    <div className="s-btn" style={{ background: '#3b82f6', color: '#fff' }}>Start Free Trial</div>
                </div>
            </nav>
        </div>
    );
};

// --- 11. The Neural Hub ---
export const TheNeuralHub: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '40px 20px', background: '#000', minHeight: '600px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div className="nav-island">
                <div className="brand-pill">
                    <div className="brand-logo">
                        <i className="ri-brain-line"></i>
                    </div>
                    <div className="brand-text">Neural<br/>Hub</div>
                </div>

                <div className="menu-cluster">
                    <div className="menu-node">
                        Intelligence <div className="node-dot"></div>

                        <div className="holo-deck">
                            <div className="holo-grid">
                                <div className="col-stream">
                                    <div className="stream-header">LIVE DATA STREAM</div>
                                    <a href="#" className="stream-link"><span>Predictive Model</span><code>v4.2</code></a>
                                    <a href="#" className="stream-link"><span>Neural Net</span><code>ACTIVE</code></a>
                                    <a href="#" className="stream-link"><span>Data Mining</span><code>ON</code></a>
                                    <a href="#" className="stream-link"><span>Sys Logs</span><code>SECURE</code></a>
                                </div>
                                <div className="col-core">
                                    <div className="core-cards">
                                        <div className="ai-card">
                                            <div style={{fontSize: '10px', color: '#666'}}>CPU LOAD</div>
                                            <div className="card-visual"><i className="ri-cpu-line"></i></div>
                                            <div className="voice-bars">
                                                <div className="vb" style={{animationDelay: '0s'}}></div>
                                                <div className="vb" style={{animationDelay: '0.2s'}}></div>
                                                <div className="vb" style={{animationDelay: '0.4s'}}></div>
                                                <div className="vb" style={{animationDelay: '0.1s'}}></div>
                                            </div>
                                        </div>
                                        <div className="ai-card">
                                            <div style={{fontSize: '10px', color: '#666'}}>MEMORY</div>
                                            <div className="card-visual"><i className="ri-hard-drive-2-line"></i></div>
                                            <div style={{fontSize: '18px', fontWeight: 700, color: '#fff'}}>64TB</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-tele">
                                    <div className="tele-box">
                                        <div className="tele-label">System Status</div>
                                        <div className="tele-val"><div className="status-led"></div> ONLINE</div>
                                    </div>
                                    <div className="tele-box">
                                        <div className="tele-label">Uptime</div>
                                        <div className="tele-val">99.999%</div>
                                    </div>
                                    <div className="code-snippet">
                                        &gt; init_sequence()<br/>
                                        &gt; neural_link: connected<br/>
                                        &gt; bandwidth: 100Gbps
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-node">Solutions</div>
                    <div className="menu-node">Enterprise</div>
                </div>

                <div className="action-pod">
                    <div className="icon-btn"><i className="ri-search-2-line"></i></div>
                    <div className="icon-btn"><i className="ri-notification-3-line"></i></div>
                    <a href="#" className="connect-btn">Connect</a>
                </div>
            </div>
        </div>
    );
};

// --- 12. The Obsidian Architect ---
// Removed due to missing styles; will be reintroduced when styles are available.

// --- 13. The Ultimate Luminous (from 9 (2).html) ---
export const TheUltimateLuminous: React.FC = () => {
    return (
        <div className="lib-nav-9-2-wrapper">
            <nav className="lib-nav-9-2">
                <a href="#" className="lib-n9-2-brand">
                    <div className="lib-n9-2-brand-logo">A</div>
                    <div className="lib-n9-2-brand-text">Aether</div>
                </a>

                <div className="lib-n9-2-menu">
                    <div className="lib-n9-2-menu-item">
                        Products <i className="ri-arrow-down-s-line"></i>
                        <div className="lib-n9-2-dropdown">
                            <div className="lib-n9-2-panel-inner">
                                <div className="lib-n9-2-col-sidebar">
                                    <div style={{fontSize:'11px', color:'#555', fontWeight:600, paddingLeft:'12px', marginBottom:'8px'}}>PLATFORM</div>
                                    <a href="#" className="lib-n9-2-sidebar-link active">
                                        <span>Overview</span>
                                        <i className="ri-arrow-right-line"></i>
                                    </a>
                                    <a href="#" className="lib-n9-2-sidebar-link">
                                        <span>Frameworks</span>
                                    </a>
                                    <a href="#" className="lib-n9-2-sidebar-link">
                                        <span>Observability</span>
                                    </a>
                                    <a href="#" className="lib-n9-2-sidebar-link">
                                        <span>Edge Network</span>
                                    </a>
                                    <div style={{marginTop:'auto', padding:'12px', background:'rgba(255,255,255,0.03)', borderRadius:'8px'}}>
                                        <div style={{fontSize:'12px', color:'#fff', marginBottom:'4px'}}>Contact Sales</div>
                                        <div style={{fontSize:'11px', color:'#666'}}>Get a custom demo</div>
                                    </div>
                                </div>
                                <div className="lib-n9-2-col-grid">
                                    <a href="#" className="lib-n9-2-feature-card">
                                        <div className="lib-n9-2-card-icon"><i className="ri-server-line"></i></div>
                                        <div className="card-content">
                                            <h4>Serverless Functions</h4>
                                            <p>Run code without provisioning infrastructure.</p>
                                        </div>
                                    </a>
                                    <a href="#" className="lib-n9-2-feature-card">
                                        <div className="lib-n9-2-card-icon"><i className="ri-database-2-line"></i></div>
                                        <div className="card-content">
                                            <h4>Edge Storage</h4>
                                            <p>Low-latency data store for global apps.</p>
                                        </div>
                                    </a>
                                    <a href="#" className="lib-n9-2-feature-card">
                                        <div className="lib-n9-2-card-icon"><i className="ri-shield-keyhole-line"></i></div>
                                        <div className="card-content">
                                            <h4>Auth & Security</h4>
                                            <p>Enterprise-grade identity management.</p>
                                        </div>
                                    </a>
                                    <a href="#" className="lib-n9-2-feature-card">
                                        <div className="lib-n9-2-card-icon"><i className="ri-global-line"></i></div>
                                        <div className="card-content">
                                            <h4>Global Edge</h4>
                                            <p>Deploy to 100+ regions.</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="lib-n9-2-col-promo">
                                    <div className="lib-n9-2-promo-img">
                                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="Promo" />
                                    </div>
                                    <span className="promo-tag">NEW</span>
                                    <div style={{fontSize:'14px', color:'#fff', fontWeight:600}}>AI SDK 3.0</div>
                                    <div style={{fontSize:'12px', color:'#888', marginTop:'4px'}}>Build AI apps faster than ever.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lib-n9-2-menu-item">Solutions</div>
                    <div className="lib-n9-2-menu-item">Docs</div>
                    <div className="lib-n9-2-menu-item">Pricing</div>
                </div>

                <div className="lib-n9-2-actions">
                    <div className="lib-n9-2-search-btn">
                        <i className="ri-search-line"></i> Search... <span className="kbd">/</span>
                    </div>
                    <a href="#" className="btn-primary">Sign Up</a>
                    <div className="user-avatar"></div>
                </div>
            </nav>
        </div>
    );
};

// --- 14.1 The Floating Glass (SaaS Standard) ---
export const TheFloatingGlass: React.FC = () => {
    return (
        <div className="lib-nav-14-1-wrapper">
            <nav className="lib-nav-14-1">
                <a href="#" className="lib-n14-1-logo">Glass.</a>
                <div className="lib-n14-1-menu">
                    <div className="lib-n14-1-link active">Product</div>
                    <div className="lib-n14-1-link">Solutions</div>
                    <div className="lib-n14-1-link">Resources</div>
                    <div className="lib-n14-1-link">Pricing</div>
                </div>
                <a href="#" className="lib-n14-1-btn">Get Started</a>
            </nav>
        </div>
    );
};

// --- 14.2 The Neon Horizon (Cyber Tech) ---
export const TheNeonHorizon: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <nav className="lib-nav-14-2">
                <a href="#" className="lib-n14-2-logo">CYBER<span style={{color:'#3b82f6'}}>NET</span></a>
                <div className="lib-n14-2-menu">
                    <a href="#" className="lib-n14-2-link">Network</a>
                    <a href="#" className="lib-n14-2-link">Security</a>
                    <a href="#" className="lib-n14-2-link">Protocol</a>
                    <a href="#" className="lib-n14-2-link">Nodes</a>
                </div>
                <div style={{display:'flex', gap:'10px'}}>
                    <div style={{width:'10px', height:'10px', background:'#0f0', borderRadius:'50%', boxShadow:'0 0 10px #0f0'}}></div>
                    <div style={{fontSize:'12px', color:'#0f0', fontFamily:'monospace'}}>ONLINE</div>
                </div>
            </nav>
        </div>
    );
};

// --- 14.3 The Invisible Tech (Minimalist) ---
export const TheInvisibleTech: React.FC = () => {
    return (
        <div style={{ width: '100%' }}>
            <nav className="lib-nav-14-3">
                <div className="lib-n14-3-left">
                    <div className="lib-n14-3-logo"></div>
                    <div className="lib-n14-3-link">Manifesto</div>
                    <div className="lib-n14-3-link">Work</div>
                    <div className="lib-n14-3-link">Contact</div>
                </div>
                <div className="lib-n14-3-right">
                    <div className="lib-n14-3-icon"><i className="ri-search-line"></i></div>
                    <div className="lib-n14-3-icon"><i className="ri-menu-line"></i></div>
                </div>
            </nav>
        </div>
    );
};

// --- 14.4 The Command Notch (Utility) ---
export const TheCommandNotch: React.FC = () => {
    return (
        <div className="lib-nav-14-4-container">
            <nav className="lib-nav-14-4">
                <div className="lib-n14-4-logo">CMD</div>
                <div className="lib-n14-4-divider"></div>
                <div className="lib-n14-4-link">File</div>
                <div className="lib-n14-4-link">Edit</div>
                <div className="lib-n14-4-link">View</div>
                <div className="lib-n14-4-divider"></div>
                <div className="lib-n14-4-btn">Deploy</div>
            </nav>
        </div>
    );
};

// --- 14.5 The Elegant Serif (Luxury) ---
export const TheElegantSerif: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <nav className="lib-nav-14-5">
                <div className="lib-n14-5-menu">
                    <a href="#" className="lib-n14-5-link">COLLECTIONS</a>
                    <a href="#" className="lib-n14-5-link">ATELIER</a>
                </div>
                <div className="lib-n14-5-logo">L'Éternel</div>
                <div className="lib-n14-5-actions">
                    <div className="lib-n14-5-link">ACCOUNT</div>
                    <div className="lib-n14-5-link">BAG (0)</div>
                </div>
            </nav>
        </div>
    );
};

// --- 14.6 The Glowing Orb (Dreamy) ---
export const TheGlowingOrb: React.FC = () => {
    return (
        <div className="lib-nav-14-6-wrap">
            <div className="lib-nav-14-6-glow"></div>
            <nav className="lib-nav-14-6">
                <div className="lib-n14-6-logo">Dreamscape</div>
                <div className="lib-n14-6-center">
                    <a href="#" className="lib-n14-6-link">Sleep</a>
                    <a href="#" className="lib-n14-6-link">Meditate</a>
                    <a href="#" className="lib-n14-6-link">Focus</a>
                </div>
                <div className="lib-n14-6-btn"><i className="ri-add-line"></i></div>
            </nav>
        </div>
    );
};

// --- 14.7 The Split Deck (Structured) ---
export const TheSplitDeck: React.FC = () => {
    return (
        <div style={{ width: '100%', padding: '20px 0' }}>
            <nav className="lib-nav-14-7">
                <div className="lib-n14-7-brand">
                    LABS
                    <span>INTELLIGENCE</span>
                </div>
                <div className="lib-n14-7-menu-box">
                    <a href="#" className="lib-n14-7-link">Overview</a>
                    <a href="#" className="lib-n14-7-link">Models</a>
                    <a href="#" className="lib-n14-7-link">Safety</a>
                    <div className="lib-n14-7-btn">Access Beta</div>
                </div>
            </nav>
        </div>
    );
};

export { default as FloatingGlass } from './FloatingGlass';
export { default as RoyalGridNavbar } from './RoyalGrid';
export { default as FloatingIslandNavbar } from './FloatingIsland';
export { default as DarkAvantGardeNavbar } from './DarkAvantGarde';
export { default as MonolithNavbar } from './Monolith';
// export { TestButton } from './TestButton'; // TestButton component doesn't exist
export { ModernButton } from './ModernButton';
export { CyberButton } from './CyberButton';
export { SimpleNavbarWithHoverEffects } from './SimpleNavbarWithHoverEffects';
export { NavbarWithChildren } from './NavbarWithChildren';
export { MinimalLuxury } from './MinimalLuxury';
export { BrutalistTech } from './BrutalistTech';
export { default as AINeuralNavbar } from './AINeuralNavbar';
