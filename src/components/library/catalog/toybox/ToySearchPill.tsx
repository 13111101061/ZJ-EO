import React from 'react';
import './ToySearchPill.css';

const ToySearchPill: React.FC = () => {
  return (
    <div className="toy-search-pill">
      <input type="text" placeholder="Search..." />
      <button>🔍</button>
    </div>
  );
};

export default ToySearchPill;
