'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhoWeAre() {
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

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 
          className={`text-3xl md:text-4xl font-bold text-black text-center mb-16 uppercase tracking-wide transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          WHO WE ARE
        </h2>

        {/* Content Container */}
        <div className="relative">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Image and Text */}
            <div 
              className={`lg:col-span-6 space-y-8 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              {/* Top Image - Cleaning supplies */}
              <div className="w-full h-64 md:h-80 lg:h-72 rounded-3xl overflow-hidden">
                <img 
                  src="/about.jpg" 
                  alt="Cleaning supplies" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description Text */}
              <div className="space-y-6 lg:pr-16">
                <p className="text-black text-base md:text-md leading-relaxed">
                  An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing
                </p>

                {/* See More Button */}
                <button className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-white font-medium rounded-xl transition-colors duration-300">
                  See More...
                </button>
              </div>
            </div>

            {/* Right Column - Headline and Image */}
            <div 
              className={`lg:col-span-6 space-y-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Headline Text */}
              <div className="lg:pl-8 lg:pt-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                  Everything you need<br />for a Fairy clean.
                </h3>
              </div>

              {/* Bottom Image - Person washing dishes */}
              <div className="w-full h-80 md:h-96 lg:h-80 rounded-3xl overflow-hidden -ml-40">
                <img 
                  src="/about.jpg" 
                  alt="Person washing dishes" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}