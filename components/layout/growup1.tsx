'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const timelineData = [
  {
    year: '2010',
    color: '#DC2626',
    description: 'Founded with a vision to revolutionize professional cleaning solutions for the hospitality industry.',
    barHeightPercentage: 25,
  },
  {
    year: '2015',
    color: '#22C55E',
    description: 'Expanded our product line and entered new markets across Europe and Asia Pacific regions.',
    barHeightPercentage: 40,
  },
  {
    year: '2020',
    color: '#1C1917',
    description: 'Launched eco-friendly formulations and smart dispensing systems for modern facilities.',
    barHeightPercentage: 55,
  },
  {
    year: '2025',
    color: '#2563EB',
    description: 'Became the preferred choice for over 10,000 businesses worldwide with sustainable solutions.',
    barHeightPercentage: 75,
  },
  {
    year: '2026',
    color: '#F97316',
    description: 'Pioneering AI-powered cleaning optimization and setting new industry standards globally.',
    barHeightPercentage: 90,
  },
];

export default function GrowingCompany() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const step = 1 / timelineData.length;
      const idx = Math.floor(v / step);
      setActiveIndex(Math.min(Math.max(0, idx), timelineData.length - 1));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section 
      ref={containerRef} 
      className="relative bg-white" 
      style={{ height: '500vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 flex flex-col">
          
          {/* ========== HEADER SECTION ========== */}
          <div className="shrink-0 mb-4 sm:mb-6 md:mb-8">
            {/* Row 1: OUR Journey */}
            <div className="flex items-baseline gap-2 sm:gap-3 md:gap-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl mt-20 font-medium tracking-tight text-black">
                OUR
              </h2>
              <span className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-500">
                Journey
              </span>
            </div>
            
            {/* Row 2: & Symbol (indented) */}
            <div className="pl-8 sm:pl-12 md:pl-16 -mt-1 sm:mt-3">
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-black">&</span>
            </div>

            {/* Row 3: TIME Through */}
            <div className="flex items-baseline gap-2 sm:gap-3 md:gap-4 -mt-1 sm:mt-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-black">
                TIME
              </h2>
              <span className="text-xl sm:text-2xl md:text-3xl font-normal text-gray-500">
                Through
              </span>
            </div>
          </div>

          {/* ========== MAIN CONTENT ========== */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-0">
            
            {/* Left Side - Text Content Only (No Year with Dot) */}
            <div className="lg:w-[280px] xl:w-[320px] shrink-0 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 lg:pb-14">
              <div className="relative min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    {/* Description Only */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                      {timelineData[activeIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Side - Chart */}
            <div className="flex-1 relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-0">
              
              {/* Growth Line SVG */}
              <svg 
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {/* Background line (faint) */}
                <path 
                  d={`M 8 88 
                      L 12 ${88 - timelineData[0].barHeightPercentage * 0.75}
                      L 22 ${88 - timelineData[0].barHeightPercentage * 0.75 + 12}
                      L 30 ${88 - timelineData[1].barHeightPercentage * 0.75}
                      L 40 ${88 - timelineData[1].barHeightPercentage * 0.75 + 12}
                      L 48 ${88 - timelineData[2].barHeightPercentage * 0.75}
                      L 58 ${88 - timelineData[2].barHeightPercentage * 0.75 + 12}
                      L 68 ${88 - timelineData[3].barHeightPercentage * 0.75}
                      L 78 ${88 - timelineData[3].barHeightPercentage * 0.75 + 12}
                      L 88 ${88 - timelineData[4].barHeightPercentage * 0.75}
                      L 95 ${88 - timelineData[4].barHeightPercentage * 0.75 - 6}`}
                  stroke="#E5E7EB" 
                  strokeWidth="0.4" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
                
                {/* Animated growth line */}
                <motion.path 
                  d={`M 8 88 
                      L 12 ${88 - timelineData[0].barHeightPercentage * 0.75}
                      L 22 ${88 - timelineData[0].barHeightPercentage * 0.75 + 12}
                      L 30 ${88 - timelineData[1].barHeightPercentage * 0.75}
                      L 40 ${88 - timelineData[1].barHeightPercentage * 0.75 + 12}
                      L 48 ${88 - timelineData[2].barHeightPercentage * 0.75}
                      L 58 ${88 - timelineData[2].barHeightPercentage * 0.75 + 12}
                      L 68 ${88 - timelineData[3].barHeightPercentage * 0.75}
                      L 78 ${88 - timelineData[3].barHeightPercentage * 0.75 + 12}
                      L 88 ${88 - timelineData[4].barHeightPercentage * 0.75}
                      L 95 ${88 - timelineData[4].barHeightPercentage * 0.75 - 6}`}
                  stroke="#374151" 
                  strokeWidth="0.4" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength: smoothProgress }}
                />

                {/* Arrow at end */}
                <motion.path
                  d={`M 92 ${88 - timelineData[4].barHeightPercentage * 0.75 - 2} 
                      L 96 ${88 - timelineData[4].barHeightPercentage * 0.75 - 8}
                      M 96 ${88 - timelineData[4].barHeightPercentage * 0.75 - 8}
                      L 99 ${88 - timelineData[4].barHeightPercentage * 0.75 - 4}`}
                  stroke="#374151"
                  strokeWidth="0.4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  style={{ opacity: useTransform(smoothProgress, [0.9, 1], [0, 1]) }}
                />
              </svg>

              {/* Trophy Icon */}
              <motion.div 
                className="absolute z-20 pointer-events-none right-0 top-0 sm:right-2 -sm:top-12"
                style={{ 
                  opacity: useTransform(smoothProgress, [0.85, 1], [0, 1]),
                  scale: useTransform(smoothProgress, [0.85, 1], [0.5, 1])
                }}
              >
                <div className="relative">
                  <span className="text-3xl sm:text-4xl md:text-5xl">🏆</span>
                  <motion.span 
                    className="absolute -top-1 -right-1 text-sm sm:text-base md:text-lg"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ✨
                  </motion.span>
                  <motion.span 
                    className="absolute top-0 -left-2 text-xs sm:text-sm md:text-base"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                  >
                    ✨
                  </motion.span>
                  <motion.span 
                    className="absolute -bottom-1 right-0 text-xs sm:text-sm"
                    animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                  >
                    ✨
                  </motion.span>
                </div>
              </motion.div>

              {/* Bars Container */}
              <div className="absolute inset-0 flex items-end justify-between gap-1 sm:gap-2 md:gap-3 pb-12 sm:pb-14 md:pb-16">
                {timelineData.map((item, index) => {
                  const totalItems = timelineData.length;
                  const segment = 1 / totalItems;
                  const start = index * segment;
                  const end = (index + 0.8) * segment;

                  const heightTransform = useTransform(
                    smoothProgress, 
                    [start, end], 
                    ['0%', `${item.barHeightPercentage}%`]
                  );
                  const opacityTransform = useTransform(
                    smoothProgress, 
                    [start, start + 0.05], 
                    [0.3, 1]
                  );

                  return (
                    <div 
                      key={item.year} 
                      className="flex-1 flex flex-col items-center h-full"
                    >
                      {/* Bar Wrapper */}
                      <div className="flex-1 w-full flex items-end justify-center">
                        <motion.div
                          className="w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] rounded-t-sm relative overflow-hidden"
                          style={{ 
                            backgroundColor: item.color,
                            height: heightTransform,
                            opacity: opacityTransform,
                          }}
                        >
                          {/* Gradient overlay for depth */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-black/10" />
                          {/* Top highlight */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-white/30" />
                        </motion.div>
                      </div>
                      
                      {/* Year Label */}
                      <motion.div 
                        className="h-10 sm:h-12 md:h-14 flex items-center justify-center"
                        style={{ opacity: opacityTransform }}
                      >
                        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">
                          {item.year}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* Baseline */}
              <div className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-0 right-0 h-[2px] bg-gray-800" />
            </div>
          </div>

          {/* ========== SCROLL INDICATOR ========== */}
          <motion.div 
            className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
            style={{ opacity: useTransform(smoothProgress, [0.9, 1], [1, 0]) }}
          >
            <span className="text-xs sm:text-sm text-gray-500">Scroll to explore</span>
            <motion.svg 
              className="w-4 h-4 sm:w-5 sm:h-5"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}