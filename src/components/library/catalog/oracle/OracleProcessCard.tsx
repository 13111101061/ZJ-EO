import React from 'react';
import './OracleProcessCard.css';
import { motion } from 'framer-motion';

export const OracleProcessCard: React.FC = () => {
  return (
    <motion.div 
      className="oracle-process-card"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="oproc-glow"></div>
      
      <div className="oproc-left">
        <span className="oproc-number">01</span>
        <div className="oproc-line"></div>
      </div>
      
      <div className="oproc-right">
        <div className="oproc-header">
          <h3>Neural Analysis</h3>
          <span className="oproc-status">PROCESSING</span>
        </div>
        <p className="oproc-desc">
          Deep learning models dissect the input vectors to identify semantic patterns and anomalies.
        </p>
        
        <div className="oproc-progress-container">
          <div className="oproc-progress-bar" style={{ width: '65%' }}></div>
        </div>
      </div>
    </motion.div>
  );
};
