import React, { useState } from 'react';
import './LiquidChromeDropdown.css';

const LiquidChromeDropdown: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="lc-dropdown-wrapper" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <div className="lc-btn">Dimensions</div>
      <div className={`lc-menu ${open ? 'lc-open' : ''}`}>
        <div className="lc-item">
          <span>Neural Network</span>
        </div>
        <div className="lc-item">
          <span>Quantum Grid</span>
        </div>
        <div className="lc-item">
          <span>Vector Space</span>
        </div>
        <div className="lc-item">
          <span>Flux Capacity</span>
        </div>
      </div>
    </div>
  );
};

export default LiquidChromeDropdown;
