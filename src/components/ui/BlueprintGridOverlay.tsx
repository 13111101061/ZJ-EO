import React from 'react';
import { motion } from 'framer-motion';

const BlueprintGridOverlay: React.FC = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
      {/* Animated Scan Line */}
      <motion.div
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute', left: 0, width: '100%', height: '2px',
          background: 'rgba(59, 130, 246, 0.5)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)'
        }}
      />
      {/* Random Highlight Cells */}
      <div style={{ 
          position: 'absolute', top: '20%', left: '30%', width: '100px', height: '100px', 
          background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' 
      }}></div>
       <div style={{ 
          position: 'absolute', bottom: '10%', right: '20%', width: '150px', height: '50px', 
          background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' 
      }}></div>
    </div>
  );
};

export default BlueprintGridOverlay;
