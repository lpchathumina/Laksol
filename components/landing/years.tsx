'use client';

import React, { useState, useEffect, useRef } from 'react';

interface StatItemProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

function StatItem({ end, label, suffix = '', duration = 2000 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
        {count}
        {suffix}
      </div>
      <div className="text-lg md:text-xl text-gray-600 mt-2">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* Divider lines between stats on larger screens */}
          <div className="relative">
            <StatItem end={1} label="Projext" suffix="K" />
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gray-300" />
          </div>
          
          <div className="relative">
            <StatItem end={100} label="Customers" />
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gray-300" />
          </div>
          
          <div className="relative">
            <StatItem end={35} label="Employ" />
            <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gray-300" />
          </div>
          
          <div>
            <StatItem end={10} label="Years" />
          </div>
        </div>
      </div>
    </div>
  );
}