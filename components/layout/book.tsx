'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Book = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section 
      ref={sectionRef}
      className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/21064.jpg"
          alt="Lakmina Products Manufacturing Facility"
          fill
          priority
          className={`object-cover object-center transition-all duration-1000 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h1 
            className={`text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-700 ${
              isVisible && imageLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Partner With Lakmina Products
            <br />
            <span className="text-white/90">Become Our Distributor Today</span>
          </h1>

          {/* Description */}
          <p 
            className={`text-white/85 text-sm sm:text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible && imageLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Join our growing network of distributors across Sri Lanka and beyond. 
            With over 14 years of excellence in manufacturing premium cleaning solutions, 
            Lakmina Products offers competitive margins, reliable supply, and dedicated partner support.
          </p>

          {/* Book Now Button */}
          <div 
            className={`flex justify-center transition-all duration-700 ${
              isVisible && imageLoaded 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/60 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full overflow-hidden transition-all duration-500 hover:border-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              {/* Button background animation */}
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              {/* Button content */}
              <span className="relative z-10 text-base sm:text-lg tracking-wide">GET STARTED</span>
              
              {/* Arrow with animation */}
              <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>

              {/* Pulse animation on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100">
                <span className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;