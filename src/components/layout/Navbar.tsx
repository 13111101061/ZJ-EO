import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  // "Avant-Garde" renaming of the remaining links
  const navItems = [
    { path: '/enterprise', label: 'MONOLITH' },
    { path: '/library', label: 'ARCHIVES' },
  ];

  return (
    <nav className="fusion-navbar">
      {/* Structural layers for Glassmorphism & Noise */}
      <div className="nav-glass-plate" />
      <div className="nav-noise-overlay" />
      <div className="nav-border-glow" />

      <div className="nav-content-container">
        <Link to="/" className="nav-logo-area">
          <div className="nav-logo-icon">
            <div className="logo-glitch-layer"></div>
            <i className="ri-flashlight-fill"></i>
          </div>
          <span className="nav-logo-text">
            FUSION<span className="text-dim">_OS</span>
          </span>
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
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
          <button className="nav-btn-magnetic">
            <span className="btn-content">CONNECT_ID</span>
            <div className="btn-scanline" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
