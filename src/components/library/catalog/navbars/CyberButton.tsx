import React from 'react';
import './CyberButton.css';

interface CyberButtonProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CyberButton: React.FC<CyberButtonProps> = ({ 
  children, 
  className = "", 
  style 
}) => {
  return (
    <div className={`lib-nav-cyberbutton ${className}`} style={style}>
      {children || (
        <div style={{
          width: '100%',
          minHeight: '200px',
          background: 'rgba(255,255,255,0.02)',
          border: '1px dashed rgba(255,255,255,0.1)',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          padding: '20px'
        }}>
          <div style={{ 
            width: '40px', 
            height: '40px', 
            background: '#222', 
            borderRadius: '8px' 
          }}></div>
          <div style={{ 
            fontFamily: 'JetBrains Mono', 
            fontSize: '12px', 
            color: '#444' 
          }}>
            CYBERBUTTON_COMPONENT
          </div>
          <div style={{ 
            width: '60%', 
            height: '4px', 
            background: '#222', 
            borderRadius: '2px' 
          }}></div>
          <div style={{ 
            width: '40%', 
            height: '4px', 
            background: '#222', 
            borderRadius: '2px' 
          }}></div>
        </div>
      )}
    </div>
  );
};

export default CyberButton;
