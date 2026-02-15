'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart, CheckCircle2, Check, Minus, Plus, ChevronDown, Sparkles, Shield, AlertTriangle, BookOpen } from 'lucide-react';
import { AiOutlineSafety } from "react-icons/ai";

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

      {/* ========== PRODUCT DESCRIPTION SECTION - UPDATED UI ========== */}
      <div className="mt-20 py-16 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header - Modern Card Style */}
          <div className="flex justify-center mb-14">
            <div className="relative group">
              {/* Main badge */}
              <div className="relative inline-flex items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-4 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-700/50">
                <span className="text-lg md:text-2xl font-semibold text-white tracking-tight">
                  Product Description
                </span>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="relative mb-14">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl" />
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <p className="text-base md:text-lg text-slate-700 leading-relaxed text-center font-medium">
                Professional {product.name} is a super concentrated liquid detergent specifically engineered for washing and pre-soaking of a wide range of kitchen and industrial surfaces. Long-lasting efficient washing-up solution for high-volume environments.
              </p>
            </div>
          </div>

          {/* Features Grid - Modern Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { text: "Kills 99.9% of bacteria on high-touch surfaces" },
              { text: "Lifts grease and food residues from pots, pans, plates, and cutlery" },
              { text: "Dissolves stubborn industrial grease and oils easily" },
              { text: "Also suitable for other hard surfaces as floors, tables & seating" },
              { text: "Strictly recommended for professional industrial use"}
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative ${i === 4 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''}`}
              >
                <div className="relative flex items-center gap-5 bg-white rounded-2xl p-5 shadow-lg shadow-slate-100 border border-slate-100 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg">
                    <CheckCircle2 size={22} className="text-cyan-400" />
                  </div>
                  <span className="text-base md:text-lg text-slate-700 font-medium leading-snug">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ========== SAFETY & INGREDIENTS SECTION - UPDATED UI ========== */}
      <div className="mt-1 py-16 border-t border-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header - Matching Style */}
          <div className="flex justify-center mb-14">
            <div className="relative group">
              <div className="relative inline-flex items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-4 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-700/50">
                <AiOutlineSafety size={24} className="text-white" />
                <span className="text-xl md:text-2xl font-semibold text-white tracking-tight">
                  Safety & Ingredients
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image with Overlay */}
          <div className="relative w-full h-[280px] md:h-[380px] mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <Image
              src="/safety.jpg"
              alt="Safety and cleaning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl">
                Formulated with care using industry-standard ingredients for professional cleaning results
              </p>
            </div>
          </div>

          {/* Content Grid - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Left Column - Ingredients Accordion */}
            <div className="space-y-4">
              {/* Ingredients Accordion */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-100 border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
                  className="w-full flex items-center justify-between p-3 group transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isIngredientsOpen 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-400 shadow-lg shadow-blue-500/30'
                        : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <Image src="/pour.png" alt="Ingredients" width={24} height={24} className="text-bold"/>
                    </div>
                    <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                      isIngredientsOpen ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'
                    }`}>
                      Ingredients We Use
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isIngredientsOpen 
                      ? 'bg-blue-500 rotate-180' 
                      : 'bg-slate-100 group-hover:bg-blue-100'
                  }`}>
                    <ChevronDown size={20} className={`transition-colors ${isIngredientsOpen ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isIngredientsOpen && (
                    <motion.div
                      key="ingredients-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="rounded-lg p-5 space-y-3">
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
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-center gap-4 py-2 border-b border-slate-100 last:border-0"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center shadow-lg">
                                <CheckCircle2 size={22} className="text-cyan-400" />
                              </div>
                              <span className="text-base text-slate-700 font-medium">
                                {ingredient}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column - Usage & Warnings Accordions */}
            <div className="space-y-4">
              
              {/* Usage Instructions Accordion */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-100 border border-slate-100 overflow-hidden">
                <button
                  onClick={() => setIsUsageOpen(!isUsageOpen)}
                  className="w-full flex items-center justify-between p-3 group transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isUsageOpen 
                        ? 'bg-gradient-to-br from-blue-500 to-indigo-400 shadow-lg shadow-blue-500/30' 
                        : 'bg-slate-100 group-hover:bg-slate-200'
                    }`}>
                      <BookOpen size={22} className={`transition-colors ${isUsageOpen ? 'text-white' : 'text-slate-600'}`} />
                    </div>
                    <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                      isUsageOpen ? 'text-blue-600' : 'text-slate-800 group-hover:text-blue-600'
                    }`}>
                      Usage Instructions
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isUsageOpen 
                      ? 'bg-blue-500 rotate-180' 
                      : 'bg-slate-100 group-hover:bg-blue-100'
                  }`}>
                    <ChevronDown size={20} className={`transition-colors ${isUsageOpen ? 'text-white' : 'text-slate-600 group-hover:text-blue-600'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isUsageOpen && (
                    <motion.div
                      key="usage-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="rounded-lg p-5 space-y-5">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                              Dishes, pots & pans, crockery, cutlery & glasses
                            </h4>
                            <p className="text-slate-600 leading-relaxed pl-4">
                              Fill sink with hand hot water and dose product in sink. Dose: 2 caps or 2 manual pumps for a 40-50l sink. Always rinse well after use.
                            </p>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-slate-800 flex items-center gap-2">
                              Windows, mirrors, tables & seating
                            </h4>
                            <p className="text-slate-600 leading-relaxed pl-4">
                              Add a few droplets in a 600ml spray bottle, fill up with water. Spray surface and wipe with a dry or damp cloth. Rinse and dry hands after use. See pack for full dosage instructions. Recommended for professional use. Safety data sheet available for professional user on request.
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Warnings Accordion */}
              <div className={`rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                isWarningsOpen 
                  ? 'shadow-red-100 border-2 border-red-200' 
                  : 'shadow-slate-100 border border-slate-100'
              }`}>
                <button
                  onClick={() => setIsWarningsOpen(!isWarningsOpen)}
                  className={`w-full flex items-center justify-between p-3 group transition-colors ${
                    isWarningsOpen ? 'bg-red-50' : 'bg-white hover:bg-red-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isWarningsOpen 
                        ? 'bg-gradient-to-br from-red-500 to-orange-400 shadow-lg shadow-red-500/30' 
                        : 'bg-slate-100 group-hover:bg-red-100'
                    }`}>
                      <AlertTriangle size={22} className={`transition-colors ${isWarningsOpen ? 'text-white' : 'text-slate-600 group-hover:text-red-500'}`} />
                    </div>
                    <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                      isWarningsOpen ? 'text-red-600' : 'text-slate-800 group-hover:text-red-600'
                    }`}>
                      Warnings
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isWarningsOpen 
                      ? 'bg-red-500 rotate-180' 
                      : 'bg-slate-100 group-hover:bg-red-100'
                  }`}>
                    <ChevronDown size={20} className={`transition-colors ${isWarningsOpen ? 'text-white' : 'text-slate-600 group-hover:text-red-500'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isWarningsOpen && (
                    <motion.div
                      key="warnings-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 bg-red-50">
                        <div className="bg-white rounded-xl p-5 border-l-4 border-red-500">
                          <div className="flex items-start gap-3 mb-4">
                            <span className="text-2xl">⚠️</span>
                            <p className="text-red-600 font-bold text-lg">
                              Causes serious eye damage.
                            </p>
                          </div>
                          <ul className="space-y-2 text-slate-700">
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 font-bold">•</span>
                              Keep out of reach of children.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 font-bold">•</span>
                              <span><strong>IF IN EYES:</strong> Rinse cautiously with water for several minutes. Immediately call a POISON CENTER/doctor.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 font-bold">•</span>
                              Wear eye protection.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500 font-bold">•</span>
                              <span><strong>IF SWALLOWED:</strong> Rinse mouth. Do NOT induce vomiting. Drink small amount of water to dilute.</span>
                            </li>
                          </ul>
                          <div className="mt-4 pt-4 border-t border-red-100">
                            <p className="text-sm text-slate-500">
                              <strong>Contains:</strong> Sodium Carbonate Peroxide, Trideceth-n.
                            </p>
                          </div>
                        </div>
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