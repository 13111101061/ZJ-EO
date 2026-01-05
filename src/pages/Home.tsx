import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SystemMap from '../components/sections/SystemMap';
import VisionSection from '../components/sections/VisionSection';
import FloatingOrbs from '../components/ui/FloatingOrbs';
import StatusBadge from '../components/ui/StatusBadge';

const Home: React.FC = () => {
  return (
    <>
      <div className="grid-lines"></div>
      
      {/* NEW: Background & UI Elements */}
      <FloatingOrbs />
      <StatusBadge />

      {/* Hero Section (From 22) */}
      <HeroSection />

      {/* NEW: Vision Manifesto */}
      <VisionSection />

      {/* NEW: System Map (The Gateway) */}
      <SystemMap />

      {/* Features Grid (From 22) */}
      <FeaturesSection />
    </>
  );
};

export default Home;
