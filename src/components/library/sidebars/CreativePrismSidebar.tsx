import React, { useState } from 'react';
import './CreativePrismSidebar.css';

/**
 * CreativePrismSidebar - Holographic light prism AI generation panel
 * Features: Rotating gradient background, glowing inputs, crystal aesthetics
 */
export const CreativePrismSidebar: React.FC = () => {
  const [activeTag, setActiveTag] = useState('Cyberpunk');
  const [sliderValue] = useState(60);

  const tags = ['Cyberpunk', 'Fantasy', 'Minimal', 'Abstract', 'Portrait', 'Landscape'];

  return (
    <div className="sidebar-mock style-prism">
      <div className="prism-bg"></div>
      <div className="prism-content">
        <div className="prism-header">
          <i className="ri-sparkling-fill"></i>
          AI STUDIO
        </div>

        <textarea
          className="prism-input"
          placeholder="Describe your vision..."
        ></textarea>

        <div>
          <div className="prism-label">STYLE PRESET</div>
          <div className="prism-tags">
            {tags.map(tag => (
              <span
                key={tag}
                className={`prism-tag ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="prism-slider-group">
          <div className="prism-label">
            <span>CREATIVITY</span>
            <span>{sliderValue}%</span>
          </div>
          <div className="prism-track">
            <div className="prism-fill" style={{ width: `${sliderValue}%` }}></div>
            <div className="prism-thumb"></div>
          </div>
        </div>

        <button className="prism-generate-btn">
          <i className="ri-magic-line"></i>
          Generate Art
        </button>
      </div>
    </div>
  );
};

/**
 * BusinessClaySidebar - Soft clay bubble business sidebar
 * Features: Rounded cards, soft shadows, floating aesthetic
 */
export const BusinessClaySidebar: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState('Analytics');

  const cards = [
    { id: 'Analytics', icon: 'ri-bar-chart-box-line', label: 'Analytics' },
    { id: 'Reports', icon: 'ri-file-chart-line', label: 'Reports' },
    { id: 'Team', icon: 'ri-team-line', label: 'Team' },
    { id: 'Settings', icon: 'ri-settings-4-line', label: 'Settings' }
  ];

  return (
    <div className="sidebar-mock style-clay">
      <div className="clay-header">
        <div className="clay-title">Dashboard</div>
        <i className="ri-more-2-fill" style={{ color: '#64748b', cursor: 'pointer' }}></i>
      </div>

      <div className="clay-body">
        <div className="clay-input-box">
          <label className="clay-label">Quick Search</label>
          <input type="text" className="clay-textarea" placeholder="Search..." />
        </div>

        <div>
          <label className="clay-label">Navigation</label>
          <div className="clay-grid">
            {cards.map(card => (
              <div
                key={card.id}
                className={`clay-card ${selectedCard === card.id ? 'active' : ''}`}
                onClick={() => setSelectedCard(card.id)}
              >
                <i className={card.icon} style={{ fontSize: '24px' }}></i>
                <span style={{ fontSize: '12px', fontWeight: '500' }}>{card.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="clay-label">Progress</label>
          <div className="clay-slider-track">
            <div className="clay-slider-fill"></div>
            <div className="clay-slider-thumb"></div>
          </div>
        </div>
      </div>

      <div className="clay-btn">View Report</div>
    </div>
  );
};
