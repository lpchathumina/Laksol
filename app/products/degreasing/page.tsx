'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const heroList: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  },
  hidden: {}
};

const heroShow: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function DegreasingPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section - Loads First */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/Degreasing.jpg"
            alt="Degreasing Products"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroList}
            className="text-center"
          >
            <motion.h1 
              variants={heroShow} 
              className="text-white text-4xl sm:text-5xl md:text-6xl md:mt-24 font-bold tracking-tight leading-tight"
            >
              Degreasing Products
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              HEAVY DUTY KITCHEN DEGREASERS
            </motion.p>
          </motion.div>
        </div> 

        {/* Degreasers Section - Option 1 */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[300px] lg:h-[450px]">
                  <Image
                    src="/degreaser-kitchen.jpg"
                    alt="Degreasers"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 lg:to-white" />
                </div>

                {/* Content Side */}
                <div className="bg-gradient-to-br from-[#003B73] to-[#001d3a] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <span className="text-blue-300 text-sm font-medium tracking-wider uppercase mb-4">
                    Heavy Duty Cleaning
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Degreasers
                  </h2>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                    Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-1 bg-blue-400 rounded-full" />
                    <span className="text-blue-300 text-sm">Professional Grade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}