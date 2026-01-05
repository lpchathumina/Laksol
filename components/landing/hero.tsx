'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
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
    <section ref={sectionRef} className="relative min-h-screen bg-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Text Content */}
          <div 
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight uppercase">
              WELCOME TO<br />LAKSOL
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight">
              8 Focus Areas For a Clean and<br />Sanitary Kitchen.
            </h2>

            {/* Description */}
            <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-lg">
              Fairy Professional Washing Up Liquid Antibacterial is a super concentrated liquid detergent for
            </p>

            {/* Contact Button */}
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold text-lg rounded-lg transition-colors duration-300 shadow-lg">
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              CONTACT US
            </button>
          </div>

          {/* Right Side - Product Bottles */}
          <div 
            className={`relative h-[500px] md:h-[600px] transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Small Bottle - Top Left */}
            <div className="absolute top-0 left-0 w-24 md:w-32 h-32 md:h-40 z-10">
              <Image
                src="/k.png"
                alt="Harpic Product"
                fill
                className="object-contain"
              />
            </div>

            {/* Small Bottle - Top Center Left */}
            <div className="absolute top-8 left-20 md:left-28 w-28 md:w-36 h-36 md:h-44 z-20">
              <Image
                src="/k.png"
                alt="Harpic Product"
                fill
                className="object-contain"
              />
            </div>

            {/* Large Bottle - Center (Main) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-80 md:h-96 z-30">
              <Image
                src="/k.png"
                alt="Harpic Bathroom Cleaning Spray"
                fill
                className="object-contain"
              />
            </div>

            {/* Small Bottle - Top Right */}
            <div className="absolute top-8 right-20 md:right-28 w-28 md:w-36 h-36 md:h-44 z-20">
              <Image
                src="/k.png"
                alt="Harpic Product"
                fill
                className="object-contain"
              />
            </div>

            {/* Small Bottle - Top Far Right */}
            <div className="absolute top-0 right-0 w-24 md:w-32 h-32 md:h-40 z-10">
              <Image
                src="/k.png"
                alt="Harpic Product"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons - Fixed Right Side */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {/* Facebook */}
        <Link
          href="https://facebook.com"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="Facebook"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </Link>

        {/* WhatsApp */}
        <Link
          href="https://wa.me/"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 flex items-center justify-center transition-colors duration-300 shadow-lg"
          aria-label="WhatsApp"
        >
          <svg 
            className="w-6 h-6 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </Link>
      </div>

        {/* Scroll Down Arrow */}
        <div className="w16 h-16 absolute bottom-22 left-1/2 -translate-x-1/2 z-40">
          <svg 
            className="w-6 h-6 text-gray-800 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
    </section>
  );
}