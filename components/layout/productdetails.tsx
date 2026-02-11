'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, Download, ChevronRight, ShoppingCart, CheckCircle2, Check } from 'lucide-react';
import Link from 'next/link';

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

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="w-full">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 mb-12">
        <Link href="/" className="hover:text-[#0061d4] transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link href="/shop" className="hover:text-[#0061d4] transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-[#0061d4]">{product.name}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left: Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-square bg-[#f9f9f9] rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-12 group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <div className="mb-8">
            <h2 className="text-[#0061d4] font-bold uppercase tracking-widest text-sm mb-2 italic">Laksol® Professional</h2>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a0a5c] leading-tight mb-6">
              {product.name}
            </h1>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#0061d4] border-b-2 border-transparent hover:border-[#0061d4] pb-1 transition-all">
                <FileText size={16} />
                View SDS
              </button>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-[#0061d4] border-b-2 border-transparent hover:border-[#0061d4] pb-1 transition-all">
                 <Download size={16} />
                 Download Info Sheet
              </button>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {product.description}. Professional-grade concentrated formula designed for maximum efficiency in high-traffic environments. 
              Ideal for commercial kitchens, industrial workspaces, and general maintenance.
            </p>

            <div className="bg-[#f0f7ff] border-l-4 border-[#0061d4] p-6 mb-8 rounded-r-xl">
               <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl font-black text-[#0061d4]">LKR {product.price.toLocaleString()}</span>
                  <span className="px-3 py-1 bg-white text-[#0061d4] text-[10px] font-black uppercase rounded-full shadow-sm">INC. TAX</span>
               </div>
               <p className="text-gray-500 text-sm font-semibold italic">Standard Volume: {product.size}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex-1 bg-[#0061d4] hover:bg-[#1a0a5c] text-white font-black py-4 px-8 rounded-full transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200 uppercase tracking-widest text-sm">
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               "High-performance degreasing",
               "Professional formula",
               "Safe for food contact surfaces",
               "Rapid action technology"
             ].map((benefit, i) => (
               <div key={i} className="flex items-center gap-3 text-sm text-gray-600 font-bold">
                  <CheckCircle2 size={18} className="text-[#0061d4] flex-shrink-0" />
                  {benefit}
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      {/* Centered Product Description */}
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
            
            {/* Left Column - Ingredients */}
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-8">
                Ingredients We Use
              </h3>
              
              <div className="flex flex-col gap-4">
                {[
                  "15-30% Anionic Surfactants",
                  "5-15% Non-Ionic Surfactants",
                  "Phenoxyethanol",
                  "Perfumes",
                  "Citronellol",
                  "Limonene",
                  "Disinfectants"
                ].map((ingredient, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-lg text-[#333] font-medium">
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Usage & Warnings */}
            <div className="flex flex-col gap-8">
              
              {/* Usage Instructions */}
              <div>
                <div className="inline-flex items-center gap-3 bg-[#e2e2e2] px-6 py-3 rounded-lg shadow-sm mb-6">
                  <span className="text-lg font-medium text-[#1a1a1a]">Usage Instructions</span>
                  <div className="w-6 h-6 rounded-full bg-gray-400/50 flex items-center justify-center">
                    <ChevronRight size={14} className="text-white -rotate-45" />
                  </div>
                </div>
                
                <div className="bg-[#f5f5f5] rounded-xl p-6">
                  <p className="text-sm md:text-base text-[#333] leading-relaxed">
                    <strong>Dishes, pots & pans, crockery, cutlery & glasses:</strong> Fill sink with hand hot water and dose product in sink. Dose: 2 caps or 2 manual pumps for a 40 -50l sink. Always rinse well after use.
                    <br /><br />
                    <strong>Widows, mirrors, tables & seating:</strong> Add a few droplets in a 600ml spray bottle, fill up with water. Spray surface and wipe with a dry or damp cloth. Rinse and dry hands after use. See pack for full dosage instructions. Recommended for professional use. Safety data sheet available for professional user on request.
                  </p>
                </div>
              </div>

              {/* Warnings */}
              <div>
                <div className="inline-flex items-center gap-3 bg-[#e2e2e2] px-6 py-3 rounded-lg shadow-sm mb-6">
                  <span className="text-lg font-medium text-[#1a1a1a]">Warnings</span>
                  <div className="w-6 h-6 rounded-full bg-gray-400/50 flex items-center justify-center">
                    <ChevronRight size={14} className="text-white -rotate-45" />
                  </div>
                </div>
                
                <div className="bg-[#f5f5f5] rounded-xl p-6">
                  <p className="text-sm md:text-base text-[#333] leading-relaxed">
                    <strong>Causes serious eye damage.</strong> Keep out of reach of children. IF IN EYES: Rinse cautiously with water for several minutes. Immediately call a POISON CENTER/doctor. Wear eye protection. IF SWALLOWED: Rinse mouth. Do NOT induce vomiting. Drink small amount of water to dilute. Contains Sodium Carbonate Peroxide, Trideceth-n.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}