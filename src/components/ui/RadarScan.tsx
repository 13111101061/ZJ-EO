import React from 'react';
import { motion } from 'framer-motion';

const RadarScan: React.FC = () => {
  return (
    <div style={{
      position: 'absolute', bottom: '50px', left: '50px', width: '150px', height: '150px',
      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%',
      background: 'rgba(0,0,0,0.5)', overflow: 'hidden', zIndex: 10
    }}>
      {/* Rings */}
      <div style={{ position: 'absolute', inset: '20%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', inset: '40%', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(90deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%)' }}></div>
      <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(0deg, transparent 49%, rgba(255,255,255,0.1) 50%, transparent 51%)' }}></div>
      
      {/* Sweep */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', inset: '0',
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(59, 130, 246, 0.2) 60deg, transparent 60deg)',
          borderRadius: '50%'
        }}
      />
      
      {/* Label */}
      <div style={{ position: 'absolute', bottom: '5px', left: '0', width: '100%', textAlign: 'center', fontSize: '9px', fontFamily: "'JetBrains Mono'", color: '#555' }}>
        SCANNING_NET
      </div>
    </div>
  );
};

export default RadarScan;
