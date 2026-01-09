'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Book from '@/components/layout/book';

// --- ANIMATION VARIANTS ---

// Hero Text Animations
const heroList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const heroShow = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Social Sidebar Animations
const sidebarContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1.0 // Starts after the main text appears
    }
  }
};

const sidebarItem = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const lineGrow = {
  hidden: { height: 0 },
  visible: { height: '4rem', transition: { duration: 0.8, ease: "easeInOut" } }
};

const Solution = () => {
  // State for kitchen image markers section
  const [kitchenSelectedArea, setKitchenSelectedArea] = useState<number | null>(null);

  // State for numbered list section
  const [listSelectedArea, setListSelectedArea] = useState(1);

  // Data for kitchen image markers
  const kitchenFocusAreas = [
    {
      id: 1,
      position: 'bottom-16 left-32',
      title: 'Countertops & Work Surfaces',
      description: 'Clean and sanitize all countertops with approved disinfectants. Ensure proper contact time for effective sanitization.'
    },
    {
      id: 2,
      position: 'bottom-16 right-80',
      title: 'Sinks & Faucets',
      description: 'Thoroughly clean sinks and faucets. Pay special attention to handles and spouts where bacteria accumulate.'
    },
    {
      id: 3,
      position: 'top-32 right-64',
      title: 'Cooking Areas & Stovetops',
      description: 'Remove grease and food residue from cooking surfaces. Use appropriate degreasers for effective cleaning.'
    },
    {
      id: 4,
      position: 'top-32 left-64',
      title: 'Small Appliances',
      description: 'Clean and sanitize small appliances regularly. Unplug before cleaning and follow manufacturer guidelines.'
    },
    {
      id: 5,
      position: 'top-44 left-96',
      title: 'Storage & Cabinets',
      description: 'Wipe down cabinet fronts and handles. Organize storage areas to prevent cross-contamination.'
    }
  ];

  // Data for numbered list section
  const listFocusAreas = [
    { id: 1, name: 'Sink' },
    { id: 2, name: 'Tap' },
    { id: 3, name: 'Wall' },
    { id: 4, name: 'Cubed' },
    { id: 5, name: 'Sink' }
  ];

  const products = [
    { id: 1, name: 'Product Name', description: 'Antibacterial 2X5L', image: '/products/purple-bottle-1.png' },
    { id: 2, name: 'Product Name', description: 'Antibacterial 2X5L', image: '/products/purple-bottle-2.png' },
    { id: 3, name: 'Product Name', description: 'Antibacterial 2X5L', image: '/products/purple-bottle-3.png' }
  ];

  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden bg-black">
        
        {/* Background Image with Zoom Effect */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/solution_hero.jpg"
            alt="Solutions Background"
            fill
            priority
            className="object-cover object-center opacity-70"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10" />

        {/* Centered Content */}
        <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
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
              CLEANING SOLUTIONS
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              Effective cleaning regimens and high-efficiency products for a safer environment.
            </motion.p>
          </motion.div>
        </div> 

        {/* --- SOCIAL MEDIA ICONS (RIGHT SIDE) --- */}
        <motion.div 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-4 pr-6 md:pr-8 mr-4 md:mr-10"
          initial="hidden"
          animate="visible"
          variants={sidebarContainer}
        >
          {/* Animated Vertical Line */}
          <motion.div 
            variants={lineGrow} 
            className="w-0.5 bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
          />
          
          {/* Facebook Icon */}
          <motion.div variants={sidebarItem}>
            <Link
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="Facebook"
            >
              <Image 
                src="/icons/facebook.svg" 
                alt="Facebook" 
                width={24} 
                height={24} 
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* WhatsApp Icon */}
          <motion.div variants={sidebarItem}>
            <Link
              href="#"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 group shadow-lg"
              aria-label="WhatsApp"
            >
              <Image 
                src="/icons/whatsapp.svg" 
                alt="WhatsApp" 
                width={24} 
                height={24} 
                className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Animated Down Arrow */}
          <motion.div variants={sidebarItem} className="mt-4">
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Kitchen Focus Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Description */}
          <div className="text-center mb-12">
            <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-5xl mx-auto mb-8">
              An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing restaurant cleaning expenditures is developing more effective cleaning procedures and using highly efficient products that won&apos;t compromise on the critical goal of food, customer and staff safety
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              8 Focus Areas For a Clean and Sanitary Kitchen.
            </h2>

            <p className="text-gray-700 text-base md:text-lg">
              Select a number to learn how to best clean that area
            </p>
          </div>

          {/* Kitchen Image with Numbered Markers */}
          <div className="relative w-full rounded-3xl overflow-hidden mb-8">
            {/* Kitchen Background Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/kitchen/modern-kitchen.jpg"
                alt="Modern Kitchen"
                fill
                className="object-cover"
              />

              {/* Numbered Circular Markers */}
              {kitchenFocusAreas.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setKitchenSelectedArea(kitchenSelectedArea === area.id ? null : area.id)}
                  className={`absolute ${area.position} w-12 h-12 md:w-14 md:h-14 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-xl md:text-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:scale-110 ${
                    kitchenSelectedArea === area.id ? 'ring-4 ring-blue-500 scale-110' : ''
                  }`}
                  aria-label={`Focus area ${area.id}`}
                >
                  {area.id}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Area Information */}
          {kitchenSelectedArea && (
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 md:p-8 mb-8 animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {kitchenFocusAreas.find(a => a.id === kitchenSelectedArea)?.title}
              </h3>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {kitchenFocusAreas.find(a => a.id === kitchenSelectedArea)?.description}
              </p>
            </div>
          )}

          {/* Bottom Description */}
          <div className="text-center mt-8">
            <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-5xl mx-auto">
              It&apos;s recommended to clean ovens weekly. Make sure the oven has cooled completely before attempting to clean.
            </p>
          </div>
        </div>
      </section>

      {/* Numbered List with Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Numbered List */}
            <div className="lg:w-1/4">
              <div className="space-y-6">
                {listFocusAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => setListSelectedArea(area.id)}
                    className={`flex items-center gap-4 text-left w-full transition-colors ${
                      listSelectedArea === area.id ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                    }`}
                  >
                    <span className="text-4xl md:text-5xl font-black">
                      {area.id}.
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold">
                      {area.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Cards */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    className="group"
                  >
                    <div className="bg-gray-300 rounded-2xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
                      {/* Product Image */}
                      <div className="relative w-full h-48 mb-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Product Name */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>

                      {/* Product Description */}
                      <p className="text-base text-gray-700">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Book />
    </>
  );
};

export default Solution;