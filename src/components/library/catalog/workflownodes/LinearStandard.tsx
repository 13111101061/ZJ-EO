import React from 'react';
import './LinearStandard.css';

const LinearStandard: React.FC = () => {
  return (
    <div className="wf-node-linear-std">
      <div className="wf-port wf-port-in" title="Input"></div>
      <div className="wf-port wf-port-out" title="Output"></div>
      <div className="wf-header">
        <span>Model Loader</span>
        <div className="wf-status"></div>
      </div>
      <div className="wf-body">
        <div className="wf-row">
          <span>Checkpoint</span>
          <span className="wf-tag">v1.5-pruned</span>
        </div>
        <div className="wf-row">
          <span>VAE</span>
          <span className="wf-tag">vae-ft-mse</span>
        </div>
        <div className="wf-row">
          <span>Clip Skip</span>
          <span className="wf-tag">2</span>
        </div>
      </div>
    </div>
  );
};

export default LinearStandard;
