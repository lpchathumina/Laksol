'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WhoWeAreOverlap() {
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background Text (Ghost Heading) */}
        {/* <h1 
          className="-mt-26 absolute -top-8 left-0 text-[8rem] md:text-[10rem] lg:text-[12rem] font-black text-gray-100 select-none pointer-events-none hidden lg:block leading-none"
          aria-hidden="true"
        >
          ABOUT
        </h1> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left: Image */}
          <div 
            className={`w-full relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative aspect-video md:aspect-square w-full overflow-hidden rounded-sm shadow-xl group">
              <Image
                src="/about.jpg"
                alt="Lakmina Products Workspace"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div 
            className={`w-full transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Section Label */}
            <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-2 block">
              Our Story
            </span>
            
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 md:mb-6 italic text-gray-900">
              Who We Are
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed md:leading-loose mb-6 md:mb-8 text-sm md:text-base">
              Founded in 2010, Lakmina Products has grown from a local manufacturer 
              into a trusted name. We bridge the gap between industrial power 
              and environmental responsibility, delivering professional-grade 
              cleaning solutions that businesses rely on.
            </p>
            
            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <div className="h-px w-8 md:w-12 bg-black"></div>
              <Link 
                href="/about"
                className="text-xs uppercase tracking-[0.2em] font-bold text-gray-900 hover:text-gray-500 transition-colors duration-300 group flex items-center gap-2"
              >
                Explore Story
                <svg 
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}