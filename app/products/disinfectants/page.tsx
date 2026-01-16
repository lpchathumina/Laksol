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
            src="/Disinfectants.jpg"
            alt="Disinfectants Products"
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
              Disinfectants Products
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              CLEAN AND DISINFECT FOR INFECTION PREVENTION AND CONTROL 
            </motion.p>
          </motion.div>
        </div> 
      </section>
    </main>
  );
}