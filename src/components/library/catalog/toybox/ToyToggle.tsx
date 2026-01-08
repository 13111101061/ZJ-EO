import React, { useState } from 'react';
import './ToyToggle.css';

const ToyToggle: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`toy-toggle ${active ? 'toy-toggle-active' : ''}`}
      onClick={() => setActive(!active)}
    ></div>
  );
};

export default ToyToggle;
