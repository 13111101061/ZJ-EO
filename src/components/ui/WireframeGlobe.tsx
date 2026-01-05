import React from 'react';
import { motion } from 'framer-motion';

const WireframeGlobe: React.FC = () => {
  return (
    <div style={{ position: 'absolute', top: '150px', right: '5%', opacity: 0.2, pointerEvents: 'none' }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          width: '300px', height: '300px',
          borderRadius: '50%',
          border: '1px solid #fff',
          background: 'radial-gradient(circle, transparent 60%, rgba(255,255,255,0.1) 100%)',
          position: 'relative'
        }}
      >
        <div style={{ position: 'absolute', inset: '10%', border: '1px dashed rgba(255,255,255,0.3)', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
        <div style={{ position: 'absolute', left: '50%', top: 0, height: '100%', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
      </motion.div>
    </div>
  );
};

export default WireframeGlobe;
