'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Book = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/resort-beach.jpg"
          alt="Abu Dhabi Resort Beach"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Abu Dhabi Escape Awaits
            <br />
            Book Your Experience Right Now
          </h1>

          {/* Description */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you wish to relax by the pool, embark on a desert adventure, or explore the rich cultural heritage of Abu Dhabi, our resort offers a range of activities to suit your every mood.
          </p>

          {/* Book Now Button */}
          <div className="flex justify-center">
            <Link
              href="/book"
              className="group inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-semibold px-10 py-4 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <span className="text-lg">BOOK NOW</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;