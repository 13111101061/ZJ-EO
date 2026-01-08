import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsCompact(window.scrollY > 120);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const capsuleNavItems = useMemo(
    () => [
      { path: '/enterprise', label: 'MONOLITH' },
      { path: '/library', label: 'ARCHIVES' },
    ],
    []
  );

  return (
    <>
      <div className={`monolith-shell ${isCompact ? 'monolith-shell--compact' : ''}`}>
        <div className="monolith-sys-ticker" aria-hidden="true">
          <div className="monolith-ticker-track">
            <div className="monolith-ticker-item">/// SYSTEM STATUS: NORMAL ///</div>
            <div className="monolith-ticker-item">NEW MODEL: SDXL-TURBO DEPLOYED</div>
            <div className="monolith-ticker-item">VOICE CLONING API V2 IS LIVE</div>
            <div className="monolith-ticker-item">/// MAINTENANCE SCHEDULED FOR 04:00 UTC ///</div>
            <div className="monolith-ticker-item">SYSTEM STATUS: NORMAL</div>
            <div className="monolith-ticker-item">NEW MODEL: SDXL-TURBO DEPLOYED</div>
          </div>
        </div>

        <nav className="monolith-navbar" aria-label="Top navigation">
          <Link to="/" className="monolith-brand-zone">
            <span className="monolith-brand-main">NEXUS</span>
            <span className="monolith-brand-sub">// AI_TOOLS_SUITE_V.4.0</span>
          </Link>

          <ul className="monolith-nav-links">
            <li className="monolith-nav-item">
              <Link to="/library" className="monolith-nav-trigger">
                <span>AI_VISION</span>
              </Link>
            </li>

            <li className="monolith-nav-item">
              <Link to="/library" className="monolith-nav-trigger">
                <span>AI_VOICE</span>
                <span className="monolith-badge">REC</span>
              </Link>
            </li>

            <li className="monolith-nav-item">
              <Link to="/library" className="monolith-nav-trigger">
                <span>AI_WRITER</span>
              </Link>
            </li>

            <li className="monolith-nav-item">
              <Link to="/library" className="monolith-nav-trigger">
                <span>PROTOCOLS</span>
                <i className="ri-add-line" />
              </Link>
            </li>
          </ul>

          <div className="monolith-nav-actions">
            <Link to="/library" className="monolith-action-icon" aria-label="Search">
              <i className="ri-search-2-line" />
            </Link>
            <button type="button" className="monolith-action-connect">Connect ID</button>
          </div>
        </nav>
      </div>

      <nav className={`fusion-navbar fusion-navbar--floating ${isCompact ? 'is-visible' : ''}`} aria-label="Floating navigation">
        <div className="nav-glass-plate" />
        <div className="nav-noise-overlay" />
        <div className="nav-border-glow" />

        <div className="nav-content-container">
          <Link to="/" className="nav-logo-area">
            <div className="nav-logo-icon">
              <i className="ri-flashlight-fill" />
            </div>
            <span className="nav-logo-text">
              FUSION<span className="text-dim">_OS</span>
            </span>
          </Link>

          <div className="nav-links">
            {capsuleNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                data-text={item.label}
              >
                <span className="nav-item-text">{item.label}</span>
                <div className="nav-item-indicator" />
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button className="nav-btn-magnetic" type="button">
              <span className="btn-content">CONNECT_ID</span>
              <div className="btn-scanline" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
