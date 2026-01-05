import React from 'react';
import './ArtisticMuseumNavbar.css';

/**
 * ArtisticMuseumNavbar - The Curator style navigation
 * For museums, galleries, and high-end auction houses
 */
export const ArtisticMuseumNavbar: React.FC = () => {
  return (
    <nav className="nav-curator">
      <a href="#" className="c-logo">MUSEUM.</a>
      <div className="c-menu">
        <div className="c-item">
          EXHIBITIONS
          <div className="c-mega">
            <div className="c-col-list">
              <a href="#" className="c-link">Current <span>→</span></a>
              <a href="#" className="c-link">Upcoming</a>
              <a href="#" className="c-link">Past Archive</a>
              <a href="#" className="c-link" style={{ marginTop: 'auto', color: '#000' }}>All Schedules</a>
            </div>
            <div className="c-col-img">
              <div className="c-art-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}>
                <div className="c-art-info">
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Now Open</div>
                  <div style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif" }}>Abstract Minds</div>
                </div>
              </div>
              <div className="c-art-card" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')" }}>
                <div className="c-art-info">
                  <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px' }}>Coming Soon</div>
                  <div style={{ fontSize: '24px', fontFamily: "'Playfair Display', serif" }}>Renaissance</div>
                </div>
              </div>
            </div>
            <div className="c-col-info">
              <div className="c-quote">"Art is not what you see, but what you make others see."</div>
              <div className="c-date">
                <div>OPENING HOURS</div>
                <div>MON - SUN / 10AM - 6PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="c-item">ARTISTS</div>
        <div className="c-item">VISIT</div>
        <div className="c-item" style={{ fontSize: '20px' }}><i className="ri-search-line"></i></div>
      </div>
    </nav>
  );
};

/**
 * BrutalistXYZNavbar - The Brutalist style navigation
 * For avant-garde design exhibitions, independent artists, streetwear brands
 */
export const BrutalistXYZNavbar: React.FC = () => {
  return (
    <div className="nav-brutal">
      <div className="b-top-bar">
        <span>Free Entry for Students // New Collection Drops Friday // </span>
      </div>
      <div className="b-main">
        <div className="b-logo">XY/Z</div>
        <div className="b-item">
          COLLECTIONS
          <div className="b-dropdown">
            <div className="b-dd-col">
              <h3>// CATEGORIES</h3>
              <a href="#" className="b-list-link">DIGITAL <span>(42)</span></a>
              <a href="#" className="b-list-link">SCULPTURE <span>(18)</span></a>
              <a href="#" className="b-list-link">CANVAS <span>(105)</span></a>
              <a href="#" className="b-list-link">NFTs <span>(Live)</span></a>
            </div>
            <div className="b-dd-col">
              <h3>// FEATURED</h3>
              <div style={{ border: '1px solid #333', padding: '20px' }}>
                <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '10px' }}>THE VOID</h2>
                <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.5' }}>An immersive experience into the digital unknown. Warning: Strobe lights.</p>
                <div className="b-img-preview">
                  <i className="ri-eye-2-line" style={{ fontSize: '40px', color: '#d1ff00' }}></i>
                </div>
              </div>
            </div>
            <div className="b-dd-col" style={{ borderRight: 'none' }}>
              <h3>// ARTIST OF MONTH</h3>
              <div style={{ fontSize: '60px', lineHeight: '0.9', color: '#fff', fontWeight: '800', textTransform: 'uppercase' }}>
                Kaws<br />Effect
              </div>
              <div style={{ marginTop: '20px', color: '#d1ff00', cursor: 'pointer' }}>READ BIO -&gt;</div>
            </div>
          </div>
        </div>
        <div className="b-item">EDITORIAL</div>
        <div className="b-item">SHOP</div>
      </div>
    </div>
  );
};

/**
 * EtherealStudioNavbar - The Ethereal style navigation
 * For photographer portfolios, architecture firms
 */
export const EtherealStudioNavbar: React.FC = () => {
  return (
    <nav className="nav-ethereal">
      <a href="#" className="e-logo">STUDIO · BLANC</a>

      <div className="e-menu-wrap">
        <div className="e-trigger">WORK <span>+</span></div>

        <div className="e-panel">
          <div className="e-item">
            <a href="#" className="e-item-title">Architecture <i className="ri-arrow-right-up-line"></i></a>
            <div className="e-item-desc">Sustainable living spaces for modern era.</div>
          </div>

          <div className="e-item">
            <a href="#" className="e-item-title">Photography <i className="ri-arrow-right-up-line"></i></a>
            <div className="e-item-desc">Black & white analog series from Tokyo.</div>
            <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" className="e-img-mini" alt="Photography" />
          </div>

          <div className="e-item" style={{ marginBottom: '0' }}>
            <a href="#" className="e-item-title">Interior <i className="ri-arrow-right-up-line"></i></a>
            <div className="e-item-desc">Minimalist furniture design.</div>
          </div>
        </div>
      </div>
    </nav>
  );
};
