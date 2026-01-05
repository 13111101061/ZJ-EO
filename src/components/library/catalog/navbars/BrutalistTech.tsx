import React from 'react';
import './BrutalistTech.css';

/**
 * BrutalistTech - 新野兽派科技导航栏
 * 特点：荧光绿配色、粗边框、跑马灯、超大字体、强对比度
 * 适用场景：先锋设计展、潮牌、独立艺术家网站
 */
export const BrutalistTech: React.FC = () => {
  return (
    <div className="brutalist-tech-container">
      {/* 顶部跑马灯 */}
      <div className="brutalist-ticker-wrap">
        <div className="brutalist-ticker-move">
          <span className="brutalist-ticker-item">NEW COLLECTION DROPS FRIDAY</span>
          <span className="brutalist-ticker-item">//</span>
          <span className="brutalist-ticker-item">FREE SHIPPING WORLDWIDE</span>
          <span className="brutalist-ticker-item">//</span>
          <span className="brutalist-ticker-item">LIMITED EDITION RELEASE</span>
          <span className="brutalist-ticker-item">//</span>
        </div>
      </div>

      {/* 导航栏主体 */}
      <nav className="brutalist-navbar">
        <a href="#" className="brutalist-brand">
          XY/Z<span>.STUDIO</span>
        </a>

        <ul className="brutalist-nav-menu">
          <li className="brutalist-nav-item">
            <a href="#">COLLECTIONS</a>
            <div className="brutalist-dropdown">
              <div className="brutalist-dd-col">
                <h3>// CATEGORIES</h3>
                <a href="#" className="brutalist-dd-link">DIGITAL <span>(42)</span></a>
                <a href="#" className="brutalist-dd-link">SCULPTURE <span>(18)</span></a>
                <a href="#" className="brutalist-dd-link">CANVAS <span>(105)</span></a>
                <a href="#" className="brutalist-dd-link">NFTs <span>(Live)</span></a>
              </div>
              <div className="brutalist-dd-col">
                <h3>// FEATURED</h3>
                <div className="brutalist-featured">
                  <h2>THE VOID</h2>
                  <p>An immersive experience into the digital unknown.</p>
                </div>
              </div>
              <div className="brutalist-dd-col">
                <h3>// ARTIST</h3>
                <div className="brutalist-artist">KAWS</div>
              </div>
            </div>
          </li>
          <li className="brutalist-nav-item"><a href="#">EDITORIAL</a></li>
          <li className="brutalist-nav-item"><a href="#">SHOP</a></li>
        </ul>

        <div className="brutalist-tools">
          <button className="brutalist-search-btn">
            <i className="ri-search-line"></i>
          </button>
          <button className="brutalist-cart-btn">
            CART (0)
          </button>
        </div>
      </nav>
    </div>
  );
};

export default BrutalistTech;
