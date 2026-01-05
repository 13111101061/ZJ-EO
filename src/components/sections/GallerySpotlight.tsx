import React from 'react';
import './GallerySpotlight.css';

const GallerySpotlight: React.FC = () => {
  return (
    <section className="gallery-spotlight-scope">
      <div className="gs-container">
          
          <div className="gs-sticky-side">
              <span className="gs-label">FEATURED ARTIST // S01</span>
              <h2 className="gs-title">CHAOS<br/>THEORY</h2>
              <p className="gs-desc">
                  Exploring the intersection of generative algorithms and organic decay. 
                  This collection simulates the erosion of digital data over time.
              </p>
              <div className="gs-artist-tag">
                  <div className="gs-artist-avatar" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop)' }}></div>
                  <span>Elena Void</span>
              </div>
          </div>

          <div className="gs-scroll-side">
              {/* Art Piece 1 */}
              <div className="gs-card">
                  <img className="gs-card-img" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop" alt="Abstract Art 1" />
                  <div className="gs-card-meta">
                      <div className="gs-meta-title">Entropy Level 1</div>
                      <div className="gs-meta-date">GENERATED: 2024.10.01</div>
                  </div>
              </div>

              {/* Art Piece 2 */}
              <div className="gs-card" style={{ marginLeft: '40px' }}>
                  <img className="gs-card-img" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2940&auto=format&fit=crop" alt="Abstract Art 2" />
                  <div className="gs-card-meta">
                      <div className="gs-meta-title">Neon Decay</div>
                      <div className="gs-meta-date">GENERATED: 2024.11.15</div>
                  </div>
              </div>

              {/* Art Piece 3 */}
              <div className="gs-card">
                  <img className="gs-card-img" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=3000&auto=format&fit=crop" alt="Abstract Art 3" />
                  <div className="gs-card-meta">
                      <div className="gs-meta-title">Void Structure</div>
                      <div className="gs-meta-date">GENERATED: 2024.12.08</div>
                  </div>
              </div>
          </div>

      </div>
    </section>
  );
};

export default GallerySpotlight;
