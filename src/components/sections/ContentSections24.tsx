import React from 'react';
import { motion } from 'framer-motion';
import './ContentSections24.css';
import BlueprintGridOverlay from '../ui/BlueprintGridOverlay';
import SpecSheet from '../ui/SpecSheet';

const ContentSections24: React.FC = () => {
    return (
        <div className="content-24-scope relative min-h-screen bg-[#050505] overflow-hidden text-[#ccff00]">
            {/* GLOBAL GRID BACKGROUND */}
            <div className="blueprint-grid-bg absolute inset-0 opacity-30 pointer-events-none"></div>
            
            <BlueprintGridOverlay />
            <SpecSheet />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                
                {/* HEADER: GLITCH TERMINAL */}
                <header className="mb-24 relative">
                    <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-[#ccff00] opacity-50"></div>
                    <motion.h1 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="text-7xl md:text-9xl font-black tracking-tighter mb-4 mix-blend-difference"
                    >
                        BLUEPRINT
                        <span className="text-[#ff00ff] block text-4xl md:text-6xl font-mono tracking-widest mt-2">/// PROTOCOL_V.9</span>
                    </motion.h1>
                    <p className="font-mono text-gray-400 max-w-xl border-l-2 border-[#ccff00] pl-4">
                        System Architecture for the Post-Digital Age. <br/>
                        Analyzing structural integrity of chaotic systems.
                    </p>
                </header>

                {/* SECTION 1: THE PRISM (Acid Style) */}
                <div className="mb-32">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-4 h-4 bg-[#ccff00] animate-pulse"></div>
                        <h2 className="text-3xl font-mono font-bold">THE_PRISM_COLLECTION</h2>
                        <div className="h-px bg-gray-800 flex-grow"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="border border-[#333] bg-[#111] p-1 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-[#ccff00] text-black text-xs font-bold px-2 py-1 z-20">01</div>
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Neural Vision" />
                                <div className="absolute inset-0 bg-[#ccff00] opacity-0 group-hover:opacity-20 mix-blend-multiply transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#ccff00]">NEURAL_VISION</h3>
                                <p className="text-gray-500 font-mono text-sm leading-relaxed">
                                    Generating imagery with light-physics simulation.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="border border-[#333] bg-[#111] p-1 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-[#ff00ff] text-black text-xs font-bold px-2 py-1 z-20">02</div>
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Sonic Weave" />
                                <div className="absolute inset-0 bg-[#ff00ff] opacity-0 group-hover:opacity-20 mix-blend-multiply transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#ff00ff]">SONIC_WEAVE</h3>
                                <p className="text-gray-500 font-mono text-sm leading-relaxed">
                                    Synthesizing voice waves with emotional depth.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div 
                            whileHover={{ y: -10 }}
                            className="border border-[#333] bg-[#111] p-1 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-[#00ffff] text-black text-xs font-bold px-2 py-1 z-20">03</div>
                            <div className="h-48 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Logic Core" />
                                <div className="absolute inset-0 bg-[#00ffff] opacity-0 group-hover:opacity-20 mix-blend-multiply transition-opacity"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#00ffff]">LOGIC_CORE</h3>
                                <p className="text-gray-500 font-mono text-sm leading-relaxed">
                                    Processing natural language with 128k context.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>


                {/* DIVIDER */}
                <div className="flex items-center justify-center my-20">
                    <div className="bg-[#ccff00] text-black font-black px-4 py-2 transform -skew-x-12">
                        /// SYSTEM_SWITCH ///
                    </div>
                </div>


                {/* SECTION 2: THE NEURAL BLUEPRINT (Technical) */}
                <div className="relative border border-[#333] bg-[#0a0a0a] p-8 md:p-16">
                    {/* Corner Markers */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ccff00]"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ccff00]"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ccff00]"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ccff00]"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                                ENGINEERING<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00ffff]">INTELLIGENCE</span>
                            </h2>
                            <p className="text-gray-400 font-mono mb-8 leading-relaxed">
                                We strip away the noise to focus on signal. Our infrastructure is built on a distributed matrix of H100 clusters, delivering sub-millisecond latency for real-time applications.
                            </p>
                            
                            <button className="btn-acid group flex items-center gap-2">
                                VIEW_DOCS 
                                <span className="group-hover:translate-x-2 transition-transform">-&gt;</span>
                            </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#111] p-6 border border-[#222] hover:border-[#ccff00] transition-colors">
                                <div className="text-gray-500 text-xs font-mono mb-2">LATENCY</div>
                                <div className="text-3xl font-bold text-[#ccff00]">12ms</div>
                            </div>
                            <div className="bg-[#111] p-6 border border-[#222] hover:border-[#ff00ff] transition-colors">
                                <div className="text-gray-500 text-xs font-mono mb-2">UPTIME</div>
                                <div className="text-3xl font-bold text-[#ff00ff]">99.99%</div>
                            </div>
                            <div className="bg-[#111] p-6 border border-[#222] hover:border-[#00ffff] transition-colors">
                                <div className="text-gray-500 text-xs font-mono mb-2">THROUGHPUT</div>
                                <div className="text-3xl font-bold text-[#00ffff]">10TB/s</div>
                            </div>
                            <div className="bg-[#111] p-6 border border-[#222] hover:border-white transition-colors">
                                <div className="text-gray-500 text-xs font-mono mb-2">ENCRYPTION</div>
                                <div className="text-3xl font-bold text-white">AES-256</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContentSections24;
