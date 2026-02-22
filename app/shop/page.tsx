'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight, ShoppingBag, X, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

import { allProducts as products } from './product-data';

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

// Use all products from centralized data and shuffle them for randomized view
const allProducts = [...products].sort(() => Math.random() - 0.5);

const ITEMS_PER_PAGE = 20;

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Filter products based on search
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    setShowSuggestions(false);
  };

  return (
    <main className="w-full bg-white text-black mb-40">
      {/* Hero Section */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/shop.jpg"
            alt="shop Products"
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
              All Products
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

      {/* Intro Paragraph */}
      <section className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#1a0a5c] mb-4 tracking-tight"
          >
            All Products 
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our professional-grade cleaning products designed to tackle the toughest grease and grime in commercial environments.
          </motion.p>
        </motion.div>
      </section>

      {/* Search Functionality */}
      <section className="max-w-3xl mx-auto px-4 mb-20 relative z-40">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full pl-12 pr-12 py-4 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md focus:shadow-xl outline-none transition-all duration-300 text-gray-800 text-lg placeholder:text-gray-400"
          />
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); setShowSuggestions(false); }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
          
          {/* Auto-suggestions */}
          <AnimatePresence>
            {showSuggestions && searchQuery.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute w-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
              >
                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                  {filteredProducts.slice(0, 5).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleSuggestionClick(product.name)}
                      className="w-full text-left px-6 py-4 hover:bg-red-50/50 transition-colors flex items-center gap-4 border-b border-gray-50 last:border-none group/item"
                    >
                      <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-white border border-gray-100 flex-shrink-0 group-hover/item:border-blue-200 transition-colors">
                        <Image src={product.image} alt="" fill className="object-contain p-1" />
                      </div>
                      <div className="flex-1">
                        <span className="block text-gray-800 font-semibold group-hover/item:text-red-500 transition-colors">{product.name}</span>
                        <span className="text-xs text-gray-500">{product.size}</span>
                      </div>
                    </button>
                  ))}
                  {filteredProducts.length === 0 && (
                    <div className="px-6 py-8 text-center text-gray-500">
                      <p>No products found matching "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          <AnimatePresence mode='wait'>
            {currentProducts.map((product, index) => (
              <Link 
                key={product.id}
                href={`/shop/productdetails?id=${product.id}`}
                className="block h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Image Area */}
                  <div className="relative h-[280px] p-8 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100/30 rounded-full blur-3xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-red-200/40" />
                    
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
                      <span className="font-bold text-[#1a0a5c]">LKR {product.price?.toLocaleString()}</span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {currentProducts.length === 0 && (
          <div className="text-center py-24 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 text-gray-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">We couldn't find any products matching "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(''); }}
              className="mt-6 text-[#2727f6] font-semibold hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-6 mt-12 pb-8">
          <button
            onClick={() => {
              setCurrentPage(p => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:border-red-500 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Previous
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  currentPage === page
                    ? 'bg-gray-400 text-white shadow-xl shadow-blue-900/20 transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-100 hover:text-red-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setCurrentPage(p => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 hover:border-red-500 hover:text-red-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-gray-200 disabled:hover:text-gray-700 transition-all duration-300 shadow-sm"
          >
            Next
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}
    </main>
  );
}
