import React from 'react';
import './FoodFruitDrawCard.css';

type Tag = {
  id: string;
  text: string;
};

const tags: Tag[] = [
  { id: 't1', text: '尾号987：获得葡萄一份' },
  { id: 't2', text: '尾号987：草莓' },
  { id: 't3', text: '尾号987：榴莲一份' },
  { id: 't4', text: '尾号987：草莓一份' }
];

export const FoodFruitDrawCard: React.FC = () => {
  return (
    <section className="lib-ffd-shell" data-testid="food-fruit-draw-card" aria-label="美食专区 水果免费抽奖">
      <div className="lib-ffd-surface">
        <header className="lib-ffd-top">
          <div className="lib-ffd-title-wrap" aria-hidden="true">
            <div className="lib-ffd-title-panel">
              <div className="lib-ffd-title">美食专区</div>
            </div>
            <div className="lib-ffd-title-notch" />
          </div>

          <div className="lib-ffd-tags" aria-label="实时中奖播报">
            {tags.map((t) => (
              <div key={t.id} className="lib-ffd-tag">
                {t.text}
              </div>
            ))}
          </div>
        </header>

        <div className="lib-ffd-machine" role="group" aria-label="抽奖机">
          <div className="lib-ffd-machine-frame" aria-hidden="true" />

          <div className="lib-ffd-headline" aria-hidden="true">
            <span className="lib-ffd-headline-stroke">水果免费抽奖</span>
            <span className="lib-ffd-headline-fill">水果免费抽奖</span>
          </div>

          <div className="lib-ffd-screen" role="img" aria-label="水果屏幕">
            <div className="lib-ffd-waves" aria-hidden="true" />
            <div className="lib-ffd-fruits" aria-hidden="true">
              <div className="lib-ffd-fruit f1" />
              <div className="lib-ffd-fruit f2" />
              <div className="lib-ffd-fruit f3" />
              <div className="lib-ffd-fruit f4" />
              <div className="lib-ffd-fruit f5" />
              <div className="lib-ffd-fruit f6" />
              <div className="lib-ffd-fruit f7" />
            </div>
          </div>

          <div className="lib-ffd-joystick left" aria-hidden="true">
            <div className="lib-ffd-joy-base" />
            <div className="lib-ffd-joy-stick" />
            <div className="lib-ffd-joy-ball" />
          </div>

          <div className="lib-ffd-joystick right" aria-hidden="true">
            <div className="lib-ffd-joy-base" />
            <div className="lib-ffd-joy-stick" />
            <div className="lib-ffd-joy-ball" />
          </div>

          <button className="lib-ffd-cta" type="button">
            立即抽奖
          </button>
        </div>

        <footer className="lib-ffd-footer" aria-label="活动说明">
          <div className="lib-ffd-hash"># 0元购，享受惊喜盛宴</div>
          <div className="lib-ffd-hash"># 海岸线上的美味演绎，尽享美妙时刻</div>
        </footer>
      </div>
    </section>
  );
};

export default FoodFruitDrawCard;

