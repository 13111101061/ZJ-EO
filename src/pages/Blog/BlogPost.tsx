import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { SAMPLE_POSTS } from './blogData';
import './BlogPost.css';

const GlitchText: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="glitch-wrapper" data-text={text}>
            {text}
        </div>
    );
};

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const post = SAMPLE_POSTS.find(p => p.id === id);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ container: containerRef });
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic Theme Color
    useEffect(() => {
        if (post?.themeColor) {
            document.documentElement.style.setProperty('--post-accent', post.themeColor);
        }
        return () => {
            document.documentElement.style.removeProperty('--post-accent');
        };
    }, [post]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <div className="blog-post-not-found">
                <h1>ERROR 404: DATA_FRAGMENT_MISSING</h1>
                <Link to="/blog" className="back-link">RETURN_TO_INDEX</Link>
            </div>
        );
    }

    return (
        <article className="blog-post-scope">
            <div className="post-noise"></div>
            <div className="post-ambient-bg" style={{ background: post.texture }}></div>
            
            {/* Progress Bar */}
            <motion.div 
                className="reading-progress"
                style={{ scaleX }} 
            />

            {/* Floating UI Elements */}
            <div className="sys-overlay top-left">
                <div className="sys-dot blink"></div>
                <span>SECURE_CONNECTION_ESTABLISHED</span>
            </div>
            <div className="sys-overlay top-right">
                <span>MEM_USAGE: 42MB</span>
            </div>

            <header className="post-hero">
                <div className="post-meta-top">
                    <Link to="/blog" className="back-btn group">
                        <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> INDEX
                    </Link>
                    <span className="post-id mono-code">ID: {post.id}</span>
                </div>

                <div className="hero-content">
                    <h1 className="post-title">
                        <GlitchText text={post.title} />
                    </h1>
                </div>
                
                <div className="post-info-grid">
                    <div className="info-item">
                        <span className="label">DATE_LOGGED</span>
                        <span className="value mono-code">{post.date}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">EST_READ</span>
                        <span className="value mono-code">{post.readTime}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">TAGS</span>
                        <div className="tags-wrapper">
                            {post.tags.map(tag => <span key={tag} className="post-tag">#{tag}</span>)}
                        </div>
                    </div>
                </div>
            </header>

            <div className="post-content-wrapper">
                <div className="content-sidebar">
                    <div className="sticky-sidebar">
                        <div className="sidebar-label">CHAPTERS</div>
                        <ul className="toc-list">
                            <li className="active">00. INTRO</li>
                            <li>01. ANALYSIS</li>
                            <li>02. SYNTHESIS</li>
                            <li>03. CONCLUSION</li>
                        </ul>
                        
                        <div className="sidebar-widget">
                            <div className="widget-title">DATA_VISUALIZATION</div>
                            <div className="fake-graph">
                                <div className="bar" style={{height: '40%'}}></div>
                                <div className="bar" style={{height: '70%'}}></div>
                                <div className="bar" style={{height: '30%'}}></div>
                                <div className="bar" style={{height: '90%'}}></div>
                                <div className="bar" style={{height: '50%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div 
                    className="main-content" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p><p>Full content data missing...</p>` }}
                >
                </motion.div>
            </div>

            <footer className="post-footer">
                <div className="footer-divider"></div>
                <div className="next-prev-nav">
                    <button onClick={() => navigate('/blog')} className="footer-btn">
                        CLOSE_FILE <span className="icon">×</span>
                    </button>
                </div>
                <div className="footer-sys-text">
                    SYSTEM_ID: {Math.random().toString(36).substring(7).toUpperCase()} // END_OF_FILE
                </div>
            </footer>
        </article>
    );
};

export default BlogPost;
