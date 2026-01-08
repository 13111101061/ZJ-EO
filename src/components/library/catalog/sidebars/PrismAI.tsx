import React, { useState } from 'react';
import './PrismAI.css';

/**
 * PrismAI - 光之棱镜侧边栏
 * 特点：全息弥散光、悬浮感、渐变动画、发光滑块
 * 适用场景：AI图像生成工具、创意应用
 */
export const PrismAI: React.FC = () => {
  const [intensity] = useState(80);
  const [creativity] = useState(40);
  const [activeTag, setActiveTag] = useState('Cyberpunk');

  const tags = ['Cyberpunk', 'Watercolor', '3D Render', 'Oil Painting', 'Sketch'];

  return (
    <div className="prism-sidebar">
      {/* 动态背景光 */}
      <div className="prism-bg"></div>

      <div className="prism-content">
        <div className="prism-header">
          <i className="ri-flashlight-fill"></i>
          LUMINA_AI
        </div>

        <textarea
          className="prism-input"
          placeholder="Dream something..."
        ></textarea>

        <div className="prism-tags">
          {tags.map((tag) => (
            <div
              key={tag}
              className={`prism-tag ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </div>
          ))}
          <div className="prism-tag">+ Add</div>
        </div>

        <div className="prism-slider-group">
          <div className="prism-label">
            <span>Intensity</span>
            <span>{intensity}%</span>
          </div>
          <div className="prism-track">
            <div className="prism-fill" style={{ width: `${intensity}%` }}>
              <div className="prism-thumb"></div>
            </div>
          </div>
        </div>

        <div className="prism-slider-group">
          <div className="prism-label">
            <span>Creativity</span>
            <span>{creativity}%</span>
          </div>
          <div className="prism-track">
            <div className="prism-fill" style={{ width: `${creativity}%` }}>
              <div className="prism-thumb"></div>
            </div>
          </div>
        </div>

        <button className="prism-btn">✨ MATERIALIZE</button>
      </div>
    </div>
  );
};

export default PrismAI;
