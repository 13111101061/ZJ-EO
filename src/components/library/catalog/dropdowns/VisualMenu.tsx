import React, { useState } from 'react';
import './VisualMenu.css';

/**
 * VisualMenu - 视觉化菜单下拉组件
 * 特点：图片预览、网格布局、悬浮动画
 * 适用场景：电商网站、作品集展示、产品目录
 */
export const VisualMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="visual-menu-container">
      <button
        className="visual-menu-trigger"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <span>Explore</span>
        <i className="ri-arrow-down-s-line"></i>
      </button>

      {isOpen && (
        <div
          className="visual-dropdown"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="visual-grid">
            <div className="visual-column">
              <h4>Categories</h4>
              <a href="#" className="visual-link">
                Digital Art <span>→</span>
              </a>
              <a href="#" className="visual-link">
                Photography <span>→</span>
              </a>
              <a href="#" className="visual-link">
                3D Renders <span>→</span>
              </a>
              <a href="#" className="visual-link">
                Illustrations <span>→</span>
              </a>
            </div>

            <div className="visual-column-visual">
              <div className="visual-card">
                <div
                  className="visual-image"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=600)'
                  }}
                >
                  <div className="visual-overlay">
                    <span>Featured</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="visual-column">
              <h4>Trending</h4>
              <a href="#" className="visual-link-compact">
                Cyberpunk Collection
              </a>
              <a href="#" className="visual-link-compact">
                Minimal Landscapes
              </a>
              <a href="#" className="visual-link-compact">
                Portrait Photography
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualMenu;
