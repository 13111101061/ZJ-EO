import React from 'react';
import './ObsidianArchitectNavbar.css';

/**
 * ObsidianArchitectNavbar - Futuristic technical navigation
 * Features: Crosshair animations, scan lines, technical data displays
 */
export const ObsidianArchitectNavbar: React.FC = () => {
  return (
    <nav className="nav-shell">
      <a href="#" className="brand-unit">
        <div className="brand-logo-box">
          <i className="ri-command-fill brand-icon"></i>
        </div>
        <div className="brand-text">
          <h1>Obsidian</h1>
          <p>AI_OS_SYSTEM_V9</p>
        </div>
      </a>

      <div className="nav-core">
        <div className="nav-btn">
          <span className="nav-num">01</span>
          VISUAL_ENGINE

          <div className="mega-void">
            <div className="mega-grid">
              <div className="zone-index">
                <div>
                  <div style={{ fontFamily: 'var(--font-code)', color: '#333', marginBottom: '20px' }}>[ SELECT_MODE ]</div>
                  <a href="#">TXT_TO_IMG</a>
                  <a href="#">IMG_TO_IMG</a>
                  <a href="#">INPAINTING</a>
                  <a href="#">UPSCALE_4K</a>
                </div>
                <div className="index-meta">
                  LATENCY: 12ms<br />
                  GPU: ACTIVE<br />
                  QUEUE: EMPTY
                </div>
              </div>

              <div className="zone-visual">
                <div className="tech-card">
                  <div className="tech-card-inner">
                    <div className="scan-line"></div>
                    <div>
                      <i className="ri-camera-lens-line tc-icon"></i>
                      <div className="tc-title">REALISM_V5</div>
                      <div className="tc-desc">Photorealistic generation engine with advanced lighting simulation.</div>
                    </div>
                    <div className="tc-stat">
                      <span>ACCURACY: 99.8%</span>
                      <span>RENDER: &lt; 2s</span>
                    </div>
                  </div>
                </div>
                <div className="tech-card">
                  <div className="tech-card-inner">
                    <div className="scan-line" style={{ transitionDelay: '0.1s' }}></div>
                    <div>
                      <i className="ri-brush-2-line tc-icon"></i>
                      <div className="tc-title">VECTOR_ART</div>
                      <div className="tc-desc">SVG generation for scalable graphics and logos.</div>
                    </div>
                    <div className="tc-stat">
                      <span>FORMAT: .SVG</span>
                      <span>NODES: UNLIMITED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="zone-data">
                <div className="data-monitor">
                  <div className="monitor-row">
                    <span>SYSTEM</span><span className="monitor-val"><span className="blink-dot"></span>ONLINE</span>
                  </div>
                  <div className="monitor-row">
                    <span>CREDITS</span><span className="monitor-val">UNLIMITED</span>
                  </div>
                  <hr style={{ border: '0', borderTop: '1px dashed #333', margin: '10px 0' }} />
                  <div style={{ fontSize: '10px', color: '#555' }}>
                    &gt; CONNECTING TO NEURAL NET...<br />
                    &gt; HANDSHAKE ESTABLISHED.<br />
                    &gt; READY FOR INPUT.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <span className="nav-num">02</span>
          AUDIO_SYNTH

          <div className="mega-void">
            <div className="mega-grid">
              <div className="zone-index">
                <div>
                  <div style={{ fontFamily: 'var(--font-code)', color: '#333', marginBottom: '20px' }}>[ AUDIO_MOD ]</div>
                  <a href="#">VOICE_CLONE</a>
                  <a href="#">TTS_STANDARD</a>
                  <a href="#">SOUND_FX</a>
                </div>
              </div>
              <div className="zone-visual">
                <div className="tech-card">
                  <div className="tech-card-inner">
                    <div>
                      <i className="ri-mic-line tc-icon"></i>
                      <div className="tc-title">VOICE_LAB</div>
                      <div className="tc-desc">Clone voices with 3s sample.</div>
                      <div className="audio-viz">
                        <div className="av-bar" style={{ height: '10px', animationDelay: '0.1s' }}></div>
                        <div className="av-bar" style={{ height: '20px', animationDelay: '0.3s' }}></div>
                        <div className="av-bar" style={{ height: '15px', animationDelay: '0.5s' }}></div>
                        <div className="av-bar" style={{ height: '25px', animationDelay: '0.2s' }}></div>
                        <div className="av-bar" style={{ height: '10px', animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tech-card">
                  <div className="tech-card-inner">
                    <div>
                      <i className="ri-translate-2-line tc-icon"></i>
                      <div className="tc-title">AUTO_DUB</div>
                      <div className="tc-desc">Video translation sync.</div>
                    </div>
                    <div className="tc-stat">
                      <span>LANG: 40+</span>
                      <span>LIP-SYNC: ON</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="zone-data">
                <div className="data-monitor" style={{ borderColor: '#fff' }}>
                  <div style={{ textAlign: 'center', padding: '20px 0' }}>
                    <i className="ri-lock-2-line" style={{ fontSize: '24px', color: '#fff', marginBottom: '10px' }}></i>
                    <div style={{ color: '#fff' }}>SECURE_ENCLAVE</div>
                    <div style={{ fontSize: '9px', marginTop: '5px' }}>Voice data is encrypted end-to-end.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-btn">
          <span className="nav-num">03</span>
          WRITING_CORE
        </div>

        <div className="nav-btn">
          <span className="nav-num">04</span>
          KNOWLEDGE
        </div>

      </div>

      <div className="nav-end">
        <div className="search-trigger">
          [ SEARCH_CMD ]
        </div>
        <a href="#" className="btn-launch">
          Launch Console
        </a>
      </div>

    </nav>
  );
};
