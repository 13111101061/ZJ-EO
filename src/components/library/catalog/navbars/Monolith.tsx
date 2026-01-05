import React from 'react';
import './Navbars.css';

const MonolithNavbar: React.FC = () => {
    return (
        <div className="monolith-wrapper">
            {/* 1. 系统通告 */}
            <div className="sys-ticker">
                <div className="ticker-track">
                    <div className="ticker-item">/// SYSTEM STATUS: NORMAL ///</div>
                    <div className="ticker-item">NEW MODEL: SDXL-TURBO DEPLOYED</div>
                    <div className="ticker-item">VOICE CLONING API V2 IS LIVE</div>
                    <div className="ticker-item">/// MAINTENANCE SCHEDULED FOR 04:00 UTC ///</div>
                    <div className="ticker-item">SYSTEM STATUS: NORMAL</div>
                    <div className="ticker-item">NEW MODEL: SDXL-TURBO DEPLOYED</div>
                </div>
            </div>

            {/* 2. 导航栏主体 */}
            <nav className="monolith-navbar">
                {/* Logo */}
                <a href="#" className="brand-zone">
                    <span className="brand-main">NEXUS</span>
                    <span className="brand-sub">// AI_TOOLS_SUITE_V.4.0</span>
                </a>

                {/* 菜单链接 */}
                <ul className="nav-links">
                    
                    {/* ====== AI 绘图 (复杂的图片网格) ====== */}
                    <li className="nav-item">
                        <a href="#" className="nav-trigger">
                            <span>AI_VISION</span>
                            <i className="ri-arrow-down-s-line"></i>
                        </a>
                        
                        <div className="mega-fixed">
                            <div className="grid-vision">
                                {/* 侧栏 */}
                                <div className="gv-sidebar">
                                    <div style={{fontFamily:'var(--font-code)', color:'#555', marginBottom:'20px'}}>[MODE_SELECT]</div>
                                    <a href="#" className="gv-link"><strong>01</strong> Text to Image</a>
                                    <a href="#" className="gv-link"><strong>02</strong> Image to Image</a>
                                    <a href="#" className="gv-link"><strong>03</strong> Inpainting</a>
                                    <a href="#" className="gv-link"><strong>04</strong> Upscale 4X</a>
                                    <a href="#" className="gv-link"><strong>05</strong> Remove BG</a>
                                </div>
                                {/* 图片库 */}
                                <div className="gv-gallery">
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">PROMPT: CYBERPUNK...</div>
                                    </div>
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1531297461136-82lw9z28952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">MODEL: V5.1</div>
                                    </div>
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">SEED: 492384</div>
                                    </div>
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">STYLE: OIL PAINT</div>
                                    </div>
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1614728853913-1e221d643809?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">RENDER: 8K</div>
                                    </div>
                                    <div className="gv-card">
                                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI" />
                                        <div className="gv-card-meta">VIBE: NOIR</div>
                                    </div>
                                </div>
                                {/* 推广 */}
                                <div className="gv-promo">
                                    <div>
                                        <h3 style={{fontFamily:'var(--font-display)', fontSize:'24px'}}>SDXL TURBO</h3>
                                        <p style={{fontSize:'12px', color:'#888', marginTop:'10px'}}>Real-time generation is now available for Pro users.</p>
                                    </div>
                                    <div className="promo-box">
                                        <span style={{fontSize:'30px', fontWeight:800}}>0.4s</span><br/>
                                        <span style={{fontSize:'10px', color:'#888'}}>LATENCY</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    {/* ====== AI 配音 (音频轨道风格) ====== */}
                    <li className="nav-item">
                        <a href="#" className="nav-trigger">
                            <span>AI_VOICE</span>
                            <span className="badge">REC</span>
                        </a>

                        <div className="mega-fixed">
                            <div className="grid-voice">
                                <div className="voice-col">
                                    <div style={{fontFamily:'var(--font-code)', color:'#555', marginBottom:'20px', textTransform:'uppercase'}}>[ Select Module ]</div>
                                    
                                    <div className="voice-track-list">
                                        <div className="voice-track">
                                            <div className="vt-icon"><i className="ri-mic-line"></i></div>
                                            <div className="vt-info">
                                                <h4>Text to Speech</h4>
                                                <p>Standard synthesis with 500+ voices.</p>
                                            </div>
                                            <div className="vt-wave">||| || ||||| |</div>
                                        </div>
                                        
                                        <div className="voice-track">
                                            <div className="vt-icon"><i className="ri-fingerprint-line"></i></div>
                                            <div className="vt-info">
                                                <h4>Voice Cloning</h4>
                                                <p>Create digital twin from 10s audio.</p>
                                            </div>
                                            <div className="vt-wave">|| |||| || | ||</div>
                                        </div>

                                        <div className="voice-track">
                                            <div className="vt-icon"><i className="ri-translate-2-line"></i></div>
                                            <div className="vt-info">
                                                <h4>Video Dubbing</h4>
                                                <p>Auto-sync lips with translation.</p>
                                            </div>
                                            <div className="vt-wave">| ||| |||| ||</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="voice-col voice-demo">
                                    <div className="visualizer">
                                        <div className="v-bar" style={{animationDelay:'0s'}}></div>
                                        <div className="v-bar" style={{animationDelay:'0.1s'}}></div>
                                        <div className="v-bar" style={{animationDelay:'0.3s'}}></div>
                                        <div className="v-bar" style={{animationDelay:'0.5s'}}></div>
                                        <div className="v-bar" style={{animationDelay:'0.2s'}}></div>
                                        <div className="v-bar" style={{animationDelay:'0.4s'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MonolithNavbar;
