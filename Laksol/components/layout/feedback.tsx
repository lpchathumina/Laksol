'use client';

import React from 'react';
import Image from 'next/image';

const Feedback = () => {
  const testimonials = [
    {
      name: 'Fatima Khoury',
      username: 'dilatory_curtains_98',
      image: '/user.png',
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: 'Hassan Ali',
      username: 'turbulent_unicorn_29',
      image: '/user.png',
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    },
    {
      name: 'Jorge Martinez',
      username: 'nefarious_jellybeans_91',
      image: '/user.png',
      text: "The progress tracker is fantastic. It's motivating to see how much I've improved over time. The app has a great mix of common and challenging words."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-red-500 text-red-500 text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-wider">
            TESTIMONIALS
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            OUR TRUSTED CLIENTS
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  className="w-10 h-10 text-red-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {testimonial.text.split('challenging').map((part, i, arr) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-red-400 font-medium">challenging</span> 
                    )}
                  </React.Fragment>
                ))}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;