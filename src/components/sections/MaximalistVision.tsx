import React from 'react';
import { motion } from 'framer-motion';

const MaximalistVision: React.FC = () => {
  return (
    <section className="relative py-40 bg-black overflow-hidden flex flex-col justify-center items-center">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block"
        >
          <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 mix-blend-difference">
            WE<br/>BUILD<br/>WORLDS
          </h2>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 md:w-48 md:h-48 border-4 border-dashed border-lime-400 rounded-full opacity-50"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We are not just coding interfaces. We are architecting <strong className="text-lime-400 font-normal">digital sensory systems</strong>. 
          Merging the precision of engineering with the <span className="italic text-pink-500 font-serif">chaos of art</span>.
        </motion.p>

        {/* Decorative Lines */}
        <div className="mt-20 flex justify-center gap-2">
          <div className="w-1 h-20 bg-gradient-to-b from-lime-400 to-transparent"></div>
          <div className="w-1 h-32 bg-gradient-to-b from-pink-500 to-transparent"></div>
          <div className="w-1 h-16 bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default MaximalistVision;
