'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface TimelineItem {
  year: string;
  color: string;
  height: number;
  title: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: '2010',
    color: '#DC2626',
    height: 35,
    title: 'The Foundation',
    description: 'Lakmina Products was founded with a single-minded vision: to redefine hygiene standards in Sri Lanka through innovative cleaning formulations.',
  },
  {
    year: '2015',
    color: '#16A34A',
    height: 50,
    title: 'Strategic Expansion',
    description: 'We expanded our reach across the island, launching professional-grade solutions for the growing hospitality and industrial sectors.',
  },
  {
    year: '2020',
    color: '#1C1917',
    height: 65,
    title: 'Technological Leap',
    description: 'Inauguration of our state-of-the-art manufacturing facility, integrating advanced automated processes and eco-friendly practices.',
  },
  {
    year: '2025',
    color: '#2563EB',
    height: 80,
    title: 'Legacy of Trust',
    description: 'Achieved a milestone of 10,000+ loyal clients, becoming the gold standard for premium cleaning solutions globally.',
  },
  {
    year: '2026',
    color: '#EA580C',
    height: 95,
    title: 'The Future of Clean',
    description: 'Pioneering sustainable chemistry and AI-driven dispensing systems to shape the next generation of professional hygiene.',
  },
];

export default function OurJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newIndex = Math.floor(value * timelineData.length);
      setActiveIndex(Math.min(Math.max(0, newIndex), timelineData.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative bg-[#FAFAFA]" style={{ height: `${(timelineData.length + 1) * 100}vh` }}>
      {/* Sticky Context */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-center py-20">
          
          {/* Enhanced Premium Header */}
          <div className="relative mb-16 lg:mb-24">
            <div className="flex items-start gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-black/5 rounded-full blur-xl" />
                <div className="relative border-2 border-black/80 rounded-full px-8 py-3 bg-white/80 backdrop-blur-sm">
                  <span className="text-3xl md:text-5xl font-black tracking-tighter text-black">OUR</span>
                </div>
              </motion.div>

              <div className="flex flex-col mt-2">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm md:text-base font-serif italic text-gray-500 mb-1"
                >
                  Journey
                </motion.span>
                <div className="flex items-end gap-3">
                  <motion.span 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl font-medium text-gray-400 tracking-wide leading-none"
                  >
                    Through
                  </motion.span>
                  <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-7xl font-black tracking-tight text-black leading-none"
                  >
                    TIME
                  </motion.h2>
                </div>
              </div>

              {/* Decorative Arrow */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="ml-4 self-end mb-1"
              >
                <svg className="w-8 h-12 text-black/20" viewBox="0 0 24 48" fill="none">
                  <path d="M12 0V44M12 44L4 36M12 44L20 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Main Visual Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            
            {/* Left Content Column - Smooth Text Swapping */}
            <div className="lg:col-span-4 min-h-[180px] md:min-h-[220px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-16 h-16 rounded-full border-4 flex items-center justify-center bg-white shadow-xl shadow-black/5"
                      style={{ borderColor: timelineData[activeIndex].color }}
                      layoutId="yearCircle"
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-full" 
                        style={{ backgroundColor: timelineData[activeIndex].color }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <span className="text-5xl md:text-7xl font-black tracking-tighter text-black">
                      {timelineData[activeIndex].year}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                      {timelineData[activeIndex].title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                      {timelineData[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Chart Column - Polished Visualization */}
            <div className="lg:col-span-8 relative">
              
              {/* Growth Line - Neon Glow Effect */}
              <svg 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-visible"
                viewBox="0 0 800 300"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#000" />
                    <stop offset="100%" stopColor="#333" />
                  </linearGradient>
                </defs>

                {/* Path Outline */}
                <motion.path
                  d="M 50 250 L 150 200 L 250 220 L 350 150 L 450 180 L 550 100 L 650 130 L 750 60"
                  fill="none"
                  stroke="rgba(0,0,0,0.05)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />

                {/* Active Animated Path */}
                <motion.path
                  d="M 50 250 L 150 200 L 250 220 L 350 150 L 450 180 L 550 100 L 650 130 L 750 60"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  style={{ pathLength: smoothProgress }}
                  filter="url(#glow)"
                />

                {/* Rockets and Trophy Icons */}
                <AnimatePresence>
                  {activeIndex === timelineData.length - 1 && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0, rotate: -20 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      className="origin-center"
                    >
                      <text x="765" y="55" fontSize="48">🚀</text>
                      <motion.text 
                        animate={{ opacity: [1, 0, 1], scale: [1, 1.2, 1] }} 
                        transition={{ duration: 1, repeat: Infinity }}
                        x="790" y="30" fontSize="18"
                      >
                        ✨
                      </motion.text>
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>

              {/* Premium Bars Container */}
              <div className="flex items-end justify-between gap-3 sm:gap-6 md:gap-8 h-64 md:h-80 lg:h-96 px-4 md:px-12 relative z-0">
                {timelineData.map((item, index) => {
                  const isActive = activeIndex === index;
                  const isPassed = activeIndex >= index;

                  return (
                    <div key={item.year} className="flex-1 flex flex-col items-center">
                      <div className="relative w-full flex justify-center group flex-1 items-end">
                        {/* Interactive Bar */}
                        <motion.div
                          className="w-12 sm:w-16 md:w-20 lg:w-24 rounded-t-xl relative transition-all duration-500 overflow-hidden"
                          style={{ 
                            backgroundColor: item.color,
                            boxShadow: isActive ? `0 0 50px ${item.color}44` : 'none'
                          }}
                          initial={{ height: 0 }}
                          animate={{ 
                            height: isPassed ? `${item.height}%` : '5%',
                            opacity: isPassed ? 1 : 0.2,
                            scaleX: isActive ? 1.05 : 1
                          }}
                          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                        >
                          {/* Inner Shine Effect */}
                          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/20 to-transparent" />
                          <motion.div 
                            className="absolute inset-0 bg-white/10"
                            animate={{ opacity: isActive ? [0, 0.2, 0] : 0 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Hover Tooltip - Extra detail */}
                        <div className="absolute bottom-full mb-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-3 py-1 rounded shadow-lg border border-gray-100 pointer-events-none">
                          <span className="text-xs font-bold" style={{ color: item.color }}>{item.year}</span>
                        </div>
                      </div>
                      
                      {/* Premium Year Label */}
                      <motion.div 
                        className="mt-6 flex flex-col items-center"
                        animate={{ opacity: isPassed ? 1 : 0.3 }}
                      >
                        <span className="text-xl md:text-3xl font-black tracking-tighter text-black">
                          {item.year}
                        </span>
                        <motion.div 
                          className="h-1 bg-black rounded-full mt-1"
                          animate={{ width: isActive ? '100%' : '0%' }}
                        />
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Sub-line */}
              <div className="h-0.5 bg-black/5 w-full mt-4 rounded-full" />
            </div>
          </div>

          {/* Progress Markers (Floating on the right) */}
          <div className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                className="group relative flex items-center justify-end"
                onClick={() => {
                  containerRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                  });
                  // Note: Jumping to specific scroll position would be better but let's stick to aesthetics
                }}
              >
                <div className="px-3 py-1 mr-4 bg-white shadow-sm border border-gray-100 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity text-black">
                  {item.year}
                </div>
                <motion.div
                  className="w-3 h-3 rounded-full cursor-pointer ring-offset-2"
                  style={{ 
                    backgroundColor: activeIndex >= index ? item.color : '#E5E7EB',
                    boxShadow: activeIndex === index ? `0 0 15px ${item.color}` : 'none'
                  }}
                  animate={{ 
                    scale: activeIndex === index ? 1.5 : 1,
                    ring: activeIndex === index ? '2px' : '0px'
                  }}
                  whileHover={{ scale: 1.4 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Elevated Scroll Hint */}
          <AnimatePresence>
            {activeIndex < timelineData.length - 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-10 left-10 flex items-center gap-4 text-gray-400 font-medium"
              >
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                </div>
                <span className="text-xs uppercase tracking-[0.2em]">Discover our story</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}