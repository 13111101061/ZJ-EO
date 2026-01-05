import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="hero-scope">
        <div className="hero-glow"></div>
        
        <div className="hero-tag">INTELLIGENCE AMPLIFIED V.2.0</div>
        
        <h1 className="hero-title">
            Architect<br />The Future
        </h1>
        
        <p className="hero-desc">
            The unified neural interface for generative art, voice synthesis, and linguistic models. Designed for the builders of tomorrow.
        </p>
        
        <div className="hero-btns">
            <a href="#" className="btn-primary">Start Building</a>
            <a href="#" className="btn-ghost"><i className="ri-play-circle-line"></i> Watch Keynote</a>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="trust-strip">
          <div className="logo-ph"><i className="ri-triangle-fill"></i> VERCEL</div>
          <div className="logo-ph"><i className="ri-command-fill"></i> LINEAR</div>
          <div className="logo-ph"><i className="ri-openai-fill"></i> OPENAI</div>
          <div className="logo-ph"><i className="ri-github-fill"></i> GITHUB</div>
          <div className="logo-ph"><i className="ri-stack-fill"></i> RAYCAST</div>
      </div>
    </>
  );
};

export default HeroSection;
