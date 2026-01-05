import React from 'react';
import './AINeuralNavbar.css';

/**
 * AINeuralNavbar - Advanced AI platform navigation with mega menus
 * Features: System status bar, complex mega dropdowns, voice waveforms
 */
export const AINeuralNavbar: React.FC = () => {
  return (
    <>
      <div className="sys-bar">
        <div className="sys-stat"><span className="sys-dot"></span>SYSTEM STATUS: ONLINE</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span>GPU CLUSTER: ACTIVE</span>
          <span>LATENCY: 12ms</span>
          <span>V.2.4.0</span>
        </div>
      </div>

      <nav className="navbar">
        <a href="#" className="brand">
          <div className="brand-icon">N</div>
          <div className="brand-text">NEURAL_NET</div>
        </a>

        <div className="menu">
          <div className="menu-item">
            Visual Engine <i className="ri-arrow-down-s-line"></i>

            <div className="mega-panel">
              <div className="mega-grid">
                <div className="col-nav">
                  <div className="nav-group-title">Generation Tools</div>
                  <a href="#" className="nav-list-link">Text to Image <i className="ri-arrow-right-line"></i></a>
                  <a href="#" className="nav-list-link">Image to Image</a>
                  <a href="#" className="nav-list-link">Inpainting / Edit</a>
                  <a href="#" className="nav-list-link">Upscaling (4K)</a>

                  <div className="nav-group-title" style={{ marginTop: '40px' }}>Models</div>
                  <a href="#" className="nav-list-link">Stable Diffusion XL</a>
                  <a href="#" className="nav-list-link">Midjourney V6</a>
                </div>

                <div className="col-main">
                  <a href="#" style={{ textDecoration: 'none', display: 'contents' }}>
                    <div className="feature-card">
                      <div>
                        <i className="ri-image-2-line card-icon"></i>
                        <div className="card-title">Realism Mode</div>
                        <div className="card-desc">Generate hyper-realistic photography with perfect lighting and texture.</div>
                      </div>
                      <div className="card-preview">
                        <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI Art" />
                      </div>
                    </div>
                  </a>
                  <a href="#" style={{ textDecoration: 'none', display: 'contents' }}>
                    <div className="feature-card">
                      <div>
                        <i className="ri-paint-brush-line card-icon"></i>
                        <div className="card-title">Artistic Style</div>
                        <div className="card-desc">Emulate oil painting, watercolor, and digital art styles instantly.</div>
                      </div>
                      <div className="card-preview">
                        <img src="https://images.unsplash.com/photo-1549490349-8643362247b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Art" />
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-side">
                  <div className="nav-group-title">Weekly Showcase</div>
                  <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <p style={{ fontSize: '24px', fontFamily: 'var(--font-art)', lineHeight: '1.2', marginBottom: '10px' }}>"The ghost in the machine."</p>
                    <p style={{ fontSize: '12px', color: '#666' }}>Featured Artist: 0x44<br />Prompt: Cyberpunk noir...</p>
                    <div style={{ marginTop: '20px', height: '1px', background: '#333', width: '100%' }}></div>
                    <div style={{ marginTop: '10px', fontSize: '10px', color: '#555', textAlign: 'right' }}>VIEW GALLERY -&gt;</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-item">
            Voice Lab <i className="ri-arrow-down-s-line"></i>

            <div className="mega-panel">
              <div className="mega-grid">
                <div className="col-nav">
                  <div className="nav-group-title">Voice Synthesis</div>
                  <a href="#" className="nav-list-link">Text to Speech</a>
                  <a href="#" className="nav-list-link">Voice Cloning</a>
                  <a href="#" className="nav-list-link">Dubbing Studio</a>

                  <div className="nav-group-title" style={{ marginTop: '40px' }}>Library</div>
                  <a href="#" className="nav-list-link">Character Voices</a>
                  <a href="#" className="nav-list-link">Narration Pro</a>
                </div>

                <div className="col-main">
                  <div className="feature-card">
                    <div>
                      <i className="ri-mic-2-line card-icon"></i>
                      <div className="card-title">Voice Cloning</div>
                      <div className="card-desc">Clone your own voice with just 30 seconds of audio sample.</div>
                    </div>
                    <div className="voice-wave">
                      <div className="bar" style={{ animationDelay: '0.1s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.3s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.5s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.2s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.4s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.1s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.6s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.3s' }}></div>
                      <div className="bar" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div>
                      <i className="ri-translate-2-line card-icon"></i>
                      <div className="card-title">Auto Dubbing</div>
                      <div className="card-desc">Translate videos into 30+ languages while preserving the original emotion.</div>
                    </div>
                    <div style={{ marginTop: '20px', fontFamily: 'var(--font-code)', fontSize: '10px', color: '#555', border: '1px solid #333', padding: '10px' }}>
                      [SRC: EN] -&gt; [TGT: JA]<br />Processing... 98%
                    </div>
                  </div>
                </div>

                <div className="col-side">
                  <div className="nav-group-title">Latest Model</div>
                  <h3 style={{ color: '#fff', fontSize: '18px', marginBottom: '10px' }}>Neural_V2</h3>
                  <p style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>Our most human-like speech model yet. Pauses, breaths, and intonation.</p>
                  <a href="#" style={{ color: '#fff', fontSize: '12px', textDecoration: 'underline' }}>Listen to Samples</a>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-item">
            Writing Neural <i className="ri-arrow-down-s-line"></i>

            <div className="mega-panel">
              <div className="mega-grid">
                <div className="col-nav">
                  <div className="nav-group-title">Content Types</div>
                  <a href="#" className="nav-list-link">Blog & Article</a>
                  <a href="#" className="nav-list-link">Copywriting</a>
                  <a href="#" className="nav-list-link">Social Media</a>
                  <a href="#" className="nav-list-link">Academic Paper</a>
                  <a href="#" className="nav-list-link">Email Assistant</a>
                </div>

                <div className="col-main">
                  <div className="feature-card">
                    <div>
                      <i className="ri-file-text-line card-icon"></i>
                      <div className="card-title">Long-form Writer</div>
                      <div className="card-desc">Generate 2000+ words SEO-optimized articles in minutes.</div>
                    </div>
                    <div className="doc-mini">
                      <h1>The Future of AI</h1>
                      <p>Artificial intelligence is reshaping the way we think about creativity...</p>
                    </div>
                  </div>
                  <div className="feature-card">
                    <div>
                      <i className="ri-magic-line card-icon"></i>
                      <div className="card-title">Style Editor</div>
                      <div className="card-desc">Rewrite content in specific tones: Professional, Witty, or Storytelling.</div>
                    </div>
                  </div>
                </div>

                <div className="col-side">
                  <div className="nav-group-title">Templates</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    <span style={{ fontSize: '11px', padding: '5px 10px', border: '1px solid #333', color: '#aaa' }}>Cold Email</span>
                    <span style={{ fontSize: '11px', padding: '5px 10px', border: '1px solid #333', color: '#aaa' }}>Landing Page</span>
                    <span style={{ fontSize: '11px', padding: '5px 10px', border: '1px solid #333', color: '#aaa' }}>Video Script</span>
                    <span style={{ fontSize: '11px', padding: '5px 10px', border: '1px solid #333', color: '#aaa' }}>Tweet Thread</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-item">
            Knowledge Base <i className="ri-arrow-down-s-line"></i>

            <div className="mega-panel">
              <div className="mega-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                <div className="feature-card" style={{ border: 'none', background: 'transparent', padding: '40px' }}>
                  <i className="ri-book-open-line card-icon" style={{ color: '#fff' }}></i>
                  <div className="card-title" style={{ fontStyle: 'normal' }}>Documentation</div>
                  <div className="card-desc">In-depth guides on API usage, model parameters, and integration.</div>
                  <a href="#" style={{ marginTop: '20px', display: 'inline-block', fontSize: '12px', color: '#fff', textDecoration: 'underline' }}>Read Docs</a>
                </div>
                <div className="feature-card" style={{ border: 'none', background: 'transparent', borderLeft: '1px solid var(--border-light)', padding: '40px' }}>
                  <i className="ri-play-circle-line card-icon" style={{ color: '#fff' }}></i>
                  <div className="card-title" style={{ fontStyle: 'normal' }}>Video Tutorials</div>
                  <div className="card-desc">Step-by-step video courses to master prompt engineering.</div>
                  <a href="#" style={{ marginTop: '20px', display: 'inline-block', fontSize: '12px', color: '#fff', textDecoration: 'underline' }}>Watch Videos</a>
                </div>
                <div className="feature-card" style={{ border: 'none', background: 'transparent', borderLeft: '1px solid var(--border-light)', padding: '40px' }}>
                  <i className="ri-customer-service-2-line card-icon" style={{ color: '#fff' }}></i>
                  <div className="card-title" style={{ fontStyle: 'normal' }}>Help Center</div>
                  <div className="card-desc">Contact support, check status, or join the community discord.</div>
                  <a href="#" style={{ marginTop: '20px', display: 'inline-block', fontSize: '12px', color: '#fff', textDecoration: 'underline' }}>Get Support</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="auth-actions">
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><i className="ri-search-line"></i></a>
          <a href="#" className="btn-link">Log In</a>
          <a href="#" className="btn-solid">GET STARTED</a>
        </div>
      </nav>
    </>
  );
};
