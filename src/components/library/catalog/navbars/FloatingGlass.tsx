import React from 'react';

const FloatingGlass: React.FC = () => {
    return (
        <div style={{
            width: '100%', 
            maxWidth: '600px',
            height: '60px', 
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '50px',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            padding: '0 20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px -5px rgba(0,0,0,0.3)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                    width: '30px', 
                    height: '30px', 
                    background: '#fff', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontSize: '16px'
                }}>
                    <i className="ri-command-fill"></i>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff', letterSpacing: '1px' }}>NEXUS</span>
            </div>
            
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
                <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
                <div style={{ width: '40px', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }}></div>
            </div>

            <button style={{ 
                fontSize: '10px', 
                border: '1px solid rgba(255,255,255,0.2)', 
                background: 'transparent',
                padding: '6px 16px', 
                borderRadius: '20px', 
                color: '#fff',
                cursor: 'pointer',
                transition: '0.3s'
            }}>
                CONNECT
            </button>
        </div>
    );
};

export default FloatingGlass;
