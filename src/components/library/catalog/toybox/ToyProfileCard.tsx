import React from 'react';
import './ToyProfileCard.css';

const ToyProfileCard: React.FC = () => {
  return (
    <div className="toy-card-profile">
      <div className="toy-cp-bg"></div>
      <div className="toy-cp-avatar"></div>
      <div className="toy-cp-body">
        <div className="toy-cp-name">Alex Designer</div>
        <div className="toy-cp-role">@UI_CREATOR</div>
      </div>
    </div>
  );
};

export default ToyProfileCard;
