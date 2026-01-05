import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Monolith25.css';

const Monolith25: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const globeScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

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
                    style={{ scale: globeScale }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="holo-globe">
                        <div className="globe-grid"></div>
                        <div className="globe-core"></div>
                        <div className="orbital-ring r1"></div>
                        <div className="orbital-ring r2"></div>
                    </div>
                </motion.div>
            </header>

            {/* 2. METRICS GRID (Swiss/Brutalist) */}
            <section className="mono-metrics">
                <div className="metric-card">
                    <div className="metric-label">ACTIVE_NODES</div>
                    <div className="metric-val">
                        <span className="val-num">42,891</span>
                        <span className="val-delta positive">▲ 12%</span>
                    </div>
                    <div className="metric-chart-line"></div>
                </div>
                <div className="metric-card invert">
                    <div className="metric-label">GLOBAL_LATENCY</div>
                    <div className="metric-val">
                        <span className="val-num">1.2ms</span>
                        <span className="val-delta neutral">− 0%</span>
                    </div>
                    <div className="metric-bar-group">
                        <div className="bar" style={{height: '40%'}}></div>
                        <div className="bar" style={{height: '80%'}}></div>
                        <div className="bar" style={{height: '60%'}}></div>
                        <div className="bar" style={{height: '100%'}}></div>
                    </div>
                </div>
                <div className="metric-card">
                    <div className="metric-label">COMPUTE_POWER</div>
                    <div className="metric-val">
                        <span className="val-num">8.4 ZF</span>
                        <span className="val-delta positive">▲ 240%</span>
                    </div>
                    <div className="metric-radar"></div>
                </div>
            </section>

            {/* 3. FEATURE MANIFESTO */}
            <section className="mono-manifesto">
                <div className="manifesto-grid">
                    <div className="manifesto-item">
                        <h3 className="item-head">01 // NEURAL FABRIC</h3>
                        <p className="item-body">
                            Our proprietary decentralized lattice ensures that intelligence is not just centralized, but omnipresent. 
                            Every edge device becomes a synapse.
                        </p>
                    </div>
                    <div className="manifesto-item">
                        <h3 className="item-head">02 // QUANTUM SECURITY</h3>
                        <p className="item-body">
                            Post-quantum encryption standards baked into the silicon. 
                            Your data doesn't just sit there; it evolves defenses.
                        </p>
                    </div>
                    <div className="manifesto-item">
                        <h3 className="item-head">03 // INFINITE SCALING</h3>
                        <p className="item-body">
                            Elastic compute that breathes with demand. 
                            From a single request to a planetary event, the Monolith adapts.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. PARTNERS (Logos) */}
            <section className="mono-partners">
                <div className="partner-track">
                    <span className="partner-logo">ARASAKA</span>
                    <span className="partner-logo">TYRELL</span>
                    <span className="partner-logo">MASSIVE DYNAMIC</span>
                    <span className="partner-logo">CYBERDYNE</span>
                    <span className="partner-logo">WALLACE</span>
                    <span className="partner-logo">WEYLAND-YUTANI</span>
                </div>
            </section>

            {/* 5. FOOTER */}
            <footer className="mono-footer">
                <div className="footer-top">
                    <div className="footer-brand">MONOLITH CORP.</div>
                    <div className="footer-links">
                        <a href="#">LEGAL</a>
                        <a href="#">PRIVACY</a>
                        <a href="#">CONTACT</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-code">EST. 2077 // SECTOR 7G</div>
                </div>
            </footer>
        </div>
    );
};

export default Monolith25;
