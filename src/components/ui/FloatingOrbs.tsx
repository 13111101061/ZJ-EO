import React from 'react';
import { motion } from 'framer-motion';

const FloatingOrbs: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0], 
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%)',
          borderRadius: '50%', filter: 'blur(60px)'
        }}
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 40, 0], 
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 0.9, 1] 
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', bottom: '20%', right: '10%', width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent 70%)',
          borderRadius: '50%', filter: 'blur(80px)'
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
