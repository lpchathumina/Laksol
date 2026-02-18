'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag, ChevronRight } from 'lucide-react';

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

const productCategories = [
  {
    id: 'degreasing',
    title: "Degreasing Products",
    subtitle: "HEAVY DUTY KITCHEN DEGREASERS",
    heroImage: "/Degreasing.jpg",
    detailTitle: "Professional Degreasers",
    detailImage: "/deg.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" }
    ]
  },
  {
    id: 'dishwashing',
    title: "Dishwashing Products",
    subtitle: "MANUAL AND AUTO DISHWASHING SOLUTIONS FOR SPARKLING CLEANLINESS",
    heroImage: "/Dishwashing.jpg",
    detailTitle: "Dishwashing",
    detailImage: "/dishwashing.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" }
    ]
  },
  {
    id: 'handwash',
    title: "Handwash Products",
    subtitle: "GENTLE YET EFFECTIVE HAND CLEANSING FOR EVERYDAY HYGIENE",
    heroImage: "/handwash.jpg",
    detailTitle: "Handwash",
    detailImage: "/handwash.jpg",
    detailText: "Range hoods, fryers, ovens, walls and other tough greasy surfaces need a heavy duty degreaser to clean. These areas should be cleaned as needed. Rubbish and grease bins should be cleaned weekly.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" }
    ]
  },
  {
    id: 'high-pressure',
    title: "High Pressure Products",
    subtitle: "POWERFUL CLEANING SOLUTIONS FOR HIGH-PRESSURE WASHING SYSTEMS",
    heroImage: "/high-pressure.jpg",
    detailTitle: "High Pressure",
    detailImage: "/high-pressure.jpg",
    detailText: "Our high-pressure cleaning products are specially formulated to work with pressure washing equipment, delivering superior cleaning results on a variety of surfaces. Ideal for vehicles, buildings, and industrial equipment.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" }
    ]
  },
  {
    id: 'toilet-cleaner',
    title: "Toilet Cleaner Products",
    subtitle: "POWERFUL TOILET CLEANERS FOR A HYGIENIC AND FRESH RESTROOM ENVIRONMENT",
    heroImage: "/toilet-cleaner.jpg",
    detailTitle: "Toilet Cleaner",
    detailImage: "/toilet-cleaner.jpg",
    detailText: "Our toilet cleaners are formulated to tackle tough stains, limescale, and germs, leaving your toilet sparkling clean and fresh. Effective for both regular maintenance and deep cleaning.",
    products: [
      { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
      { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
      { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
      { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
      { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" }
    ]
  }
];

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
                        ? 'text-orange-500' 
                        : 'text-gray-500 hover:text-gray-700'}
                    `}
                  >
                    {category.title.replace(' Products', '')}
                    
                    {/* Underline Animation */}
                    {activeCategory === category.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-full"
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

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {currentCategory.products.map((product, index) => (
                  <motion.div
                    key={`${currentCategory.id}-${product.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative h-56 bg-gray-50 overflow-hidden flex items-center justify-center">
                      <div className="w-4/5 h-4/5 relative transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                        <button className="transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-lg font-medium text-xs md:text-sm flex items-center gap-2 shadow-md">
                          <Eye size={16} />
                          View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5 md:p-6">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base leading-snug mb-3 line-clamp-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-500 text-xs md:text-sm font-medium">
                          {product.size}
                        </p>
                        <button className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200">
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}