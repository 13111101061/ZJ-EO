import React from 'react';
import { motion } from 'framer-motion';

const StatusBadge: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      style={{
        position: 'fixed', bottom: '30px', right: '30px', zIndex: 50,
        display: 'flex', alignItems: 'center', gap: '10px',
        padding: '10px 20px', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
        fontFamily: "'JetBrains Mono'", fontSize: '10px', color: '#888'
      }}
    >
      <span style={{ width: '6px', height: '6px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 8px #22c55e' }}></span>
      SYSTEM_ONLINE_V2.0
    </motion.div>
  );
};

export default StatusBadge;
