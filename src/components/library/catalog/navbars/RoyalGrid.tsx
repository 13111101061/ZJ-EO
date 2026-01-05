import React from 'react';
import './Navbars.css';

const RoyalGridNavbar: React.FC = () => {
    return (
        <nav className="nav-royal-wrapper">
            {/* 顶栏 */}
            <div className="royal-top-bar">
                <div>CN / EN / JP</div>
                <div className="royal-socials">
                    <i className="ri-instagram-line"></i>
                    <i className="ri-twitter-x-line"></i>
                    <i className="ri-wechat-line"></i>
                </div>
            </div>
            {/* 主栏 */}
            <div className="royal-main-bar">
                <div className="royal-menu-left">
                    <a href="#" className="royal-item">高级定制</a>
                    <a href="#" className="royal-item">成衣系列</a>
                    <a href="#" className="royal-item">珠宝腕表</a>
                </div>
                
                <a href="#" className="royal-logo">VOGUE<span style={{fontWeight:100, fontSize:'20px'}}>ART</span></a>
                
                <div className="royal-tools">
                    <div className="royal-search">
                        <input type="text" placeholder="SEARCH..." />
                        <i className="ri-search-line"></i>
                    </div>
                    <i className="ri-shopping-bag-line" style={{color:'#fff', fontSize:'20px'}}></i>
                </div>
            </div>
        </nav>
    );
};

export default RoyalGridNavbar;
