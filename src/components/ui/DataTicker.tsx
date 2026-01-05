import React from 'react';
import { motion } from 'framer-motion';

const DataTicker: React.FC = () => {
  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, width: '100%', height: '30px',
      background: '#000', borderTop: '1px solid #333',
      display: 'flex', alignItems: 'center', overflow: 'hidden', zIndex: 100
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: '40px', paddingLeft: '20px', whiteSpace: 'nowrap', fontFamily: "'JetBrains Mono'", fontSize: '10px', color: '#666' }}
      >
        <span>BTC: $98,421 [+2.4%]</span>
        <span>ETH: $5,210 [+1.1%]</span>
        <span>NEXUS: $142.5 [+12.5%]</span>
        <span>SYSTEM_LOAD: 42%</span>
        <span>ACTIVE_NODES: 8,921</span>
        <span>BTC: $98,421 [+2.4%]</span>
        <span>ETH: $5,210 [+1.1%]</span>
        <span>NEXUS: $142.5 [+12.5%]</span>
        <span>SYSTEM_LOAD: 42%</span>
        <span>ACTIVE_NODES: 8,921</span>
      </motion.div>
    </div>
  );
};

export default DataTicker;
