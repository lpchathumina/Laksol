'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Minus, Plus, ShoppingCart, CreditCard, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { products } from '../data';

export default function ProductPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.id === Number(params.id));

  if (!product) {
    return notFound();
  }

  // Mocking 3 images for the product (using the same one for now)
  const images = [product.image, product.image, product.image];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/shop" className="hover:text-[#2727f6] transition-colors">Shop</Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium line-clamp-1">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side: Images */}
          <div className="w-full md:w-1/2 p-6 md:p-12 bg-gray-50/50 flex flex-col gap-6">
            {/* Main Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-8"
            >
              <Image
                src={images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-contain transition-all duration-300 hover:scale-105"
                priority
              />
            </motion.div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === idx
                      ? 'border-[#2727f6] ring-2 ring-[#2727f6]/20 shadow-md'
                      : 'border-transparent hover:border-gray-200 bg-white'
                  }`}
                >
                  <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
            <div className="mb-auto">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full border border-green-100">
                  In Stock
                </span>
                <span className="text-sm text-gray-400 font-mono">ID: #{product.id.toString().padStart(4, '0')}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-[#1a0a5c] mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-[#2727f6]">
                  LKR {product.price.toLocaleString()}
                </span>
              </div>

              <div className="prose prose-blue text-gray-600 leading-relaxed mb-8">
                <p>{product.description}</p>
                <p>Designed for professional environments, ensuring maximum efficiency and minimal effort. Safe for use on intended surfaces.</p>
              </div>

              <div className="h-px bg-gray-100 w-full mb-8"></div>

              {/* Attributes */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-6">
                  <span className="text-sm font-semibold text-gray-900 w-24">Size:</span>
                  <div className="flex items-center gap-3">
                     <button className="px-6 py-2.5 rounded-xl border-2 border-[#1a0a5c] bg-[#1a0a5c] text-white font-medium text-sm shadow-md transition-all">
                        {product.size}
                     </button>
                     <button className="px-6 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 font-medium text-sm transition-all">
                        5L
                     </button>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                   <span className="text-sm font-semibold text-gray-900 w-24">Quantity:</span>
                   <div className="inline-flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black transition-all hover:scale-105 active:scale-95"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-16 text-center font-bold text-gray-900 text-lg">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black transition-all hover:scale-105 active:scale-95"
                      >
                        <Plus size={16} />
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-100">
              <button className="flex-1 py-4 bg-[#1a0a5c] hover:bg-[#2727f6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg transform hover:-translate-y-1">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 py-4 bg-blue-50 hover:bg-blue-100 text-[#1a0a5c] font-bold rounded-xl border border-blue-200 transition-all duration-300 flex items-center justify-center gap-2 text-lg transform hover:-translate-y-1">
                <CreditCard className="w-5 h-5" />
                Buy Now
              </button>
            </div>
            
            <p className="mt-4 text-center text-xs text-gray-400">
               Secure checkout powered by heavy-duty encryption.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
