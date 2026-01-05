import React from 'react';
import { Link } from 'react-router-dom';
import './SystemMap.css';

const SystemMap: React.FC = () => {
  return (
    <section className="system-map-scope">
      <div className="system-map-header">
        <h2 className="system-map-title">The Ecosystem</h2>
        <p className="system-map-desc">
            Explore the four pillars of the Nexus infrastructure. Each module is designed to operate independently or as part of the unified collective.
        </p>
      </div>

      <div className="system-grid">
        
        {/* 1. Interface */}
        <Link to="/interface" className="system-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2808&auto=format&fit=crop)' }}></div>
            <div className="card-arrow"><i className="ri-arrow-right-up-line"></i></div>
            <div className="card-content">
                <span className="card-num">01 // HOLOGRAPHIC_HUD</span>
                <h3 className="card-title">Command Center</h3>
                <p style={{ color: '#aaa', fontSize: '14px' }}>Real-time data visualization and system monitoring interface.</p>
            </div>
        </Link>

        {/* 2. Blueprint */}
        <Link to="/blueprint" className="system-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop)' }}></div>
            <div className="card-arrow"><i className="ri-arrow-right-up-line"></i></div>
            <div className="card-content">
                <span className="card-num">02 // NEURAL_LATTICE</span>
                <h3 className="card-title">System Blueprint</h3>
                <p style={{ color: '#aaa', fontSize: '14px' }}>Deep dive into the architectural core and content blocks.</p>
            </div>
        </Link>

        {/* 3. Enterprise */}
        <Link to="/enterprise" className="system-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop)' }}></div>
            <div className="card-arrow"><i className="ri-arrow-right-up-line"></i></div>
            <div className="card-content">
                <span className="card-num">03 // MONOLITH_CORP</span>
                <h3 className="card-title">Enterprise</h3>
                <p style={{ color: '#aaa', fontSize: '14px' }}>Corporate intelligence solutions and scalable infrastructure.</p>
            </div>
        </Link>

        {/* 4. Gallery */}
        <Link to="/gallery" className="system-card">
            <div className="card-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop)' }}></div>
            <div className="card-arrow"><i className="ri-arrow-right-up-line"></i></div>
            <div className="card-content">
                <span className="card-num">04 // ART_COLLECTION</span>
                <h3 className="card-title">The Collection</h3>
                <p style={{ color: '#aaa', fontSize: '14px' }}>Generative art showcase and creative synthesis.</p>
            </div>
        </Link>

      </div>
    </section>
  );
};

export default SystemMap;
