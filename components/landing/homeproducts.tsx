'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePrevious = () => {
    console.log('Previous clicked');
  };

  const handleNext = () => {
    console.log('Next clicked');
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className={`text-3xl md:text-4xl font-bold text-gray-900 text-center uppercase tracking-wid mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          OUR BEST SELLING PRODUCTS
        </h2>

        {/* Main Content Area */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Side - Vertical LAKSOL + Headline */}
            <div 
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="flex items-center">
                {/* Vertical LAKSOL Text */}
                {/* <div className="hidden md:block">
                  <h3 
                    className="text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-200 uppercase"
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      transform: 'rotate(180deg)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    LAKSOL
                  </h3>
                </div> */}
                
                {/* Headline Text */}
                <div className="md:-ml-2">
                  <h4 className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-medium text-gray-900 leading-snug italic">
                    Everything you need<br />for a Fairy clean.
                  </h4>
                </div>
              </div>
            </div>

            {/* Center - Product Image */}
            <div 
              className={`transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="flex justify-center">
                <div className="relative w-52 h-80 sm:w-60 sm:h-[360px] md:w-64 md:h-[400px] lg:w-56 lg:h-[380px] xl:w-64 xl:h-[420px]">
                  <Image
                    src="/k.png"
                    alt="Harpic Bathroom Cleaner"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Description and Button */}
            <div 
              className={`transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <div className="space-y-5">
                <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                  Our premium cleaning products are formulated to deliver exceptional results while being gentle on surfaces. From bathrooms to kitchens, Lakmina Products provide powerful cleaning solutions that meet the highest standards.
                </p>

                <button className="px-6 py-2.5 md:px-8 md:py-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-lg transition-colors duration-300">
                  See More...
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons - Positioned absolutely at bottom of product area */}
          <div className="flex justify-center mt-6 lg:mt-0">
            <div className="flex items-center gap-[180px] sm:gap-[220px] md:gap-[280px] lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Previous product"
              >
                <svg 
                  className="w-5 h-5 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-gray-400 bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Next product"
              >
                <svg 
                  className="w-5 h-5 text-gray-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}