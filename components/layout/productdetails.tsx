'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart, CheckCircle2, Check, Minus, Plus, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  size: string;
  image: string;
  description: string;
  price: number;
}

interface ProductDetailsProps {
  product: Product;
}

// Size options with pricing
const sizeOptions = [
  { size: '1 Liter', price: 1250, wholesalePrice: 1100 },
  { size: '2 Liters', price: 2200, wholesalePrice: 1950 },
  { size: '5 Liters', price: 4800, wholesalePrice: 4200 },
];

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Accordion states
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);
  const [isUsageOpen, setIsUsageOpen] = useState(false);
  const [isWarningsOpen, setIsWarningsOpen] = useState(false);

  const currentPrice = sizeOptions[selectedSize].price;
  const currentWholesalePrice = sizeOptions[selectedSize].wholesalePrice;

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // WhatsApp icon component
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );

  // Accordion animation variants
  const accordionVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <div className="w-full">
      {/* ========== PRODUCT DETAILS SECTION ========== */}
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start mt-20">
        
        {/* Left Column: Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8 md:p-12 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Right Column: Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          
          {/* Product Name */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
            {product.name}
          </h1>
          
          {/* Simple Description */}
          <p className="text-base text-gray-500 leading-relaxed mb-8">
            {product.description}. Professional-grade concentrated formula designed for maximum efficiency in high-traffic environments.
          </p>

          {/* Size Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Size
            </label>
            <div className="flex flex-wrap gap-3">
              {sizeOptions.map((option, index) => (
                <button
                  key={option.size}
                  onClick={() => setSelectedSize(index)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 border-2 ${
                    selectedSize === index
                      ? 'bg-[#0061d4] text-white border-[#0061d4] shadow-lg shadow-blue-200'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#0061d4] hover:text-[#0061d4]'
                  }`}
                >
                  {option.size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Quantity
            </label>
            <div className="inline-flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#0061d4] transition-all duration-200"
              >
                <Minus size={18} />
              </button>
              <div className="w-16 h-12 flex items-center justify-center border-x-2 border-gray-200">
                <span className="text-lg font-bold text-gray-900">{quantity}</span>
              </div>
              <button
                onClick={increaseQuantity}
                className="w-12 h-12 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-[#0061d4] transition-all duration-200"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-8 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-xl md:text-2xl font-black text-gray-900">
                LKR {(currentPrice * quantity).toLocaleString()}
              </span>
              <span className="text-sm font-medium text-gray-400 line-through">
                LKR {((currentPrice * 1.15) * quantity).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                WHOLESALE
              </span>
              <span className="text-lg font-semibold text-green-600">
                LKR {(currentWholesalePrice * quantity).toLocaleString()}
              </span>
              <span className="text-xs text-gray-400">(Min. 10 units)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Add to Cart Button */}
            <button className="flex-1 bg-[#0061d4] hover:bg-[#004ba3] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5">
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>
            
            {/* WhatsApp Button */}
            <button className="sm:w-auto w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-0.5">
              <WhatsAppIcon />
              <span className="sm:hidden md:inline">Inquire</span>
            </button>
          </div>

        </motion.div>
      </div>

      {/* ========== PRODUCT DESCRIPTION SECTION ========== */}
      <div className="mt-20 py-16 border-t border-gray-100 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl w-full text-center"
        >
          {/* Section Badge */}
          <div className="inline-flex items-center gap-3 bg-[#e2e2e2] px-14 py-4 rounded-lg mb-12 shadow-sm">
            <span className="text-2xl font-medium text-[#1a1a1a] tracking-tight">Product Description</span>
            <div className="w-8 h-8 rounded-full bg-gray-400/50 flex items-center justify-center">
              <ChevronRight size={20} className="text-white -rotate-45" />
            </div>
          </div>

          {/* Description Text */}
          <p className="text-xl md:text-2xl text-[#1a1a1a] leading-[1.6] mb-16 px-4 md:px-12 font-medium">
            Professional {product.name} is a super concentrated liquid detergent specifically engineered for washing and pre-soaking of a wide range of kitchen and industrial surfaces. Long-lasting efficient washing-up solution for high-volume environments.
          </p>

          {/* Features List */}
          <div className="flex justify-center px-4">
            <div className="flex flex-col gap-6 text-left max-w-2xl">
              {[
                `Kills 99.9% of bacteria on high-touch surfaces`,
                "Lifts grease and food residues from pots, pans, plates, and cutlery",
                "Dissolves stubborn industrial grease and oils easily",
                "Also suitable for other hard surfaces as floors, tables & seating",
                "Strictly recommended for professional industrial use"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <span className="text-lg md:text-xl text-[#333] font-medium leading-normal">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ========== SAFETY & INGREDIENTS SECTION ========== */}
      <div className="mt-16 py-16 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          {/* Section Badge - Centered */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#e2e2e2] px-10 py-4 rounded-lg shadow-sm">
              <span className="text-xl md:text-2xl font-medium text-[#1a1a1a] tracking-tight">Safety & Ingredients</span>
              <div className="w-8 h-8 rounded-full bg-gray-400/50 flex items-center justify-center">
                <ChevronRight size={20} className="text-white -rotate-45" />
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] md:h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src="/safety.jpg"
              alt="Safety and cleaning"
              fill
              className="object-cover"
            />
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Column - Ingredients Accordion */}
            <div>
              {/* Ingredients Accordion Header */}
              <button
                onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
                className="w-full flex items-center justify-between text-left mb-4 group"
              >
                <h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] group-hover:text-[#0061d4] transition-colors">
                  Ingredients We Use
                </h3>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isIngredientsOpen ? 'bg-[#0061d4]' : 'bg-[#e2e2e2] group-hover:bg-[#0061d4]'}`}>
                  <motion.div
                    animate={{ rotate: isIngredientsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className={`transition-colors duration-300 ${isIngredientsOpen ? 'text-white' : 'text-gray-600 group-hover:text-white'}`} />
                  </motion.div>
                </div>
              </button>
              
              {/* Ingredients Accordion Content */}
              <AnimatePresence>
                {isIngredientsOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-4 pt-4 pb-2">
                      {[
                        "15-30% Anionic Surfactants",
                        "5-15% Non-Ionic Surfactants",
                        "Phenoxyethanol",
                        "Perfumes",
                        "Citronellol",
                        "Limonene",
                        "Disinfectants"
                      ].map((ingredient, i) => (
                        <motion.div 
                          key={i} 
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                            <Check size={14} className="text-white" strokeWidth={3} />
                          </div>
                          <span className="text-base md:text-lg text-[#333] font-medium">
                            {ingredient}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column - Usage & Warnings Accordions */}
            <div className="flex flex-col gap-6">
              
              {/* Usage Instructions Accordion */}
              <div>
                {/* Usage Accordion Header */}
                <button
                  onClick={() => setIsUsageOpen(!isUsageOpen)}
                  className="w-full flex items-center justify-between bg-[#e2e2e2] px-6 py-4 rounded-lg shadow-sm group hover:bg-[#d5d5d5] transition-colors"
                >
                  <span className="text-lg font-medium text-[#1a1a1a]">Usage Instructions</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isUsageOpen ? 'bg-[#0061d4]' : 'bg-gray-400/50 group-hover:bg-[#0061d4]'}`}>
                    <motion.div
                      animate={{ rotate: isUsageOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} className="text-white" />
                    </motion.div>
                  </div>
                </button>
                
                {/* Usage Accordion Content */}
                <AnimatePresence>
                  {isUsageOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f5f5f5] rounded-b-xl p-6 -mt-2">
                        <p className="text-sm md:text-base text-[#333] leading-relaxed">
                          <strong>Dishes, pots & pans, crockery, cutlery & glasses:</strong> Fill sink with hand hot water and dose product in sink. Dose: 2 caps or 2 manual pumps for a 40 -50l sink. Always rinse well after use.
                          <br /><br />
                          <strong>Widows, mirrors, tables & seating:</strong> Add a few droplets in a 600ml spray bottle, fill up with water. Spray surface and wipe with a dry or damp cloth. Rinse and dry hands after use. See pack for full dosage instructions. Recommended for professional use. Safety data sheet available for professional user on request.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Warnings Accordion */}
              <div>
                {/* Warnings Accordion Header */}
                <button
                  onClick={() => setIsWarningsOpen(!isWarningsOpen)}
                  className="w-full flex items-center justify-between bg-[#e2e2e2] px-6 py-4 rounded-lg shadow-sm group hover:bg-[#d5d5d5] transition-colors"
                >
                  <span className="text-lg font-medium text-[#1a1a1a]">Warnings</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isWarningsOpen ? 'bg-[#0061d4]' : 'bg-gray-400/50 group-hover:bg-[#0061d4]'}`}>
                    <motion.div
                      animate={{ rotate: isWarningsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} className="text-white" />
                    </motion.div>
                  </div>
                </button>
                
                {/* Warnings Accordion Content */}
                <AnimatePresence>
                  {isWarningsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={accordionVariants}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#f5f5f5] rounded-b-xl p-6 -mt-2">
                        <p className="text-sm md:text-base text-[#333] leading-relaxed">
                          <strong>Causes serious eye damage.</strong> Keep out of reach of children. IF IN EYES: Rinse cautiously with water for several minutes. Immediately call a POISON CENTER/doctor. Wear eye protection. IF SWALLOWED: Rinse mouth. Do NOT induce vomiting. Drink small amount of water to dilute. Contains Sodium Carbonate Peroxide, Trideceth-n.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}