import React from 'react';
import { motion } from 'framer-motion';

const MaximalistFeatures: React.FC = () => {
  return (
    <section className="relative py-32 px-4 md:px-10 overflow-hidden bg-black">
      {/* Background Noise & Grids */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 flex items-end justify-between border-b border-white/20 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter"
          >
            CORE_MODULES
          </motion.h2>
          <div className="hidden md:block font-mono text-lime-400 text-sm">
            // SYSTEM_CAPABILITIES_V.9
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          
          {/* 1. Visual Engine (Wide) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-1 md:col-span-2 row-span-1 glass-card p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <span className="font-mono text-xs text-lime-400 border border-lime-400 px-2 py-1">V.5.2</span>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-end">
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-white mb-2">NEURAL_VISION</h3>
                  <p className="text-gray-400 font-mono text-sm">Photorealistic asset generation with latent diffusion models.</p>
                </div>
                <div className="w-full md:w-64 h-32 bg-black/50 rounded-lg border border-white/10 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-lime-400 animate-scan" />
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Vision" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. Neural Code (Tall) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="col-span-1 row-span-1 md:row-span-2 glass-card p-8 relative overflow-hidden border-pink-500/30"
          >
            <div className="absolute top-0 right-0 p-32 bg-pink-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 w-fit border border-pink-500/30 rounded-full bg-black/50 backdrop-blur-md mb-8">
                <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              
              <div className="flex-1 font-mono text-xs text-pink-400 space-y-2 overflow-hidden opacity-70">
                <div>&gt; initiating_sequence...</div>
                <div>&gt; loading_modules [====================] 100%</div>
                <div>&gt; analyzing_context...</div>
                <div className="text-white">&gt; const reality = await dream();</div>
                <div>&gt; optimizing_render_paths...</div>
                <div>&gt; entropy_check: PASSED</div>
                <div className="animate-pulse">&gt; _cursor_active</div>
              </div>

              <div className="mt-8">
                <h3 className="text-4xl font-bold text-white mb-2">HYPER_LOGIC</h3>
                <p className="text-gray-400 font-mono text-sm">LLM integration for recursive code generation.</p>
              </div>
            </div>
          </motion.div>

          {/* 3. Sonic Flux */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 glass-card p-8 relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
            </div>
            
            <div className="flex gap-1 h-12 items-center justify-center mb-4">
               {[...Array(8)].map((_, i) => (
                 <motion.div 
                   key={i}
                   animate={{ height: [10, 40, 10] }}
                   transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                   className="w-2 bg-cyan-400 rounded-full"
                 />
               ))}
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">SONIC_FLUX</h3>
            <p className="text-gray-400 font-mono text-xs">Voice cloning & synthesis.</p>
          </motion.div>

          {/* 4. Data Entropy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 glass-card p-8 relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="p-3 border border-white/20 rounded-full bg-black/50 backdrop-blur-md">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" /></svg>
              </div>
            </div>

            <div className="h-12 flex items-end gap-2 mb-4">
              <div className="w-full bg-gray-800 h-1 rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  className="h-full bg-yellow-400"
                />
              </div>
              <span className="text-yellow-400 font-mono text-xs">80%</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">DATA_ENTROPY</h3>
            <p className="text-gray-400 font-mono text-xs">Real-time token analytics.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MaximalistFeatures;
