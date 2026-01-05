import React from 'react';
import './SaaSDeveloperNavbar.css';

/**
 * SaaSDeveloperNavbar - Three styles of SaaS/Developer tool navigation bars
 * Style 1: The Command Center (Developer Platform)
 * Style 2: The Glass Layer (Creative Suite)
 * Style 3: The Enterprise Pro (Enterprise SaaS)
 */
export const SaaSDeveloperNavbar: React.FC<{ style?: 1 | 2 | 3 }> = ({ style = 1 }) => {
  if (style === 1) {
    return (
      <nav className="nav-v1">
        <a href="#" className="v1-logo">
          <div className="v1-logo-icon"><i className="ri-code-s-slash-line" style={{ color: '#fff' }}></i></div>
          DevCore
        </a>

        <div className="v1-menu">
          <div className="v1-item">
            Products <i className="ri-arrow-down-s-line"></i>
            <div className="v1-dropdown">
              <div>
                <div className="dd-group-title">Core Infrastructure</div>
                <a href="#" className="dd-link">
                  <i className="ri-database-2-line dd-icon"></i>
                  <div className="dd-text">
                    <h4>Managed Database</h4>
                    <p>Auto-scaling SQL & NoSQL clusters.</p>
                  </div>
                </a>
                <a href="#" className="dd-link">
                  <i className="ri-server-line dd-icon"></i>
                  <div className="dd-text">
                    <h4>Edge Compute</h4>
                    <p>Run serverless functions globally.</p>
                  </div>
                </a>
              </div>
              <div>
                <div className="dd-group-title">Developer Experience</div>
                <a href="#" className="dd-link">
                  <i className="ri-git-branch-line dd-icon" style={{ color: '#ec4899' }}></i>
                  <div className="dd-text">
                    <h4>CI/CD Pipelines</h4>
                    <p>Automated testing and deployment.</p>
                  </div>
                </a>
                <a href="#" className="dd-link">
                  <i className="ri-shield-check-line dd-icon" style={{ color: '#ec4899' }}></i>
                  <div className="dd-text">
                    <h4>Security Suite</h4>
                    <p>DDoS protection and WAF.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="v1-item">Solutions</div>
          <div className="v1-item">Pricing</div>
          <div className="v1-item">Docs</div>
        </div>

        <div className="v1-actions">
          <div className="v1-icon-btn">
            <i className="ri-notification-4-line"></i>
            <span className="v1-badge"></span>
          </div>
          <a href="#" className="v1-btn-text">Log In</a>
          <a href="#" className="v1-btn-primary">Sign Up Free</a>
          <div className="v1-avatar">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
          </div>
        </div>
      </nav>
    );
  }

  if (style === 2) {
    return (
      <div className="nav-v2-container">
        <nav className="nav-v2">
          <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
            <div className="v2-logo">AURA.AI</div>
            <div className="v2-menu">
              <div className="v2-item">
                Workspace
                <div className="v2-dropdown">
                  <a href="#" className="v2-dd-item">
                    <div className="v2-dd-icon-box"><i className="ri-pencil-ruler-2-line"></i></div>
                    <div>
                      <div style={{ fontWeight: '500' }}>Design Editor</div>
                      <div style={{ fontSize: '11px', color: '#888' }}>Create vectors & layouts</div>
                    </div>
                  </a>
                  <a href="#" className="v2-dd-item">
                    <div className="v2-dd-icon-box" style={{ color: '#60a5fa' }}><i className="ri-magic-line"></i></div>
                    <div>
                      <div style={{ fontWeight: '500' }}>AI Generator</div>
                      <div style={{ fontSize: '11px', color: '#888' }}>Text to image in seconds</div>
                    </div>
                  </a>
                  <a href="#" className="v2-dd-item">
                    <div className="v2-dd-icon-box" style={{ color: '#f472b6' }}><i className="ri-team-line"></i></div>
                    <div>
                      <div style={{ fontWeight: '500' }}>Team Collab</div>
                      <div style={{ fontSize: '11px', color: '#888' }}>Real-time whiteboarding</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="v2-item">Community</div>
              <div className="v2-item">Learn</div>
            </div>
          </div>

          <div className="v2-actions">
            <div className="v2-search">
              <i className="ri-search-line"></i>
              <input type="text" placeholder="Search assets..." />
              <span style={{ fontSize: '10px', color: '#555', border: '1px solid #444', padding: '2px 4px', borderRadius: '4px' }}>⌘K</span>
            </div>
            <i className="ri-notification-badge-line" style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }}></i>
            <div className="v2-auth-group">
              <a href="#" className="v2-auth-btn active">Log In</a>
              <a href="#" className="v2-auth-btn">Sign Up</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }

  // Style 3
  return (
    <nav className="nav-v3">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#" className="v3-logo"><i className="ri-global-line"></i> FIN<span>TECH</span></a>

        <div className="v3-menu">
          <div className="v3-menu-trigger">
            <a className="v3-btn">Features <i className="ri-arrow-down-s-fill"></i></a>

            <div className="v3-mega-wrapper">
              <div className="v3-mega-content">
                <div className="v3-side-nav">
                  <a href="#" className="active">Overview</a>
                  <a href="#">Payments</a>
                  <a href="#">Capital</a>
                  <a href="#">Tax Compliance</a>
                </div>

                <div className="v3-main-grid">
                  <div className="v3-feature-card">
                    <h5><i className="ri-bank-card-line" style={{ color: '#38bdf8', marginRight: '5px' }}></i> Corporate Cards</h5>
                    <p>Issue physical and virtual cards with custom limits instantly.</p>
                  </div>
                  <div className="v3-feature-card">
                    <h5><i className="ri-pie-chart-line" style={{ color: '#38bdf8', marginRight: '5px' }}></i> Expense Mgmt</h5>
                    <p>Real-time insights into your team's spending habits.</p>
                  </div>
                  <div className="v3-feature-card">
                    <h5><i className="ri-exchange-dollar-line" style={{ color: '#38bdf8', marginRight: '5px' }}></i> Global Payouts</h5>
                    <p>Send money to 150+ countries with low FX rates.</p>
                  </div>
                  <div className="v3-feature-card">
                    <h5><i className="ri-lock-password-line" style={{ color: '#38bdf8', marginRight: '5px' }}></i> Fraud Detection</h5>
                    <p>AI-powered security to keep your funds safe.</p>
                  </div>
                </div>

                <div className="v3-promo">
                  <h4>New: Mobile App</h4>
                  <p style={{ fontSize: '12px', marginBottom: '10px', opacity: '0.9' }}>Manage finances on the go.</p>
                  <button>Download Now</button>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="v3-btn">Customers</a>
          <a href="#" className="v3-btn">Enterprise</a>
        </div>
      </div>

      <div className="v3-right">
        <i className="ri-question-line" style={{ color: '#94a3b8', fontSize: '18px', cursor: 'pointer' }}></i>
        <i className="ri-notification-3-line" style={{ color: '#94a3b8', fontSize: '18px', cursor: 'pointer' }}></i>

        <div className="v3-divider"></div>

        <div className="v3-avatar-group">
          <div style={{ textAlign: 'right', marginRight: '5px' }}>
            <div className="v3-user-name">Alex.Doe</div>
            <div className="v3-user-role">Admin Workspace</div>
          </div>
          <div className="v1-avatar" style={{ width: '36px', height: '36px', borderColor: '#38bdf8' }}>
            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" />
          </div>
          <i className="ri-arrow-down-s-line" style={{ color: '#64748b', fontSize: '12px' }}></i>
        </div>
      </div>
    </nav>
  );
};
