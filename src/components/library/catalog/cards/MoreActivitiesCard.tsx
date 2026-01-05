import React from 'react';
import './MoreActivitiesCard.css';

type ActivityCardTone = 'mint' | 'lemon' | 'cyan' | 'red';

type ActivityCardItem = {
  id: string;
  tone: ActivityCardTone;
  label: string;
  title: string;
  subtitle: string;
};

const items: ActivityCardItem[] = [
  {
    id: 'checkin',
    tone: 'mint',
    label: '累计签到有大礼',
    title: '每日签到',
    subtitle: '签到兑换奖品'
  },
  {
    id: 'game',
    tone: 'lemon',
    label: '品牌联盟8.5折',
    title: '游戏必备',
    subtitle: '游戏达人的福音'
  },
  {
    id: 'post',
    tone: 'cyan',
    label: '10倍积分返现',
    title: '晒单专区',
    subtitle: '参与评论兑积分'
  },
  {
    id: 'gift',
    tone: 'red',
    label: '累计积分兑换',
    title: '奖品礼物',
    subtitle: '积分可兑换奖品'
  }
];

export const MoreActivitiesCard: React.FC = () => {
  return (
    <section className="lib-maa-shell" data-testid="more-activities-card" aria-label="更多活动">
      <div className="lib-maa-surface">
        <header className="lib-maa-header">
          <div className="lib-maa-title-wrap" aria-hidden="true">
            <div className="lib-maa-title-panel">
              <div className="lib-maa-title">更多活动</div>
            </div>
            <div className="lib-maa-title-notch" />
          </div>

          <div className="lib-maa-badge" role="note" aria-label="新用户立省88元">
            <div className="lib-maa-badge-text">
              <div className="lib-maa-badge-line">新用户</div>
              <div className="lib-maa-badge-line">立省</div>
              <div className="lib-maa-badge-amount">88元</div>
            </div>
            <div className="lib-maa-badge-shadow" aria-hidden="true" />
          </div>
        </header>

        <div className="lib-maa-grid" role="list">
          {items.map((item) => (
            <article key={item.id} className="lib-maa-tile" data-tone={item.tone} role="listitem">
              <div className="lib-maa-tile-label" aria-hidden="true">
                {item.label}
              </div>

              <div className="lib-maa-tile-body">
                <div className="lib-maa-tile-copy">
                  <div className="lib-maa-tile-title">{item.title}</div>
                  <div className="lib-maa-tile-subtitle">{item.subtitle}</div>
                </div>

                <div className="lib-maa-tile-visual" aria-hidden="true">
                  <div className={`lib-maa-ico lib-maa-ico-${item.id}`} />
                </div>
              </div>

              <button className="lib-maa-arrow" type="button" aria-label={`${item.title} 入口`}>
                <span aria-hidden="true">→</span>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreActivitiesCard;

