import React from 'react';
import './GreenSpecCard.css';

export const GreenSpecCard: React.FC = () => {
  return (
    <div className="lib-green-card" data-testid="green-spec-card">
      <div className="lib-gc-grid">
        
        {/* Left Column */}
        <div className="lib-gc-col-left">
          {/* Top Left Header - Trapezoidal Shape */}
          <div className="lib-gc-header-wrap">
            <div className="lib-gc-header-body">
              <h2 className="lib-gc-header-text">今日话题</h2>
            </div>
            <div className="lib-gc-header-slant" />
          </div>
          
          {/* Rewards Panel */}
          <div className="lib-gc-panel lib-gc-rewards">
            <div className="lib-gc-panel-header">
              <span className="lib-gc-tag-dark">福利群</span>
              <span className="lib-gc-title">兑换呱呱奖励</span>
            </div>
            <div className="lib-gc-reward-list">
              <div className="lib-gc-reward-item">
                <div className="lib-gc-reward-img lib-gc-reward-img-1">
                  <div className="lib-gc-img-tag">SELF SERVICE</div>
                </div>
                <div className="lib-gc-point-tag">2100积分</div>
              </div>
              <div className="lib-gc-reward-item">
                <div className="lib-gc-reward-img lib-gc-reward-img-2" />
                <div className="lib-gc-point-tag">13450积分</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Wrapper */}
        <div className="lib-gc-col-right">
          
          {/* Top Right: Popular Bloggers */}
          <div className="lib-gc-panel lib-gc-bloggers">
            <div className="lib-gc-panel-header-row">
              <span className="lib-gc-title">热门博主</span>
              <button className="lib-gc-btn-more" type="button">
                查看更多
                <span className="lib-gc-btn-arrow" aria-hidden="true">
                  ›
                </span>
              </button>
            </div>
            <div className="lib-gc-avatar-list">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className={`lib-gc-avatar lib-gc-avatar-${i}`} />
              ))}
              <div className="lib-gc-avatar-more">50+</div>
            </div>
          </div>

          {/* Bottom Right: Growth Plan */}
          <div className="lib-gc-panel lib-gc-growth">
            <div className="lib-gc-panel-header-row">
              <span className="lib-gc-title">成长计划</span>
              <button className="lib-gc-btn-more" type="button">
                查看更多
                <span className="lib-gc-btn-arrow" aria-hidden="true">
                  ›
                </span>
              </button>
            </div>
            <div className="lib-gc-topic-list">
              <div className="lib-gc-topic-item">
                <div className="lib-gc-topic-title">
                  <span className="lib-gc-topic-icon">#</span>
                  「瓷片区 UI 设计」
                  <span className="lib-gc-fire">🔥</span>
                </div>
                <p className="lib-gc-topic-desc">
                  瓷片区是一种高效、灵活的布局方式，可以根据具体需求进行定制和调整。
                </p>
              </div>
              <div className="lib-gc-topic-item">
                <div className="lib-gc-topic-title">
                  <span className="lib-gc-topic-icon">#</span>
                  「ios情绪图标绘制」
                  <span className="lib-gc-fire">🔥</span>
                </div>
                <p className="lib-gc-topic-desc">
                  整体配色较柔和、舒适、自然、潮流，以下列举了不同状态下对应情绪的配色。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GreenSpecCard;
