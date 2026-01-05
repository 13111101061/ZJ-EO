import React from 'react';
import './MonolithAINavbar.css';

/**
 * MonolithAINavbar - Brutalist AI tools suite navigation
 * Features: System ticker, mega dropdowns with image galleries, audio visualizers
 */
export const MonolithAINavbar: React.FC = () => {
  return (
    <>
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

      <nav className="navbar">
        <a href="#" className="brand-zone">
          <span className="brand-main">NEXUS</span>
          <span className="brand-sub">// AI_TOOLS_SUITE_V.4.0</span>
        </a>

        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" className="nav-trigger">
              <span>AI_VISION</span>
              <i className="ri-arrow-down-s-line"></i>
            </a>

            <div className="mega-fixed">
              <div className="grid-vision">
                <div className="gv-sidebar">
                  <div style={{ fontFamily: 'var(--font-code)', color: '#555', marginBottom: '20px' }}>[MODE_SELECT]</div>
                  <a href="#" className="gv-link"><strong>01</strong> Text to Image</a>
                  <a href="#" className="gv-link"><strong>02</strong> Image to Image</a>
                  <a href="#" className="gv-link"><strong>03</strong> Inpainting</a>
                  <a href="#" className="gv-link"><strong>04</strong> Upscale 4X</a>
                  <a href="#" className="gv-link"><strong>05</strong> Remove BG</a>
                </div>
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
                <div className="gv-promo">
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px' }}>SDXL TURBO</h3>
                    <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>Real-time generation is now available for Pro users.</p>
                  </div>
                  <div className="promo-box">
                    <span style={{ fontSize: '30px', fontWeight: '800' }}>0.4s</span><br />
                    <span style={{ fontSize: '10px', color: '#888' }}>LATENCY</span>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-trigger">
              <span>AI_VOICE</span>
              <span className="badge">REC</span>
            </a>

            <div className="mega-fixed">
              <div className="grid-voice">
                <div className="voice-col">
                  <div style={{ fontFamily: 'var(--font-code)', color: '#555', marginBottom: '20px', textTransform: 'uppercase' }}>[ Select Module ]</div>

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
                    <div className="v-bar" style={{ animationDelay: '0s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.1s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.2s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.3s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.4s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.5s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.3s' }}></div>
                    <div className="v-bar" style={{ animationDelay: '0.1s' }}></div>
                  </div>
                  <div style={{ marginTop: '20px', fontFamily: 'var(--font-code)', fontSize: '12px' }}>PROCESSING AUDIO STREAM...</div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-trigger">
              <span>AI_WRITER</span>
            </a>

            <div className="mega-fixed">
              <div className="grid-write">
                <div className="write-menu">
                  <a href="#" className="wm-item"><i className="ri-file-edit-line"></i> Blog Post</a>
                  <a href="#" className="wm-item"><i className="ri-twitter-x-line"></i> Social Copy</a>
                  <a href="#" className="wm-item"><i className="ri-mail-send-line"></i> Cold Email</a>
                  <a href="#" className="wm-item"><i className="ri-code-s-slash-line"></i> Code Helper</a>
                </div>
                <div className="write-editor">
                  <span style={{ color: '#666' }}>&gt; Initializing creative matrix...</span><br /><br />
                  The concept of artificial creativity is no longer a paradox. With <span style={{ color: '#fff', borderBottom: '1px solid #fff' }}>Nexus Writer</span>, we bridge the gap between intent and execution.<span className="cursor-blink"></span>
                </div>
                <div className="write-tools">
                  <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>TONE SETTINGS</h4>
                  <div style={{ marginBottom: '20px' }}>
                    <span className="wt-tag">PROFESSIONAL</span>
                    <span className="wt-tag">WITTY</span>
                    <span className="wt-tag">PERSUASIVE</span>
                    <span className="wt-tag">EMPATHETIC</span>
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>LENGTH</h4>
                  <div style={{ width: '100%', height: '2px', background: '#333', position: 'relative' }}>
                    <div style={{ width: '70%', height: '100%', background: '#fff' }}></div>
                    <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '-4px', left: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-trigger">
              <span>PROTOCOLS</span>
              <i className="ri-add-line"></i>
            </a>

            <div className="mega-fixed">
              <div className="grid-help">
                <div className="help-section">
                  <div className="hs-num">01</div>
                  <div className="hs-title">START HERE</div>
                  <div className="hs-list">
                    <a href="#">Quickstart Guide -&gt;</a>
                    <a href="#">API Authentication -&gt;</a>
                    <a href="#">Pricing Models -&gt;</a>
                  </div>
                </div>
                <div className="help-section">
                  <div className="hs-num">02</div>
                  <div className="hs-title">TUTORIALS</div>
                  <div className="hs-list">
                    <a href="#">Mastering Prompts (Video)</a>
                    <a href="#">Voice Training Data Guide</a>
                    <a href="#">SEO Optimization with AI</a>
                  </div>
                </div>
                <div className="help-section">
                  <div className="hs-num">03</div>
                  <div className="hs-title">SUPPORT</div>
                  <div className="hs-list">
                    <a href="#">Join Discord Community</a>
                    <a href="#">Submit Ticket</a>
                    <a href="#">System Status</a>
                  </div>
                </div>
              </div>
            </div>
          </li>

        </ul>

        <div className="nav-actions">
          <a href="#" className="action-icon"><i className="ri-search-2-line"></i></a>
          <a href="#" className="action-connect">
            Connect ID
          </a>
        </div>
      </nav>
    </>
  );
};
