import React, { useState } from 'react';
import './InteractiveGrid.css';

/**
 * InteractiveGrid - 交互式网格下拉菜单
 * 特点：卡片网格、图标展示、悬浮效果
 * 适用场景：SaaS产品、应用市场、工具导航
 */
export const InteractiveGrid: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const apps = [
    { icon: 'ri-home-5-line', name: 'Dashboard', desc: 'Overview & Stats' },
    { icon: 'ri-image-line', name: 'Gallery', desc: 'Media Library' },
    { icon: 'ri-settings-3-line', name: 'Settings', desc: 'Preferences' },
    { icon: 'ri-user-line', name: 'Profile', desc: 'Account Info' },
    { icon: 'ri-notification-3-line', name: 'Notifications', desc: 'Alerts' },
    { icon: 'ri-calendar-line', name: 'Calendar', desc: 'Schedule' }
  ];

  return (
    <div className="interactive-grid-container">
      <button
        className="interactive-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ri-apps-2-line"></i>
        <span>Apps</span>
        <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line`}></i>
      </button>

      {isOpen && (
        <div className="interactive-dropdown">
          <div className="interactive-grid">
            {apps.map((app, index) => (
              <a key={index} href="#" className="interactive-card">
                <div className="card-icon">
                  <i className={app.icon}></i>
                </div>
                <div className="card-content">
                  <div className="card-name">{app.name}</div>
                  <div className="card-desc">{app.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveGrid;
