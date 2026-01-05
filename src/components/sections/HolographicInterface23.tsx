import React from 'react';
import { motion } from 'framer-motion';
import './HolographicInterface23.css';
import RadarScan from '../ui/RadarScan';
import TerminalBlock from '../ui/TerminalBlock';

const HolographicInterface23: React.FC = () => {
    return (
        <div className="holographic-scope relative min-h-screen bg-[#f4f4f4] text-[#1a1a1a] overflow-hidden">
            {/* BACKGROUND: Noise & Ink */}
            <div className="interface-noise absolute inset-0 pointer-events-none"></div>
            
            {/* Abstract Ink Blobs */}
            <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gray-200 rounded-full blur-[100px] opacity-50 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-[80px] opacity-50 mix-blend-multiply pointer-events-none"></div>

            <RadarScan />
            <TerminalBlock />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
                
                {/* LEFT: Typography & Concept */}
                <div className="md:w-1/3">
                    <div className="sticky top-20">
                        <div className="text-xs font-serif tracking-widest text-gray-500 mb-4">// WORKFLOW_V2.0</div>
                        <h2 className="text-6xl font-serif font-thin italic leading-tight mb-8">
                            Ethereal<br />
                            <span className="not-italic font-bold">Flow.</span>
                        </h2>
                        <div className="w-12 h-1 bg-black mb-8"></div>
                        <p className="font-serif text-lg text-gray-600 leading-loose">
                            Designed for the spaces between thoughts. Where the void meets structure. A new era of interface design that breathes with you.
                        </p>
                        
                        <div className="mt-12 flex flex-col gap-4">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
                                <span className="font-mono text-sm uppercase tracking-widest">New Chinese Aesthetic</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
                                <span className="font-mono text-sm uppercase tracking-widest">Glassmorphism</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-2 h-2 rounded-full bg-black group-hover:scale-150 transition-transform"></div>
                                <span className="font-mono text-sm uppercase tracking-widest">Negative Space</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: The Interface (Glass Stack) */}
                <div className="md:w-2/3 perspective-1000">
                    <motion.div 
                        initial={{ rotateY: -5, rotateX: 5 }}
                        whileHover={{ rotateY: 0, rotateX: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="relative min-h-[800px]"
                    >
                        
                        {/* LAYER 1: Code (Back) */}
                        <div className="absolute top-0 right-0 w-[90%] h-[600px] bg-white border border-gray-200 rounded-3xl shadow-xl p-8 transform translate-x-12 translate-y-12 opacity-60 blur-[1px]">
                             <pre className="font-mono text-xs text-gray-400 leading-relaxed">
{`import { NeuralNet } from '@nexus/core';

const model = new NeuralNet({
  precision: 'float32',
  layers: 1024,
  mode: 'creative'
});

await model.dream('cyberpunk city');
// Rendering... 45ms
// Optimizing... 12ms`}
                            </pre>
                        </div>

                        {/* LAYER 2: Main Interface (Glass) */}
                        <div className="card-glass absolute top-20 left-0 w-full h-[600px] bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl p-6 flex flex-col">
                            {/* Toolbar */}
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="font-mono text-xs text-gray-500">CANVAS_01</div>
                            </div>

                            <div className="flex flex-grow gap-6">
                                {/* Sidebar */}
                                <div className="w-16 flex flex-col gap-4 items-center py-4 bg-white/20 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center text-xs">T</div>
                                    <div className="w-8 h-8 rounded-lg border border-gray-300"></div>
                                    <div className="w-8 h-8 rounded-lg border border-gray-300"></div>
                                    <div className="mt-auto w-8 h-8 rounded-full bg-red-500/20"></div>
                                </div>
                                
                                {/* Canvas */}
                                <div className="flex-grow bg-white/30 rounded-xl relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none">
                                        {[...Array(144)].map((_, i) => (
                                            <div key={i} className="border-[0.5px] border-black"></div>
                                        ))}
                                    </div>
                                    <div className="w-40 h-40 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full blur-2xl animate-blob"></div>
                                </div>

                                {/* Properties */}
                                <div className="w-64 bg-white/20 rounded-xl p-4 font-mono text-xs">
                                    <div className="mb-6">
                                        <label className="block text-gray-500 mb-2">OPACITY</label>
                                        <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-black"></div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-500 mb-2">BLUR</label>
                                        <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
                                            <div className="h-full w-1/3 bg-black"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12 p-4 border border-gray-300 rounded-lg bg-white/40">
                                        <div className="text-gray-400 mb-2">&gt; Status</div>
                                        <div className="text-green-600">&gt; Optimized</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* LAYER 3: Floating Tools (Front) */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute bottom-40 -right-10 w-48 bg-black text-white p-4 rounded-xl shadow-2xl border border-gray-700"
                        >
                            <div className="text-xs font-mono text-gray-500 mb-2">PALETTE</div>
                            <div className="flex justify-between">
                                <div className="w-6 h-6 rounded-full bg-white border border-gray-600"></div>
                                <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                                <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                                <div className="w-6 h-6 rounded-full bg-emerald-500"></div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default HolographicInterface23;
