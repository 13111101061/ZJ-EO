import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SAMPLE_POSTS } from './blogData';
import './Blog.css';

const FILTERS = ['ALL', 'THEORY', 'DESIGN', 'ART', 'HCI'];

const BlogPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');

    const filteredPosts = activeFilter === 'ALL' 
        ? SAMPLE_POSTS 
        : SAMPLE_POSTS.filter(post => post.tags.some(tag => tag === activeFilter));

    return (
        <div className="blog-scope">
            <div className="blog-grid-bg"></div>
            <div className="blog-noise"></div>
            
            {/* Decorative Side Line */}
            <div className="blog-side-deco">
                <div className="deco-line"></div>
                <div className="deco-text">SCROLL_VELOCITY_TRACKING // ON</div>
            </div>

            <header className="blog-hero">
                <div className="hero-top-bar">
                    <span className="mono-badge">/// SIGNAL_V.2.4</span>
                    <span className="mono-badge">FREQ: 44.1KHZ</span>
                </div>
                
                <div className="hero-title-wrapper">
                    <h1 className="blog-title" data-text="SIGNAL">SIGNAL</h1>
                    <div className="hero-sub">
                        <div className="sub-line"></div>
                        <p>TRANSMISSIONS FROM THE <br/> POST-DIGITAL FRONTIER</p>
                    </div>
                </div>
            </header>

            <section className="blog-feed">
                <div className="feed-header">
                    <div className="filter-bar">
                        {FILTERS.map(filter => (
                            <button 
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="feed-line"></div>
                    <div className="feed-count">0{filteredPosts.length}</div>
                </div>

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
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
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
                                                <div className="card-time">READ: {post.readTime}</div>
                                            </div>

                                            <h3 className="card-title">{post.title}</h3>
                                            <p className="card-excerpt">{post.excerpt}</p>

                                            <div className="card-footer">
                                                <div className="tags-list">
                                                    {post.tags.map(tag => (
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
            </section>

            <footer className="blog-footer">
                <div className="footer-line"></div>
                <span>END_OF_TRANSMISSION</span>
            </footer>
        </div>
    );
};

export default BlogPage;
