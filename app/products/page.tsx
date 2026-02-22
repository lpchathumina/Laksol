'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, ChevronRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

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

import { productCategories } from '../shop/product-data';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);

  const currentCategory = productCategories.find(c => c.id === activeCategory) || productCategories[0];

  return (
    <main className="w-full bg-white text-black min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Section */}
          <section className="relative isolate h-[50vh] md:h-[70vh] overflow-hidden">
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentCategory.heroImage}
                alt={currentCategory.title}
                fill
                priority
                className="object-cover object-center"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-black/50" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={heroList}
                className="text-center"
              >
                <motion.h1 
                  variants={heroShow} 
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                >
                  {currentCategory.title}
                </motion.h1>

                <motion.p 
                  variants={heroShow} 
                  className="mt-3 max-w-4xl mx-auto text-white/85 text-sm md:text-base leading-relaxed"
                >
                  {currentCategory.subtitle}
                </motion.p>
              </motion.div>
            </div> 
          </section>

          {/* Category Navigation - After Hero Section */}
          <section className="bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
              <div className="flex justify-start md:justify-center gap-8 md:gap-12 overflow-x-auto pb-4 md:pb-0">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative pb-3 text-sm md:text-base font-medium whitespace-nowrap transition-all duration-300
                      ${activeCategory === category.id 
                        ? 'text-red-500' 
                        : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    {category.title.replace(' Products', '')}
                    
                    {/* Underline Animation */}
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Description Section */}
          <section className="bg-white py-14 md:py-20">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex justify-center lg:justify-start"
                >
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <Image
                      src={currentCategory.detailImage}
                      alt={currentCategory.detailTitle}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {currentCategory.detailTitle}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {currentCategory.detailText}
                  </p>
                  {/* <div className="flex gap-3 justify-center lg:justify-start">
                    <button className="px-6 py-2.5 bg-gray-900 text-white font-medium rounded-lg hover:bg-black transition-colors">
                      Learn More
                    </button>
                    <button className="px-6 py-2.5 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                      <ShoppingBag size={18} />
                      Shop Now
                    </button>
                  </div> */}
                </motion.div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 md:py-24 bg-white mb-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 md:mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Our Products
                </h2>
                <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                  Explore our range of professional cleaning solutions designed for superior performance
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                {currentCategory.products.map((product, index) => (
                  <Link 
                    key={`${currentCategory.id}-${product.id}`}
                    href={`/shop/productdetails?id=${product.id}`}
                    className="block h-full cursor-pointer"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    >
                      {/* Image Area */}
                      <div className="relative h-[280px] p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/30 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-red-200/40" />
                        
                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 z-10">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-sm"
                          />
                        </div>

                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
                          <button className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-red-600 hover:bg-red-900 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                            <ShoppingCart size={16} />
                            Buy Now
                          </button>
                        </div>
                      </div>

                      {/* Details Area */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-red-500 transition-colors" title={product.name}>
                          {product.name}
                        </h3>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            {product.size}
                          </div>
                          <span className="font-bold text-[#1a0a5c]">LKR {product.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}