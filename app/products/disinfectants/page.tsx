'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

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

export default function DisinfectantsPage() {
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

      {/* Disinfectants Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image Side - Circular */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
                <Image
                  src="/disinfectants.jpg"
                  alt="Disinfectants"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
      
            {/* Content Side */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a5c] underline decoration-[#1a0a5c] underline-offset-4 mb-6">
                Disinfectants
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our range of industrial-strength cleaning agents designed for maximum efficiency.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Footer Call to Action */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#1a0a5c] text-[#1a0a5c] font-bold rounded-full hover:bg-[#1a0a5c] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
               <ShoppingBag className="w-5 h-5" />
               Show All Products
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}