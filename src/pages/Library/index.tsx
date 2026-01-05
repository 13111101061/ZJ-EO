import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Library.css';
import Sidebar from '../../components/library/layout/Sidebar';
import CategoryHeader from '../../components/library/ui/CategoryHeader';
import ComponentCard from '../../components/library/ui/ComponentCard';
import { libraryRegistry } from '../../data/libraryRegistry';

const LibraryPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categoryId = searchParams.get('category');

    // Determine what content to show based on URL param
    // If no categoryId, show Overview
    
    const activeCategory = categoryId 
        ? libraryRegistry.find(c => c.id === categoryId) 
        : null;

    const pageTitle = activeCategory ? activeCategory.title : 'Genesis Library';
    const pageDescription = activeCategory
        ? activeCategory.description
        : 'The central repository for high-fidelity interface components. Designed for precision, aesthetics, and scalability.';

    return (
        <div className="library-scope">
            {/* Library Specific System Bar (Sub-nav) */}
            <div className="system-bar">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="status-led"></span>
                    GENESIS ARCHIVE // V.1.0
                </span>
                <span>SYSTEM: ONLINE</span>
                <span>2025</span>
            </div>

            <div className="archive-layout">
                <Sidebar />

                <main className="content-stream">
                    <header className="library-header">
                        <h1 className="library-title" data-text={pageTitle}>{pageTitle}</h1>
                        <p className="library-description">{pageDescription}</p>
                    </header>

                    <AnimatePresence mode="wait">
                        {/* Scenario A: Specific Category Selected */}
                        {activeCategory && (
                            <motion.div 
                                key={activeCategory.id} 
                                id={activeCategory.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <CategoryHeader title={activeCategory.title} count={activeCategory.items.length} />

                                <div className="component-grid" data-category={activeCategory.id}>
                                    {activeCategory.items.map((item) => (
                                        <ComponentCard key={item.id} item={item} categoryId={activeCategory.id} />
                                    ))}
                                    {activeCategory.items.length === 0 && (
                                        <div style={{ padding: '60px', color: '#444', fontFamily: 'JetBrains Mono' }}>
                                            // NO_DATA_FOUND_IN_SECTOR
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* Scenario B: Overview (Root /library) */}
                        {!activeCategory && (
                            <motion.div 
                                key="overview"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="overview"
                            >
                                <CategoryHeader title="Overview" count={libraryRegistry.length} />
                                <div className="overview-grid">
                                    {libraryRegistry.map(cat => (
                                        <Link to={`?category=${cat.id}`} key={cat.id} className="overview-card">
                                            <h3 className="overview-title">{cat.title}</h3>
                                            <p className="overview-count">{cat.items.length} COMPONENTS</p>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default LibraryPage;
