import React from 'react';
import './LinearPrism.css';

const LinearPrism: React.FC = () => {
  return (
    <div className="wf-node-prism">
      <div className="wf-port wf-port-in"></div>
      <div className="wf-port wf-port-out"></div>
      <div className="wf-node-prism-content">
        <h3><div className="wf-icon">✦</div> Image Upscale</h3>
        <p>4x UltraSharp (RealESRGAN)</p>
        <div style={{ marginTop: '15px', display: 'flex', gap: '8px' }}>
          <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>4096px</span>
          <span style={{ fontSize: '10px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>PNG</span>
        </div>
      </div>
    </div>
  );
};

export default LinearPrism;
