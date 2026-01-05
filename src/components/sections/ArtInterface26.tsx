import React from 'react';
import { motion } from 'framer-motion';
import './ArtInterface26.css';
import GallerySpotlight from './GallerySpotlight';
import ViewToggle from '../ui/ViewToggle';

const ArtInterface26: React.FC = () => {
    return (
        <div className="art-scope bg-white min-h-screen text-black overflow-hidden relative">
            {/* BACKGROUND: Pop Art Dots */}
            <div className="gallery-dot-bg absolute inset-0 opacity-10 pointer-events-none fixed"></div>
            
            <ViewToggle />

            {/* HEADER: MEMPHIS / POP */}
            <header className="relative pt-32 pb-20 px-6 md:px-20 border-b-4 border-black bg-[#fff500]">
                <div className="absolute top-10 right-20 w-32 h-32 bg-[#ff0090] rounded-full mix-blend-multiply opacity-80 animate-pulse"></div>
                <div className="absolute bottom-10 left-40 w-20 h-20 bg-[#00ffff] transform rotate-45 border-4 border-black"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
                    <div>
                        <div className="badge-pop inline-block mb-4 transform -rotate-3">THE ARCHIVE</div>
                        <h1 className="text-7xl md:text-9xl font-black leading-none" style={{ textShadow: '6px 6px 0px #ff0090' }}>
                            GALLERY
                        </h1>
                    </div>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        <button className="border-2 border-black bg-white px-6 py-2 font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_#000]">FILTER_MODE</button>
                        <button className="border-2 border-black bg-white px-6 py-2 font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_#000]">SORT_DATE</button>
                    </div>
                </div>
            </header>

            {/* NEW: Gallery Spotlight (Featured Artist) */}
            <GallerySpotlight />

            {/* SEPARATOR: Marquee */}
            <div className="bg-black text-white py-4 overflow-hidden transform -rotate-1 border-y-4 border-white my-12">
                <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] text-2xl font-mono font-bold">
                    DIGITAL RENAISSANCE /// GENERATIVE SYSTEMS /// NEURAL AESTHETICS /// VOID STRUCTURES /// DIGITAL RENAISSANCE /// GENERATIVE SYSTEMS /// NEURAL AESTHETICS /// VOID STRUCTURES ///
                </div>
            </div>

            {/* MOSAIC GRID */}
            <div className="max-w-[1600px] mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[300px]">
                    
                    {/* Item 1: Large Feature */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-2 row-span-2 relative group border-4 border-black shadow-[8px_8px_0px_#000] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-4xl font-black text-white mb-1">NEURAL_GLITCH</h3>
                            <div className="text-[#ff0090] font-mono font-bold">#0291 • 2.5 ETH</div>
                        </div>
                    </motion.div>

                    {/* Item 2: Tall Portrait */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 row-span-2 relative group border-4 border-black shadow-[8px_8px_0px_#00ffff] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-2xl font-black text-white mb-1">CHROMATOSPHERE</h3>
                            <div className="text-[#00ffff] font-mono font-bold">#0882 • 4.1 ETH</div>
                        </div>
                    </motion.div>

                    {/* Item 3: Standard Square */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 relative group border-4 border-black shadow-[8px_8px_0px_#ccff00] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=3000&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-xl font-black text-white mb-1">VOID_STRUCTURE</h3>
                            <div className="text-[#ccff00] font-mono font-bold">#0112 • 1.8 ETH</div>
                        </div>
                    </motion.div>

                    {/* Item 4: Standard Square */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 relative group border-4 border-black shadow-[8px_8px_0px_#ff0090] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-xl font-black text-white mb-1">LIQUID_DREAM</h3>
                            <div className="text-[#ff0090] font-mono font-bold">#0445 • 3.2 ETH</div>
                        </div>
                    </motion.div>

                     {/* Item 5: Wide Landscape */}
                     <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 md:col-span-2 relative group border-4 border-black shadow-[8px_8px_0px_#00ffff] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-2xl font-black text-white mb-1">SYNTHWAVE_CITY</h3>
                            <div className="text-[#00ffff] font-mono font-bold">#0993 • 5.0 ETH</div>
                        </div>
                    </motion.div>

                    {/* Item 6: Standard Square */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 relative group border-4 border-black shadow-[8px_8px_0px_#ccff00] bg-black overflow-hidden"
                    >
                        <img src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2808&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-xl font-black text-white mb-1">CYBER_ZEN</h3>
                            <div className="text-[#ccff00] font-mono font-bold">#0221 • 1.2 ETH</div>
                        </div>
                    </motion.div>

                    {/* Item 7: Standard Square */}
                    <motion.div 
                        whileHover={{ scale: 0.98 }}
                        className="col-span-1 relative group border-4 border-black shadow-[8px_8px_0px_#ff0090] bg-black overflow-hidden"
                    >
                         <img src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2370&auto=format&fit=crop" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Art" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                            <h3 className="text-xl font-black text-white mb-1">NEON_FLUX</h3>
                            <div className="text-[#ff0090] font-mono font-bold">#0551 • 1.9 ETH</div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ArtInterface26;
