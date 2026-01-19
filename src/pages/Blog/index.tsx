import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SAMPLE_POSTS } from './blogData';
import './Blog.css';

const FILTERS = [
    { id: 'ALL', label: '/// ALL_LOGS' },
    { id: 'THEORY', label: 'THEORY' },
    { id: 'DESIGN', label: 'DESIGN' },
    { id: 'ART', label: 'ART' },
    { id: 'HCI', label: 'HCI' },
    { id: 'ML', label: 'MACHINE_LEARNING' }
];

const BlogPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const [scrolled, setScrolled] = useState(0);

    // Simple scroll tracking for visual effects
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const filteredPosts = activeFilter === 'ALL' 
        ? SAMPLE_POSTS 
        : SAMPLE_POSTS.filter(post => post.tags.some(tag => tag === activeFilter || (activeFilter === 'ML' && tag === 'ML')));

    return (
        <div className="blog-scope">
            <div className="blog-grid-bg"></div>
            <div className="blog-noise"></div>
            
            <div className="blog-layout">
                {/* --- LEFT SIDEBAR --- */}
                <aside className="blog-sidebar">
                    <div className="sidebar-header">
                        <div className="logo-glitch" data-text="SIGNAL">SIGNAL</div>
                        <div className="logo-sub">FREQ: 44.1KHZ</div>
                    </div>

                    <nav className="sidebar-nav">
                        <div className="nav-label">FILTER_FREQUENCY</div>
                        {FILTERS.map(filter => (
                            <button 
                                key={filter.id}
                                className={`nav-btn ${activeFilter === filter.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.id)}
                            >
                                <span className="nav-marker">{activeFilter === filter.id ? '►' : ''}</span>
                                <span className="nav-text">{filter.label}</span>
                                {activeFilter === filter.id && (
                                    <motion.div 
                                        layoutId="activeGlow" 
                                        className="nav-glow"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </nav>

                    <div className="sidebar-footer">
                        <div className="sys-status">
                            <span className="status-dot"></span>
                            SYSTEM_ONLINE
                        </div>
                        <div className="scroll-indicator">
                            VELOCITY: {Math.round(scrolled * 0.1)}
                        </div>
                    </div>
                </aside>

                {/* --- MAIN CONTENT --- */}
                <main className="blog-main">
                    <header className="blog-hero-compact">
                        <div className="hero-content">
                            <h1>TRANSMISSIONS</h1>
                            <div className="hero-divider"></div>
                            <p>FROM THE POST-DIGITAL FRONTIER</p>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-num">{filteredPosts.length.toString().padStart(2, '0')}</span>
                            <span className="stat-label">ENTRIES FOUND</span>
                        </div>
                    </header>

                    <motion.div 
                        layout
                        className="bento-grid"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredPosts.map((post) => (
                                <motion.article 
                                    layout
                                    key={post.id}
                                    className={`blog-card size-${post.size || 'normal'}`}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Link to={`/blog/${post.id}`} className="card-link-wrapper">
                                        <div className="card-inner">
                                            <div className="card-media">
                                                <div className="media-bg" style={{
                                                    background: post.texture || `conic-gradient(from 0deg, #111, #222, #111)`
                                                }}></div>
                                                <div className="media-overlay"></div>
                                                <div className="media-scanline"></div>
                                                <div className="media-tag">{post.tags[0]}</div>
                                            </div>

                                            <div className="card-content">
                                                <div className="card-header">
                                                    <div className="card-id">{post.id}</div>
                                                    <div className="card-time">{post.readTime}</div>
                                                </div>

                                                <h3 className="card-title">{post.title}</h3>
                                                <p className="card-excerpt">{post.excerpt}</p>

                                                <div className="card-footer">
                                                    <div className="tags-list">
                                                        {post.tags.slice(0, 2).map(tag => (
                                                            <span key={tag} className="tag">#{tag}</span>
                                                        ))}
                                                    </div>
                                                    <div className="arrow-icon">→</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    <footer className="blog-main-footer">
                        <span>END_OF_TRANSMISSION</span>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default BlogPage;
