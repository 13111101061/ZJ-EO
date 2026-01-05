import React from 'react';
import './OraclePromptCard.css';
import { motion } from 'framer-motion';

export const OraclePromptCard: React.FC = () => {
  return (
    <motion.div 
      className="oracle-prompt-card"
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="opc-glass-layer"></div>
      <div className="opc-noise"></div>
      
      <div className="opc-header">
        <div className="opc-badge">
          <span className="opc-indicator"></span>
          SYSTEM_V2
        </div>
        <div className="opc-actions">
          <div className="opc-dot"></div>
          <div className="opc-dot"></div>
        </div>
      </div>

      <div className="opc-body">
        <p className="opc-text">
          <span className="opc-keyword">/imagine</span> prompt: 
          <span className="opc-value"> a futuristic cathedral made of bioluminescent glass, floating in a void, cinematic lighting, 8k resolution, octane render</span>
          <span className="opc-cursor">_</span>
        </p>
      </div>

      <div className="opc-footer">
        <div className="opc-meta">
          <span>AR 16:9</span>
          <span>V 5.2</span>
        </div>
        <button className="opc-btn">
          COPY
        </button>
      </div>
    </motion.div>
  );
};
