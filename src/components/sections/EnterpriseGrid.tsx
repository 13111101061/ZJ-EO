import React from 'react';
import './EnterpriseGrid.css';

const EnterpriseGrid: React.FC = () => {
  return (
    <section className="enterprise-grid-scope">
      <div className="eg-header">
          <div>
              <div className="eg-subtitle">Global Impact</div>
              <h2 className="eg-title">Scale Without<br/>Compromise.</h2>
          </div>
          <div style={{ textAlign: 'right' }}>
              <div className="eg-subtitle">Year 2025</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: '12px' }}>REPORT_ID: #8829</div>
          </div>
      </div>

      <div className="eg-grid">
          {/* Metric 1 */}
          <div className="eg-cell">
              <div className="eg-label">Active Nodes</div>
              <div className="eg-metric">42K</div>
          </div>
          {/* Metric 2 */}
          <div className="eg-cell">
              <div className="eg-label">Requests / Sec</div>
              <div className="eg-metric">9.8M</div>
          </div>
          
          {/* Map Visualization */}
          <div className="eg-cell eg-cell-large">
              <div className="eg-label" style={{ position: 'absolute', top: '30px', left: '30px' }}>Global Availability Zones</div>
              <div className="map-viz">
                  <div className="map-point mp-1"></div>
                  <div className="map-point mp-2"></div>
                  <div className="map-point mp-3"></div>
                  {/* Abstract lines */}
                  <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
                      <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
                  </svg>
              </div>
          </div>

          {/* Metric 3 */}
          <div className="eg-cell">
              <div className="eg-label">Uptime</div>
              <div className="eg-metric">99.9%</div>
          </div>
          {/* Metric 4 */}
          <div className="eg-cell">
              <div className="eg-label">Enterprise Clients</div>
              <div className="eg-metric">500+</div>
          </div>
          
          {/* Text Block */}
          <div className="eg-cell eg-cell-large" style={{ justifyContent: 'flex-start', background: '#000', color: '#fff' }}>
              <div className="eg-label" style={{ color: '#888', marginBottom: '20px' }}>Our Promise</div>
              <p style={{ fontFamily: 'Inter', fontSize: '20px', lineHeight: '1.5' }}>
                  "We provide the infrastructure for the next generation of intelligence. Secure, scalable, and relentlessly efficient."
              </p>
          </div>
      </div>
    </section>
  );
};

export default EnterpriseGrid;
