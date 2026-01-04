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
    <section
      ref={sectionRef}
      className="bg-white py-10 md:py-1 md:mt-10 overflow-hidden text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2
          className={`text-black text-center text-3xl md:text-4xl font-bold uppercase tracking-wide mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          Who We Are
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT SIDE */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            {/* Top Image */}
            <div className="w-full h-64 md:h-80 lg:w-[720px] rounded-2xl overflow-hidden">
              <img
                src="/about.jpg"
                alt="Cleaning products"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-gray-800 text-sm md:text-base leading-relaxed max-w-lg">
              Founded in 2010, Lakmina Products has grown from a local manufacturer 
              into a trusted name in the cleaning industry. We specialize in producing 
              high-quality, eco-friendly cleaning solutions for homes, businesses, 
              and industrial facilities across Sri Lanka and beyond.
            </p>

            {/* Button */}
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2.5 rounded-lg transition-colors duration-300">
              See More...
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`lg:col-span-6 space-y-8 transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Headline */}
            <h3 className="text-2xl md:text-3xl font-medium leading-tight lg:ml-28 lg:mt-10 italic">
              Everything you need for a 
              <br />
              Fairy clean.
            </h3>

            {/* Bottom Image */}
            <div className="w-full h-72 md:h-80 rounded-2xl overflow-hidden">
              <img
                src="/about.jpg"
                alt="Professional cleaning service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}