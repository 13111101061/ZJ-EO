import React, { useState, useEffect } from 'react';

const TerminalBlock: React.FC = () => {
  const [lines, setLines] = useState<string[]>(["> INITIALIZING..."]);

  useEffect(() => {
    const sequence = [
      "> LOADING_MODULES [OK]",
      "> CHECKING_INTEGRITY [OK]",
      "> ESTABLISHING_UPLINK...",
      "> CONNECTED: 192.168.X.X",
      "> READY_FOR_INPUT"
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < sequence.length) {
        setLines(prev => [...prev, sequence[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'absolute', top: '150px', right: '50px', width: '250px',
      background: 'rgba(0,0,0,0.8)', border: '1px solid #333', borderRadius: '4px',
      padding: '15px', fontFamily: "'JetBrains Mono'", fontSize: '11px', color: '#0f0',
      zIndex: 10, backdropFilter: 'blur(5px)'
    }}>
      <div style={{ borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px', color: '#666', fontSize: '9px' }}>
        TERM_01 // ROOT
      </div>
      {lines.map((l, i) => (
        <div key={i} style={{ marginBottom: '4px' }}>{l}</div>
      ))}
      <div style={{ animation: 'blink 1s infinite' }}>_</div>
      <style>{`@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    </div>
  );
};

export default TerminalBlock;
