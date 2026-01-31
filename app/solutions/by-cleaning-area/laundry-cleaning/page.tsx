'use client';

import React , { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

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

// Focus areas data
const focusAreas = [
  { 
    id: 1, 
    name: 'Countertops & Backsplash',
    description: 'Keep countertops and backsplashes clean and sanitized. Wipe down surfaces after each use to prevent buildup of soap scum and bacteria.',
    position: { top: '75%', left: '18%' }
  },
  { 
    id: 2, 
    name: 'Glass & Mirrors',
    description: 'Streak-free mirrors and glass surfaces create a sparkling impression. Clean regularly to remove water spots and fingerprints.',
    position: { top: '35%', left: '25%' }
  },
  { 
    id: 3, 
    name: 'Sinks & Faucets',
    description: 'Sinks and faucets require daily attention to prevent water stains and mineral buildup. Polish chrome fixtures for a lasting shine.',
    position: { top: '58%', left: '38%' }
  },
  { 
    id: 4, 
    name: 'Showers & Tubs',
    description: 'Regular cleaning prevents mold, mildew, and soap scum buildup. Use appropriate cleaners for different surface materials.',
    position: { top: '28%', left: '42%' }
  },
  { 
    id: 5, 
    name: 'Floors',
    description: 'The foundation of a great customer experience, sparkling floors tell customers you care about clean. Floor cleaning should be done at least once a day, more if needed.',
    position: { top: '78%', left: '52%' }
  },
  { 
    id: 6, 
    name: 'Doors & Dispensers',
    description: 'High-touch areas like door handles and dispensers should be sanitized frequently throughout the day to reduce germ transmission.',
    position: { top: '22%', left: '58%' }
  },
  { 
    id: 7, 
    name: 'Toilets',
    description: 'Toilets require thorough cleaning and disinfection. Pay special attention to the bowl, seat, and exterior surfaces.',
    position: { top: '28%', left: '68%' }
  },
];

// Sample product data
const products = [
  { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
  { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
  { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
  { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
  { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" },
  { id: 6, name: "Hood Degreaser Plus", size: "800mL", image: "/k.png" },
  { id: 7, name: "Fryer Clean Solution", size: "800mL", image: "/k.png" },
  { id: 8, name: "All-Purpose Degreaser", size: "800mL", image: "/k.png" }
];

export default function LaundryCleaningPage() {
    const [activeArea, setActiveArea] = useState(5);
    const activeAreaData = focusAreas.find(area => area.id === activeArea);
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
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
              Laundry Cleaning Solutions
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              HEAVY DUTY KITCHEN DEGREASERS
            </motion.p>
          </motion.div>
        </div> 
      </section>

      <section className="py-16 px-6">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-black text-lg leading-relaxed">
                  Bathrooms are often reported as one of the most difficult and most important 
                  areas to clean. Because restrooms can potentially harbor bacteria, it is critical 
                  that they be cleaned frequently to maintain a clean and odor-free environment.
                </p>
              </div>
            </section>
      
            {/* Focus Areas Section */}
            <section className="pb-16 px-6">
              <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold">
                    <span className="text-blue-600">7 Focus Areas</span>
                    <span className="text-gray-800"> For Clean and Sanitary</span>
                  </h2>
                  <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                    Bathrooms.
                  </h2>
                  <p className="mt-10 text-black text-md">
                    Select a number to learn how to best clean that area
                  </p>
                </div>
      
                {/* Interactive Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar Navigation */}
                  <div className="lg:w-56 flex-shrink-0">
                    <nav className="space-y-1 ">
                      {focusAreas.map((area) => (
                        <button
                          key={area.id}
                          onClick={() => setActiveArea(area.id)}
                          className={`w-full text-left px-4 py-2.5 rounded transition-all duration-200 flex items-center gap-2 ${
                            activeArea === area.id
                              ? 'text-black font-semibold'
                              : 'text-black hover:text-blue-500 hover:bg-gray-50'
                          }`}
                        >
                          {activeArea === area.id && (
                            <span className="text-blue-500">▶</span>
                          )}
                          <span className={activeArea !== area.id ? 'ml-5' : ''}>
                            {area.id}. {area.name}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>
      
                  {/* Bathroom Illustration */}
                  <div className="flex-1">
                    <div className="relative w-full h-[60vh] rounded-lg overflow-hidden">
                      {/* Bathroom Image */}
                      <Image
                        src="/kitchen.png"
                        alt="Bathroom Focus Areas"
                        fill
                        className="object-cover"
                      />
      
                      {/* Numbered Hotspots */}
                      {focusAreas.map((area) => (
                        <button
                          key={area.id}
                          onClick={() => setActiveArea(area.id)}
                          style={{ top: area.position.top, left: area.position.left }}
                          className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            activeArea === area.id
                              ? 'bg-black text-white hover:scale-110 hover:bg-white hover:text-black scale-125 shadow-lg'
                              : 'bg-black text-white hover:scale-110 hover:bg-white hover:text-black scale-125 shadow-lg'
                          }`}
                        >
                          {area.id}
                        </button>
                      ))}
                    </div>
      
                    {/* Description Text */}
                    <div className="mt-6">
                      <p className="text-black text-md leading-relaxed">
                        {activeAreaData?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      
            {/* Products Section */}
            <section className="py-12 px-6 bg-white max-w-4xl mx-auto md:ml-110">
      
              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    {/* 1. Image Container with Overlay */}
                    <div className="relative h-64 p-8 flex items-center justify-center bg-white overflow-hidden">
                      {/* Background Blob decoration */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Product Image */}
                      <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 z-10">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
              
                      {/* Hover Overlay with Button */}
                      <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
                        <button className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-[#1a0a5c] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg">
                          <Eye className="w-4 h-4" />
                            View
                        </button>
                      </div>
                    </div>
              
                    {/* 2. Product Details */}
                    <div className="p-6 relative bg-white z-30">
                      <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between mt-3">
                        <p className="text-gray-500 text-sm font-medium flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          {product.size}
                        </p>
                        {/* Optional Arrow icon */}
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
    </main>
  );
}