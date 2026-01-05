import React from 'react';
import './OracleStatusBar.css';
import { motion } from 'framer-motion';

export const OracleStatusBar: React.FC = () => {
  return (
    <motion.div 
      className="oracle-status-bar"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="osb-section osb-system">
        <div className="osb-led"></div>
        <span className="osb-label">ORACLE_MAIN</span>
      </div>
      
      <div className="osb-section osb-ticker">
        <div className="osb-ticker-content">
          <span>// SYNCING NODES</span>
          <span className="osb-sep">:::</span>
          <span>LATENCY 12ms</span>
          <span className="osb-sep">:::</span>
          <span>ENCRYPTION ACTIVE</span>
        </div>
      </div>
      
      <div className="osb-section osb-metrics">
        <div className="osb-metric">
          <span>CPU</span>
          <div className="osb-bar-container">
            <div className="osb-bar" style={{ width: '34%' }}></div>
          </div>
        </div>
        <div className="osb-metric">
          <span>MEM</span>
          <div className="osb-bar-container">
            <div className="osb-bar warn" style={{ width: '78%' }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
