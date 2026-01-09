import React from 'react';
import { motion } from 'framer-motion';

const KineticGallery: React.FC = () => {
  return (
    <section className="relative py-32 overflow-hidden border-y border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none" />
      
      <div className="mb-20 overflow-hidden">
        <motion.div
          className="whitespace-nowrap font-black uppercase text-6xl md:text-9xl"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 40, ease: "linear" }}
        >
          DIGITAL AVANT-GARDE /// DIGITAL AVANT-GARDE /// DIGITAL AVANT-GARDE ///
        </motion.div>
        <motion.div
          className="whitespace-nowrap font-black uppercase text-4xl md:text-7xl opacity-60"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" }}
        >
          VISUAL SYNTHESIS /// VISUAL SYNTHESIS /// VISUAL SYNTHESIS ///
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-lime-400 to-cyan-400 opacity-40 blur-lg group-hover:opacity-100 transition duration-500 rounded-xl" />
            <div className="relative bg-black border border-white/10 p-2 rounded-xl overflow-hidden transition duration-500">
               <img 
                 src="/images/art1.avif" 
                 alt="Art 1" 
                 className="w-full h-auto grayscale group-hover:grayscale-0 transition duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
               />
               <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
            </div>
          </motion.div>

          <div className="text-right">
            <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6">
              THE <br/> GLITCH <br/> CHRONICLES
            </h3>
            <p className="text-gray-400 text-lg max-w-md ml-auto font-mono">
              Exploring the aesthetic of error. When the system breaks, art begins.
              <span className="block mt-4 text-lime-400">// SYSTEM_FAILURE_IS_BEAUTIFUL</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-32">
          <div className="text-left order-2 md:order-1">
            <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mb-6">
              NEON <br/> DREAMSCAPES
            </h3>
            <p className="text-gray-400 text-lg max-w-md font-mono">
              Synthetic realities rendered in 8K resolution. The future is bright, pink, and slightly distorted.
              <span className="block mt-4 text-pink-500">// RENDER_COMPLETE</span>
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative group order-1 md:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-500 opacity-40 blur-lg group-hover:opacity-100 transition duration-500 rounded-xl" />
            <div className="relative bg-black border border-white/10 p-2 rounded-xl overflow-hidden transition duration-500">
               <img 
                 src="/images/art2.avif" 
                 alt="Art 2" 
                 className="w-full h-auto grayscale group-hover:grayscale-0 transition duration-500 mix-blend-luminosity group-hover:mix-blend-normal"
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KineticGallery;
