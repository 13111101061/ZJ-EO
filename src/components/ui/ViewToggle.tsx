import React, { useState } from 'react';

const ViewToggle: React.FC = () => {
  const [mode, setMode] = useState<'grid' | 'list'>('grid');

  return (
    <div style={{
      position: 'fixed', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
      background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)', borderRadius: '100px',
      padding: '5px', display: 'flex', gap: '5px', zIndex: 100
    }}>
      <button 
        onClick={() => setMode('grid')}
        style={{
          background: mode === 'grid' ? '#fff' : 'transparent',
          color: mode === 'grid' ? '#000' : '#888',
          border: 'none', borderRadius: '20px', padding: '8px 16px',
          fontFamily: "'JetBrains Mono'", fontSize: '10px', cursor: 'pointer', transition: '0.3s'
        }}
      >
        GRID_VIEW
      </button>
      <button 
        onClick={() => setMode('list')}
        style={{
          background: mode === 'list' ? '#fff' : 'transparent',
          color: mode === 'list' ? '#000' : '#888',
          border: 'none', borderRadius: '20px', padding: '8px 16px',
          fontFamily: "'JetBrains Mono'", fontSize: '10px', cursor: 'pointer', transition: '0.3s'
        }}
      >
        LIST_VIEW
      </button>
    </div>
  );
};

export default ViewToggle;
