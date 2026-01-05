import React from 'react';
import './VisionSection.css';

const VisionSection: React.FC = () => {
  return (
    <section className="vision-scope">
      <div className="vision-beam"></div>
      
      <div className="vision-container">
        <div className="vision-blur-text">
            <span>WE</span> <br />
            <span>BUILD</span> <br />
            <span>WORLDS</span>
        </div>
        
        <p className="vision-manifesto">
            We are not just coding interfaces. We are architecting <strong>digital sensory systems</strong>. 
            Merging the precision of engineering with the chaos of art to create software that feels 
            <strong> alive</strong>.
        </p>
      </div>

      <div className="ticker-wrap">
          <div className="ticker">
              SYSTEM_STATUS: ONLINE // NEURAL_LINK: ESTABLISHED // LATENCY: 12MS // RENDERING_CORE: V.9.2 // ARTIFICIAL_CONSCIOUSNESS: PENDING // 
              SYSTEM_STATUS: ONLINE // NEURAL_LINK: ESTABLISHED // LATENCY: 12MS // RENDERING_CORE: V.9.2 // ARTIFICIAL_CONSCIOUSNESS: PENDING // 
          </div>
      </div>
    </section>
  );
};

export default VisionSection;
