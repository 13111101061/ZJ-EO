import React from 'react';
import '../../styles/Maximalist.css';
import './FusionLayout.css';
import FloatingOrbs from '../ui/FloatingOrbs';

interface FusionLayoutProps {
  children: React.ReactNode;
}

const FusionLayout: React.FC<FusionLayoutProps> = ({ children }) => {
  return (
    <div className="fusion-wrapper">
      {/* Background Layers */}
      <div className="fusion-bg-memphis" />
      <div className="fusion-bg-vapor" />
      <div className="fusion-bg-noise" />
      
      {/* Reusing Floating Orbs for ambient movement */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.5, pointerEvents: 'none' }}>
        <FloatingOrbs />
      </div>

      {/* Main Content */}
      <div className="fusion-content">
        {children}
      </div>
    </div>
  );
};

export default FusionLayout;
