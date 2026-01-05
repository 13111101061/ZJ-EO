import React from 'react';
import './ArtisticNode.css';

interface ArtisticNodeProps {
  title?: string;
  category?: string;
  color?: 'purple' | 'blue' | 'green' | 'orange' | 'pink';
}

/**
 * ArtisticNode - 艺术风格工作流节点
 * 特点：渐变边框、悬浮效果、视觉冲击力强
 * 适用场景：创意工具、设计系统、视觉编辑器
 */
export const ArtisticNode: React.FC<ArtisticNodeProps> = ({
  title = 'Image Process',
  category = 'AI Filter',
  color = 'purple'
}) => {
  const colorMap = {
    purple: 'from-purple-500 to-pink-500',
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    orange: 'from-orange-500 to-yellow-500',
    pink: 'from-pink-500 to-rose-500'
  };

  return (
    <div className={`artistic-node artistic-node-${color}`}>
      {/* 渐变边框效果 */}
      <div className={`artistic-glow ${colorMap[color]}`}></div>

      {/* 内容 */}
      <div className="artistic-content">
        <div className="artistic-badge">{category}</div>
        <div className="artistic-title">{title}</div>

        <div className="artistic-actions">
          <button className="artistic-btn">
            <i className="ri-play-fill"></i>
          </button>
          <button className="artistic-btn">
            <i className="ri-settings-3-line"></i>
          </button>
          <button className="artistic-btn">
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </div>

      {/* 连接点 */}
      <div className="artistic-port artistic-port-in"></div>
      <div className="artistic-port artistic-port-out"></div>
    </div>
  );
};

export default ArtisticNode;
