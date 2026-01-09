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
  visible: { height: '4rem', transition: { duration: 0.8, ease: "easeInOut" } } // 4rem = h-16
};

// --- DATA ---
const products = [
  { 
    id: 1, 
    name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-1.png', 
    link: '/products/1' 
  },
  { 
    id: 2, 
    name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-2.png', 
    link: '/products/2' 
  },
  { 
    id: 3, 
    name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-3.png', 
    link: '/products/3' 
  },
  { 
    id: 4, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-4.png', 
    link: '/products/4' 
  },
  { 
    id: 5, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-5.png', 
    link: '/products/5' 
  },
  { 
    id: 6, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-6.png', 
    link: '/products/6' 
  },
  { 
    id: 7, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-7.png', 
    link: '/products/7' 
  },
  { 
    id: 8, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-8.png', 
    link: '/products/8' 
  },
  { 
    id: 9, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-9.png', 
    link: '/products/9' 
  },
  { 
    id: 10, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-10.png', 
    link: '/products/10' 
  },
  { 
    id: 11, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-11.png', 
    link: '/products/11' 
  },
  { 
    id: 12, name: 'Product Name', 
    description: 'Antibacterial 2X5L', 
    image: '/products/product-12.png', 
    link: '/products/12' 
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(3);

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
            src="/product_hero.jpg"
            alt="Products Background"
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
              OUR PRODUCTS
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              Explore our range of premium cleaning solutions designed for efficiency and hygiene.
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
              {/* Using CSS filter to make icon white initially, then original color on hover if needed, or just standard icon */}
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

      {/* --- ALL PRODUCTS SECTION (Unchanged) --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              All PRODUCT
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
              If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet, whether you're using SVG, Font Awesome, or a PNG), I can give you a precise code snippet to
            </p>
          </div>

          {/* Product Images Grid */}
          <div className="relative h-[500px] md:h-[600px] mb-16">
            <div className="absolute left-0 top-20 md:top-32 w-32 md:w-40 h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/products/cleaning-spray.jpg" alt="Cleaning spray" fill className="object-cover" />
            </div>
            <div className="absolute left-16 md:left-32 top-0 w-40 md:w-56 h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl z-10">
              <Image src="/products/sink-cleaning.jpg" alt="Sink cleaning" fill className="object-cover" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 w-56 md:w-72 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-20">
              <Image src="/products/dish-washing.jpg" alt="Dish washing" fill className="object-cover" />
            </div>
            <div className="absolute right-16 md:right-32 top-0 w-40 md:w-56 h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl z-10">
              <Image src="/products/window-cleaning.jpg" alt="Window cleaning" fill className="object-cover" />
            </div>
            <div className="absolute right-0 top-20 md:top-32 w-32 md:w-40 h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image src="/products/toilet-cleaning.jpg" alt="Toilet cleaning" fill className="object-cover" />
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Product Name
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              A main ingredient to a spotless kitchen is the right dish cleaning product. Creating an efficient auto dishwashing system is essential to the smooth operation of your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* --- NEW PRODUCTS GRID (Unchanged) --- */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              NEW PRODUCT
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={product.link}
                onClick={() => setSelectedProduct(index)}
                className={`group relative bg-gray-300 rounded-2xl overflow-hidden transition-all duration-300 ${
                  selectedProduct === index ? 'ring-4 ring-blue-500' : ''
                }`}
              >
                <div className="relative aspect-[3/4] p-6 flex flex-col items-center justify-between">
                  <div className="relative w-full h-48 flex items-center justify-center mb-4">
                    <Image src={product.image} alt={product.name} width={150} height={180} className="object-contain" />
                  </div>
                  <div className="text-center w-full">
                    <h3 className="text-gray-900 font-semibold text-base mb-1">{product.name}</h3>
                    <p className="text-gray-700 text-sm">{product.description}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/50 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <div className="bg-white text-gray-900 font-bold text-lg px-12 py-3 rounded-xl mb-4 shadow-lg">
                      VIEW
                    </div>
                    <p className="text-white text-sm font-medium px-4 text-center">{product.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Book />
    </>
  );
};

export default Products;