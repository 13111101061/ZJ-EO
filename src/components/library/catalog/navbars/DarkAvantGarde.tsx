import React from 'react';
import './Navbars.css';

const DarkAvantGardeNavbar: React.FC = () => {
    return (
        <nav className="nav-avant">
            <div className="avant-left">
                <div className="avant-logo">NOIR<span>©</span></div>
                
                <div className="avant-menu">
                    <a href="#" className="avant-item">
                        <span className="avant-title">Collections</span>
                        <span className="avant-sub">Autumn / Winter 25</span>
                    </a>
                    <a href="#" className="avant-item">
                        <span className="avant-title">Exhibitions</span>
                        <span className="avant-sub">Tokyo & Paris</span>
                    </a>
                    <a href="#" className="avant-item">
                        <span className="avant-title">Maison</span>
                        <span className="avant-sub">Heritage & Craft</span>
                    </a>
                </div>
            </div>

            <div className="avant-right">
                <div className="avant-search-box">
                    <i className="ri-search-2-line" style={{color:'#666'}}></i>
                    <input type="text" placeholder="Type to find..." />
                </div>
                <div className="avant-btn"><i className="ri-heart-line"></i></div>
                <div className="avant-btn avant-btn-primary">My Cart (0)</div>
            </div>
        </nav>
    );
};

export default DarkAvantGardeNavbar;
