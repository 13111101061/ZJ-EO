import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FusionHome.css';
import AvantGardeShowcase from '../../components/sections/AvantGardeShowcase';
import KineticGallery from '../../components/sections/KineticGallery';

const FusionHome: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="fusion-container" ref={containerRef}>
      {/* BACKGROUND LAYERS */}
      <div className="pop-halftone absolute inset-0 z-0 opacity-20 pointer-events-none" />

      {/* HERO SECTION: The "Collision" */}
      <motion.section 
        className="hero-section relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-[#050505]"
        style={{ scale: heroScale, opacity: heroOpacity }}
      >
        {/* 1. NOISE OVERLAY */}
        <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }} 
        />

        {/* 2. PERSPECTIVE GRID */}
        <div className="absolute inset-0 z-0 perspective-grid opacity-20"
             style={{ 
               backgroundSize: '40px 40px',
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
               transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
               maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
             }}
        />

        {/* 3. FLUID AURORA BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.3, 1], x: [0, 100, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.5, 1], y: [0, -50, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute top-[20%] right-[0%] w-[60vw] h-[60vw] bg-gradient-to-r from-lime-500/10 via-emerald-500/10 to-teal-500/10 rounded-full blur-[100px] mix-blend-screen"
            />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          {/* SYSTEM STATUS PILLS */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex items-center gap-6 font-mono text-[10px] tracking-[0.2em] text-white/40"
          >
             <div className="flex items-center gap-2">
               <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
               SYSTEM_ONLINE
             </div>
             <div className="h-px w-8 bg-white/20" />
             <div>VR.2.0.24</div>
             <div className="h-px w-8 bg-white/20" />
             <div>LATENCY: 12ms</div>
          </motion.div>

          {/* MAIN TYPOGRAPHY - "THE VOID" STYLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glitch Shadow Layer */}
            <h1 className="absolute inset-0 text-[13vw] leading-[0.8] font-black tracking-tighter text-red-500/30 select-none blur-sm" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)', transform: 'translate(-4px, 2px)' }}>
              DIGITAL<br/>ALCHEMY
            </h1>
            <h1 className="absolute inset-0 text-[13vw] leading-[0.8] font-black tracking-tighter text-cyan-500/30 select-none blur-sm" style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)', transform: 'translate(4px, -2px)' }}>
              DIGITAL<br/>ALCHEMY
            </h1>

            {/* Main Text */}
            <h1 className="relative text-[13vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mix-blend-difference z-20 hover:tracking-normal transition-all duration-700">
              DIGITAL<br/>
              <span className="outline-text text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>ALCHEMY</span>
            </h1>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.div 
            className="flex flex-col items-center justify-center gap-6 mt-16 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed text-center font-sans mix-blend-plus-lighter">
              Crafting <span className="text-lime-400 font-normal italic">sensory interfaces</span> at the edge of<br/> 
              brutalism and pure mathematics.
            </p>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR - UPDATED */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="w-[1px] h-24 bg-gradient-to-b from-lime-400/0 via-lime-400 to-lime-400/0 animate-pulse" />
          <span className="text-[10px] font-mono tracking-[0.3em] text-lime-400/70 uppercase rotate-90 origin-left translate-y-8 translate-x-2">
            Scroll_Down
          </span>
        </motion.div>
      </motion.section>

      {/* MARQUEE SEPARATOR */}
      <div className="relative py-8 bg-black overflow-hidden border-y border-white/20 transform -skew-y-2 z-20">
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white opacity-80">
          DIGITAL CRAFTSMANSHIP /// PIXEL PERFECT /// ACID JAZZ /// MEMPHIS PATTERNS /// GLASSMORPHISM /// NEW CHINESE AESTHETICS /// DIGITAL CRAFTSMANSHIP /// PIXEL PERFECT /// ACID JAZZ /// MEMPHIS PATTERNS /// GLASSMORPHISM /// NEW CHINESE AESTHETICS ///
        </div>
      </div>

      {/* AVANT GARDE SHOWCASE (New Creative Section) */}
      <AvantGardeShowcase />

      {/* KINETIC GALLERY (New Competition Level Section) */}
      <KineticGallery />

      {/* PORTAL SECTION: The "Multiverse" */}
      <section className="relative z-10 py-32 px-4 md:px-20 bg-black/80 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <h3 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter mix-blend-difference">
                DIMENSIONS
              </h3>
              <div className="h-1 w-full bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400" />
            </div>
            <div className="hidden md:block text-right">
              <div className="text-2xl font-serif text-white/50 italic">
                Choose your reality
              </div>
              <div className="text-sm font-mono text-lime-400 mt-2">
                // NAVIGATE_SYSTEM
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. BLUEPRINT (Cyberpunk/Acid) */}
            <Link to="/blueprint" className="group">
              <motion.div 
                className="glass-card h-[400px] relative overflow-hidden border-lime-400/30"
                whileHover={{ scale: 1.02, rotate: 1 }}
              >
                <div className="absolute inset-0 bg-black/80" />
                <div className="absolute inset-0 blueprint-grid-bg opacity-30" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="text-lime-400 font-mono text-sm border border-lime-400 px-2 py-1 self-start">
                    SYS.ROOT
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-white mb-2 group-hover:text-lime-400 transition-colors">
                      BLUEPRINT
                    </h4>
                    <p className="text-gray-400 font-mono text-sm">
                      &gt; Technical Architecture<br/>
                      &gt; Cyberpunk Logic<br/>
                      &gt; H100 Clusters
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 2. GALLERY (Pop Art/Fauvism) */}
            <Link to="/gallery" className="group">
              <motion.div 
                className="glass-card h-[400px] relative overflow-hidden bg-white/10"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-yellow-500/20" />
                <div className="gallery-dot-bg absolute inset-0 opacity-20" />
                
                {/* Decorative Elements */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400 rounded-full blur-xl opacity-50 group-hover:scale-150 transition-transform" />
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="badge-pop self-start">
                    ART WORK
                  </div>
                  <div>
                    <h4 className="text-4xl font-black text-white mb-2 group-hover:text-pink-400 transition-colors" style={{ textShadow: '2px 2px 0 #000' }}>
                      GALLERY
                    </h4>
                    <p className="text-gray-300 font-sans">
                      Fauvism Colors<br/>
                      Pop Art Energy<br/>
                      Visual Impact
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 3. INTERFACE (Glass/New Chinese) */}
            <Link to="/interface" className="group">
              <motion.div 
                className="glass-card h-[400px] relative overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 0 }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/30" />
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  <div className="text-white font-serif italic text-xl opacity-70">
                    界面
                  </div>
                  <div>
                    <h4 className="text-4xl font-thin text-white mb-2 group-hover:text-cyan-300 transition-colors tracking-widest">
                      INTERFACE
                    </h4>
                    <p className="text-gray-400 font-serif italic">
                      Glassmorphism<br/>
                      Void Structure<br/>
                      Ethereal Flow
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* 4. LIBRARY (Tech Archive) */}
            <Link to="/library" className="group md:col-span-3">
              <motion.div 
                className="glass-card h-[200px] relative overflow-hidden border-purple-500/30"
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-9xl text-white pointer-events-none">
                  COMPONENTS
                </div>
                <div className="relative z-10 p-8 h-full flex items-center justify-between">
                  <div>
                    <h4 className="text-4xl font-black text-white group-hover:text-purple-400 transition-colors">
                      COMPONENT LIBRARY
                    </h4>
                    <p className="text-gray-400 font-mono mt-2">The Building Blocks of Chaos.</p>
                  </div>
                  <div className="w-16 h-16 border-2 border-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-500 group-hover:text-black transition-all">
                    →
                  </div>
                </div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION REMOVED AS REQUESTED */}
      {/* <MaximalistFeatures /> */}

      {/* FOOTER MANIFESTO */}
      <footer className="relative z-10 py-20 bg-black border-t border-gray-800 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-pink-500 to-cyan-400" />
        <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-700 to-black mb-8 opacity-50">
          DESIGN IS CODE
        </h2>
        <div className="flex justify-center gap-8 text-gray-500 font-mono">
          <span className="hover:text-lime-400 cursor-pointer transition-colors">TWITTER</span>
          <span className="hover:text-pink-500 cursor-pointer transition-colors">GITHUB</span>
          <span className="hover:text-cyan-400 cursor-pointer transition-colors">EMAIL</span>
        </div>
      </footer>
    </div>
  );
};

export default FusionHome;
