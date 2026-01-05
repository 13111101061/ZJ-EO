import React from 'react';
import './Navbars.css';

const FloatingIslandNavbar: React.FC = () => {
    return (
        <div className="nav-island-container">
            <nav className="nav-island">
                {/* 左侧 Logo 区域 */}
                <div style={{display:'flex', alignItems:'center', gap:'15px'}}>
                    <div className="island-logo">A.</div>
                    <span style={{color:'#fff', fontWeight:600, letterSpacing:'1px'}}>ARK.LAB</span>
                </div>

                {/* 中间胶囊菜单 */}
                <div className="island-links">
                    <a href="#" className="island-link active"><i className="ri-home-5-line"></i> Home</a>
                    <a href="#" className="island-link"><i className="ri-compass-3-line"></i> Explore</a>
                    <a href="#" className="island-link"><i className="ri-image-line"></i> Gallery</a>
                    <a href="#" className="island-link"><i className="ri-vip-diamond-line"></i> NFT</a>
                </div>

                {/* 右侧用户区 */}
                <div className="island-profile">
                    <i className="ri-notification-3-line" style={{color:'#fff', fontSize:'20px'}}></i>
                    <div className="island-avatar"></div>
                </div>
            </nav>
        </div>
    );
};

export default FloatingIslandNavbar;
