import React from 'react';
import './LinearNode.css';

interface LinearNodeProps {
  title?: string;
  description?: string;
  icon?: string;
  status?: 'idle' | 'active' | 'success' | 'error';
}

/**
 * LinearNode - Linear风格工作流节点
 * 特点：磨砂玻璃、极简设计、状态指示、流畅动画
 * 适用场景：工作流编辑器、自动化工具、节点编辑器
 */
export const LinearNode: React.FC<LinearNodeProps> = ({
  title = 'Generate Image',
  description = 'Stable Diffusion XL',
  icon = 'ri-image-2-line',
  status = 'idle'
}) => {
  return (
    <div className={`linear-node linear-node-${status}`}>
      {/* 状态指示器 */}
      <div className="linear-status-indicator"></div>

      {/* 头部 */}
      <div className="linear-header">
        <div className="linear-icon">
          <i className={icon}></i>
        </div>
        <div className="linear-title-group">
          <div className="linear-title">{title}</div>
          <div className="linear-subtitle">{description}</div>
        </div>
      </div>

      {/* 参数区域 */}
      <div className="linear-params">
        <div className="linear-param">
          <span className="param-label">Model</span>
          <span className="param-value">SDXL 1.0</span>
        </div>
        <div className="linear-param">
          <span className="param-label">Steps</span>
          <span className="param-value">30</span>
        </div>
        <div className="linear-param">
          <span className="param-label">CFG</span>
          <span className="param-value">7.5</span>
        </div>
      </div>

      {/* 连接点 */}
      <div className="linear-connector linear-connector-input"></div>
      <div className="linear-connector linear-connector-output"></div>
    </div>
  );
};

export default LinearNode;
