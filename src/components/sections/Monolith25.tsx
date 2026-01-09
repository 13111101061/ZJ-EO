import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CardSwap, { Card } from '../ui/CardSwap';
import './Monolith25.css';

const Monolith25: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    return (
        <div className="monolith-scope" ref={containerRef}>
            {/* AMBIENT LAYERS */}
            <div className="mono-grid-bg" />
            <div className="mono-noise-overlay" />

            {/* 1. HERO SECTION */}
            <header className="mono-hero">
                <div className="mono-hero-content">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mono-ticker"
                    >
                        <span className="ticker-item">:: SYSTEM_STATUS: OPERATIONAL</span>
                        <span className="ticker-item">:: GLOBAL_HASH: 99.9%</span>
                        <span className="ticker-item">:: SECURE_LINK: ESTABLISHED</span>
                    </motion.div>

                    <motion.h1 
                        className="mono-title"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ y: headerY }}
                    >
                        MONOLITH
                        <span className="mono-title-sub">INTELLIGENCE</span>
                    </motion.h1>

                    <motion.div 
                        className="mono-subtitle-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <p className="mono-lead">
                            Architecting the cognitive infrastructure for a post-scarcity civilization.
                            We build the silence between the data.
                        </p>
                        
                        <div className="mono-cta-group">
                            <button className="mono-btn primary">
                                <span className="btn-text">INITIATE PROTOCOL</span>
                                <span className="btn-icon">→</span>
                            </button>
                            <button className="mono-btn ghost">
                                <span className="btn-text">READ WHITE PAPER</span>
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    className="mono-globe-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{ position: 'relative', height: '800px' }}
                >
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={90}
                        delay={4000}
                        pauseOnHover={true}
                        width={550}
                        height={650}
                        easing="elastic"
                    >
                        <Card>
                            <h3>NEURAL LATTICE</h3>
                            <p>Decentralized intelligence spanning 42k nodes.</p>
                        </Card>
                        <Card>
                            <h3>QUANTUM SHIELD</h3>
                            <p>Post-quantum encryption evolved in real-time.</p>
                        </Card>
                        <Card>
                            <h3>INFINITE SCALING</h3>
                            <p>Elastic compute breathing with planetary demand.</p>
                        </Card>
                    </CardSwap>
                </motion.div>
            </header>
        </div>
    );
};

export default Monolith25;
