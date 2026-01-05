import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="fusion-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>NEXUS_V2</h2>
          <p>
            The ultimate intersection of engineering precision and artistic chaos. 
            Designed for the next generation of creative technologists.
          </p>
        </div>

        <div className="footer-col">
          <h4>Platform</h4>
          <ul>
            <li><a href="#">Neural_Engine</a></li>
            <li><a href="#">Zero_Latency</a></li>
            <li><a href="#">Quantum_Sync</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Manifesto</a></li>
            <li><a href="#">Blueprints</a></li>
            <li><a href="#">API_Reference</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Network</h4>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Discord</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2025 NEXUS LABS. ALL RIGHTS RESERVED.</div>
        <div>STATUS: ONLINE // LATENCY: 12ms</div>
      </div>
    </footer>
  );
};

export default Footer;
