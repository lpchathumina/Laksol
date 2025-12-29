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
    // Add your carousel previous logic here
    console.log('Previous clicked');
  };

  const handleNext = () => {
    // Add your carousel next logic here
    console.log('Next clicked');
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className={`text-4xl md:text-5xl font-black text-gray-900 text-center uppercase tracking-wider mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          PRODUCT
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Side - Vertical "Lakka" Text */}
          <div 
            className={`lg:col-span-2 flex items-center justify-center lg:justify-start transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <h3 
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-300 uppercase"
                style={{ 
                  writingMode: 'vertical-rl',
                  textOrientation: 'mixed',
                  letterSpacing: '-0.05em'
                }}
              >
                Lakka01
              </h3>
            </div>
            <div className="ml-4 lg:ml-8">
              <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Everything you need<br />for a Fairy clean.
              </h4>
            </div>
          </div>

          {/* Center - Product Image with Navigation */}
          <div 
            className={`lg:col-span-5 flex items-center justify-center transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative flex items-center justify-center gap-8">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors duration-300 shadow-lg"
                aria-label="Previous product"
              >
                <svg 
                  className="w-6 h-6 text-white" 
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

              {/* Product Image */}
              <div className="relative w-64 h-96 md:w-80 md:h-[450px]">
                <Image
                  src="/k.png"
                  alt="Harpic Bathroom Cleaner"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors duration-300 shadow-lg"
                aria-label="Next product"
              >
                <svg 
                  className="w-6 h-6 text-white" 
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

          {/* Right Side - Description and Button */}
          <div 
            className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-md">
              An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing
            </p>

            <button className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold rounded-lg transition-colors duration-300 shadow-md">
              See More...
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}