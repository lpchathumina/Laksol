'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; // Assuming framer-motion is used
import { X, Minus, Plus, ShoppingCart, CreditCard } from 'lucide-react'; // Assuming lucide-react is used

interface Product {
  id: number;
  name: string;
  size: string;
  image: string;
  description?: string;
  price?: number; // Added price
}

interface ProductDetailsProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetails({ product, isOpen, onClose }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Mocking 3 images for the product (using the same one for now)
  const images = [product.image, product.image, product.image];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left Side: Images */}
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-gray-50 flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex items-center justify-center">
              <Image
                src={images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-contain p-4 transition-all duration-300"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-4 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === idx
                      ? 'border-[#2727f6] ring-2 ring-[#2727f6]/20'
                      : 'border-transparent hover:border-gray-200'
                  } bg-white`}
                >
                  <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-2">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                  In Stock
                </span>
                <span className="text-sm text-gray-500">ID: #{product.id}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-[#1a0a5c] mb-2">{product.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description || "High-quality industrial degreaser suitable for heavy-duty cleaning tasks. Effectiveness guaranteed."}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-[#2727f6]">
                  ${product.price ? product.price.toFixed(2) : "29.99"}
                </span>
                {/* Optional: Original price for discount effect */}
                 <span className="text-lg text-gray-300 line-through font-medium">$39.99</span>
              </div>

              {/* Attributes */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-gray-900 w-20">Volume:</span>
                  <div className="flex items-center gap-2">
                     <button className="px-4 py-2 rounded-lg border-2 border-[#1a0a5c] bg-[#1a0a5c] text-white font-medium text-sm transition-all">
                        {product.size}
                     </button>
                     <button className="px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 text-gray-600 font-medium text-sm transition-all">
                        5L
                     </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                   <span className="text-sm font-semibold text-gray-900 w-20">Quantity:</span>
                   <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-black transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                   </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 mt-auto">
              <button className="w-full py-4 bg-[#1a0a5c] hover:bg-[#2727f6] text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="w-full py-4 bg-blue-50 hover:bg-blue-100 text-[#1a0a5c] font-bold rounded-xl border border-blue-200 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                <CreditCard className="w-5 h-5" />
                Buy Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
