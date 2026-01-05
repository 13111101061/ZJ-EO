import React from 'react';
import './MinimalLuxury.css';

/**
 * MinimalLuxury - 极简奢华导航栏
 * 特点：磨砂玻璃效果、衬线体Logo、大间距、优雅的下划线动画
 * 适用场景：高端品牌、奢侈品、艺术画廊
 */
export const MinimalLuxury: React.FC = () => {
  return (
    <nav className="minimal-luxury-navbar">
      <a href="#" className="minimal-logo">Lume & Co.</a>

      <ul className="minimal-nav-links">
        <li><a href="#">Collection</a></li>
        <li><a href="#">Atelier</a></li>
        <li><a href="#">Journal</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <a href="#" className="minimal-btn">SIGN IN</a>
    </nav>
  );
};

export default MinimalLuxury;
