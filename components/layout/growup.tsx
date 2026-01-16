'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { TrendingUp, Users, Building, BarChart3, ClipboardList } from 'lucide-react';

const timelineData = [
  {
    year: '2010',
    icon: TrendingUp,
    description: 'Founded Lakmina Products with a vision to revolutionize cleaning solutions in Sri Lanka.',
    image: '/timeline/2010.jpg'
  },
  {
    year: '2015',
    icon: Users,
    description: 'Expanded our team to 50+ employees and launched our flagship bathroom cleaning range.',
    image: '/timeline/2015.jpg'
  },
  {
    year: '2018',
    icon: Building,
    description: 'Opened our state-of-the-art manufacturing facility in Ratmalana Industrial Zone.',
    image: '/timeline/2018.jpg'
  },
  {
    year: '2022',
    icon: BarChart3,
    description: 'Achieved 100+ distributor partnerships across Sri Lanka and entered export markets.',
    image: '/timeline/2022.jpg'
  },
  {
    year: '2026',
    icon: ClipboardList,
    description: 'Continuing innovation with eco-friendly formulations and sustainable packaging.',
    image: '/timeline/2026.jpg'
  }
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <section className="relative bg-gray-900">
      {/* Background Image with transition */}
      <div className="fixed inset-0 z-0">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`absolute inset-0 transition-opacity duration-700 ${
              activeIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={item.image}
              alt={`Timeline ${item.year}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Header - Sticky */}
        <div className="sticky top-0 z-20 py-12 md:py-16 bg-gradient-to-b from-gray-900 via-gray-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                OUR
              </h2>
              <div className="flex flex-col">
                <span className="text-lg text-gray-400">Journey</span>
                <div className="relative">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    TIME
                  </span>
                  <div className="absolute -left-4 top-0 bottom-0 w-6 border-l-2 border-t-2 border-b-2 border-white rounded-l-full" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-400">Through</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex">
            {/* Left Side - Rising Line */}
            <div className="hidden md:flex flex-col items-center mr-8 lg:mr-16">
              <div className="relative h-full w-1">
                {/* Background line */}
                <div className="absolute top-0 bottom-0 w-1 bg-gray-700 rounded-full" />
                
                {/* Active line - grows based on scroll */}
                <div 
                  className="absolute bottom-0 w-1 bg-gradient-to-t from-red-500 via-red-400 to-orange-400 rounded-full transition-all duration-500"
                  style={{ 
                    height: `${((activeIndex + 1) / timelineData.length) * 100}%` 
                  }}
                />

                {/* Year markers on the line */}
                {timelineData.map((item, index) => (
                  <div
                    key={item.year}
                    className="absolute left-1/2 -translate-x-1/2 flex items-center"
                    style={{ 
                      bottom: `${(index / (timelineData.length - 1)) * 100}%`,
                      transform: 'translate(-50%, 50%)'
                    }}
                  >
                    <div 
                      className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                        index <= activeIndex 
                          ? 'bg-red-500 border-white scale-125' 
                          : 'bg-gray-600 border-gray-500'
                      }`}
                    />
                    <span 
                      className={`ml-4 text-sm font-bold transition-all duration-300 ${
                        index <= activeIndex ? 'text-white' : 'text-gray-500'
                      }`}
                    >
                      {item.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Content Cards */}
            <div className="flex-1">
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  ref={el => { timelineRefs.current[index] = el; }}
                  className="min-h-[70vh] flex items-center py-12"
                >
                  <div
                    className={`
                      w-full max-w-xl p-8 md:p-10 rounded-3xl
                      transition-all duration-500
                      ${activeIndex === index
                        ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl scale-100 opacity-100'
                        : 'bg-white/5 backdrop-blur-sm border border-white/10 scale-95 opacity-40'
                      }
                    `}
                  >
                    {/* Mobile Year Display */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div 
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          activeIndex === index ? 'bg-red-500' : 'bg-gray-500'
                        }`}
                      />
                      <span className="text-white/60 text-sm font-medium">{item.year}</span>
                    </div>

                    {/* Icon */}
                    <div 
                      className={`
                        inline-flex p-4 rounded-2xl mb-6 transition-all duration-300
                        ${activeIndex === index 
                          ? 'bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30' 
                          : 'bg-gray-700'
                        }
                      `}
                    >
                      <item.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Year - Desktop */}
                    <h3 className="hidden md:block text-6xl lg:text-7xl font-bold text-white mb-4">
                      {item.year}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                      {item.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-8 flex items-center gap-2">
                      {timelineData.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i <= activeIndex 
                              ? 'w-8 bg-red-500' 
                              : 'w-4 bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-[30vh]" />
      </div>
    </section>
  );
}