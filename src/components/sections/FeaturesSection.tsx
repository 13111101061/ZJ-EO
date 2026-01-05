import React from 'react';
import './FeaturesSection.css';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-scope">
      <div className="section-header">
          <h2 className="sec-title">Core Modules</h2>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", color: '#666' }}>// SYSTEM_CAPABILITIES</div>
      </div>

      <div className="bento-grid">
          {/* Module 1: AI Vision (Wide) */}
          <div className="card card-span-2">
              <div className="card-top">
                  <div className="card-icon"><i className="ri-eye-2-line"></i></div>
                  <div style={{ border: '1px solid #333', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', color: '#fff' }}>V.5.2</div>
              </div>
              <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div className="card-content">
                      <h3>Visual Engine</h3>
                      <p>Generate photorealistic assets with pixel-perfect control. Latent diffusion models optimized for speed.</p>
                  </div>
                  <div className="viz-box" style={{ flex: 1, border: 'none', background: 'transparent', borderRadius: '8px', overflow: 'hidden', minWidth: '200px' }}>
                      <div className="scan-line"></div>
                      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="scan-img" alt="AI Vision" />
                  </div>
              </div>
          </div>

          {/* Module 2: AI Code (Tall) */}
          <div className="card card-tall">
              <div className="card-top">
                  <div className="card-icon"><i className="ri-code-s-slash-line"></i></div>
              </div>
              <div className="viz-box" style={{ height: '200px', margin: '20px 0' }}>
                  <div className="code-block">
                      &gt; <span className="code-hl">const</span> idea = <span className="code-hl">await</span> ai.dream();<br />
                      &gt; processing context...<br />
                      &gt; <span className="code-hl">tokens</span>: 4096<br />
                      &gt; sentiment: positive<br />
                      &gt; generating...<br />
                      <span style={{ color: '#fff' }}>"The singularity is near."</span>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Neural Code</h3>
                  <p>Advanced LLM integration for code generation, refactoring, and documentation.</p>
              </div>
          </div>

          {/* Module 3: AI Voice */}
          <div className="card">
              <div className="card-top">
                  <div className="card-icon"><i className="ri-mic-2-line"></i></div>
              </div>
              <div className="viz-box">
                  <div className="wave-group">
                      <div className="wave" style={{ animationDelay: '0.1s' }}></div>
                      <div className="wave" style={{ animationDelay: '0.3s' }}></div>
                      <div className="wave" style={{ animationDelay: '0.5s' }}></div>
                      <div className="wave" style={{ animationDelay: '0.2s' }}></div>
                      <div className="wave" style={{ animationDelay: '0.4s' }}></div>
                  </div>
              </div>
              <div className="card-content" style={{ marginTop: '20px' }}>
                  <h3>Voice Synth</h3>
                  <p>Human-level voice cloning.</p>
              </div>
          </div>

          {/* Module 4: Analytics */}
          <div className="card">
              <div className="card-top">
                  <div className="card-icon"><i className="ri-bar-chart-grouped-line"></i></div>
              </div>
              <div className="viz-box">
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(180deg, rgba(59,130,246,0.1), transparent)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingBottom: '10px' }}>
                      <div style={{ width: '10px', height: '40%', background: '#333' }}></div>
                      <div style={{ width: '10px', height: '70%', background: '#fff' }}></div>
                      <div style={{ width: '10px', height: '50%', background: '#333' }}></div>
                      <div style={{ width: '10px', height: '80%', background: '#fff' }}></div>
                  </div>
              </div>
              <div className="card-content" style={{ marginTop: '20px' }}>
                  <h3>Analytics</h3>
                  <p>Real-time token usage stats.</p>
              </div>
          </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
