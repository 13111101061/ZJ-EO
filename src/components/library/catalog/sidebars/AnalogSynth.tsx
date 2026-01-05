import React, { useState } from 'react';
import './AnalogSynth.css';

/**
 * AnalogSynth - 复古合成器侧边栏
 * 特点：实体旋钮、纸张纹理、衬线体、温暖色调
 * 适用场景：音频工具、复古风格应用、艺术创作工具
 */
export const AnalogSynth: React.FC = () => {
  const [highRes, setHighRes] = useState(true);
  const [restoreFaces, setRestoreFaces] = useState(false);

  return (
    <div className="analog-sidebar">
      <div className="analog-content">
        <div className="analog-header">
          Atelier.
          <span className="analog-badge">No.042</span>
        </div>

        <textarea
          className="analog-input"
          placeholder="Type your prompt here..."
        ></textarea>

        <div className="knob-row">
          <div className="knob-wrapper">
            <div className="knob" style={{ transform: 'rotate(-45deg)' }}></div>
            <span className="knob-label">CFG Scale</span>
          </div>
          <div className="knob-wrapper">
            <div className="knob" style={{ transform: 'rotate(20deg)' }}></div>
            <span className="knob-label">Steps</span>
          </div>
          <div className="knob-wrapper">
            <div className="knob" style={{ transform: 'rotate(-90deg)' }}></div>
            <span className="knob-label">Seed</span>
          </div>
        </div>

        <div className="switch-row">
          <span className="switch-label">High Res Fix</span>
          <div
            className={`toggle-switch ${highRes ? 'active' : ''}`}
            onClick={() => setHighRes(!highRes)}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>

        <div className="switch-row">
          <span className="switch-label">Restore Faces</span>
          <div
            className={`toggle-switch ${restoreFaces ? 'active' : ''}`}
            onClick={() => setRestoreFaces(!restoreFaces)}
          >
            <div className="toggle-thumb"></div>
          </div>
        </div>

        <button className="analog-btn">PRINT_TO_CANVAS</button>
      </div>
    </div>
  );
};

export default AnalogSynth;
