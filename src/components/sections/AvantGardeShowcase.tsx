import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';

const projects = [
  {
    id: "01",
    title: "NEURAL_SYNTHESIS",
    category: "AI / GENERATIVE",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
    description: "Visualizing the latent space of recursive neural networks through liquid motion."
  },
  {
    id: "02",
    title: "CHROME_ECHO",
    category: "WEBGL / INTERACTIVE",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1964&q=80",
    description: "A real-time reflection engine simulating non-euclidean metallic surfaces."
  },
  {
    id: "03",
    title: "VOID_WALKER",
    category: "IMMERSIVE / 3D",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop",
    description: "Procedural dungeon generation based on user bio-metrics and mouse velocity."
  }
];

const AvantGardeShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-10 top-0 bottom-0 w-px bg-white/20" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-white/20" />
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/10 dashed-line" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white/10 dashed-line" />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 pb-8">
          <div>
            <motion.span 
              className="block font-mono text-lime-400 text-sm mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              // SELECTED_WORKS_V.2
            </motion.span>
            <motion.h2 
              className="text-6xl md:text-8xl font-black text-white tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              FEATURED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                PROTOTYPES
              </span>
            </motion.h2>
          </div>
          <motion.div 
            className="hidden md:block text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-400 max-w-sm font-light text-sm leading-relaxed">
              Explorations in digital materiality and code-based sculpting. 
              Pushing the browser rendering engine to its absolute limit.
            </p>
          </motion.div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectItem: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 1], isEven ? [2, -2] : [-2, 2]);

  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const tiltX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const tiltY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  return (
    <div 
      ref={cardRef}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-20 items-center group perspective-1000`}
    >
      {/* Image Container */}
      <motion.div 
        className="w-full md:w-3/5 aspect-[16/9] relative perspective-1000"
        style={{ y, scale, rotate }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        <motion.div 
          className="w-full h-full overflow-hidden rounded-lg border border-white/10 relative z-10"
          style={{ rotateX: tiltX, rotateY: tiltY }}
        >
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent z-20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Image */}
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
            whileHover={{ scale: 1.1 }}
          />

          {/* Floating UI Elements on Image */}
          <div className="absolute top-4 left-4 z-30 flex gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-mono text-white/70">LIVE_RENDER</span>
          </div>
        </motion.div>

        {/* Background Glitch Elements */}
        <div className="absolute -inset-4 bg-gradient-to-r from-lime-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </motion.div>

      {/* Content Container */}
      <div className="w-full md:w-2/5 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-xs border border-white/20 rounded-full px-3 py-1 text-white/60">
              {project.id}
            </span>
            <span className="h-px w-10 bg-white/20" />
            <span className="font-mono text-xs text-lime-400">
              {project.category}
            </span>
          </div>

          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-500 transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
            {project.description}
          </p>

          <motion.button
            className="flex items-center gap-3 text-white font-bold tracking-widest uppercase text-sm group/btn"
            whileHover={{ x: 10 }}
          >
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors">
              ↗
            </span>
            Explore Case Study
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AvantGardeShowcase;
