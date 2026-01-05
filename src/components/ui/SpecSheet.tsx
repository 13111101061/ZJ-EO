import React from 'react';

const SpecSheet: React.FC = () => {
  return (
    <div style={{
      position: 'absolute', top: '100px', left: '20px', width: '180px',
      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)',
      padding: '10px', fontFamily: "'JetBrains Mono'", color: '#888', fontSize: '9px',
      zIndex: 5
    }}>
      <div style={{ borderBottom: '1px solid #444', marginBottom: '8px', paddingBottom: '4px', fontWeight: 700, color: '#fff' }}>
        SPEC_SHEET_A4
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span>WIDTH:</span> <span>1024px</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span>HEIGHT:</span> <span>VAR</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span>DPI:</span> <span>300</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
        <span>MODE:</span> <span>CMYK</span>
      </div>
      <div style={{ marginTop: '10px', height: '30px', background: 'repeating-linear-gradient(45deg, #222, #222 5px, #333 5px, #333 10px)' }}></div>
    </div>
  );
};

export default SpecSheet;
