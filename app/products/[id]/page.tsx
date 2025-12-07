'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ItemDescription = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedLiter, setSelectedLiter] = useState(5);
  const [quantity, setQuantity] = useState(2);

  const productImages = [
    '/products/harpic-1.jpg',
    '/products/harpic-2.jpg',
    '/products/harpic-3.jpg'
  ];

  const colors = [
    { name: 'black', value: '#000000' },
    { name: 'pink', value: '#FF6B9D' }
  ];

  const literOptions = [1, 2, 5, 10];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const [openSections, setOpenSections] = useState({
    description: true,
    safety: true,
    usage: true,
    warnings: true
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[400px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/about.jpg"
            alt="About Us Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* About Us Badge */}
            <div className="inline-flex items-center">
              <div className="relative mt-100">
                <div className="bg-gray-700/80 backdrop-blur-sm px-8 py-4 flex items-center">
                  <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                    ITEM DESCRIPTION
                  </span>
                </div>
                {/* Arrow pointing right */}
                <div className="absolute right-0 top-0 h-full w-0 border-t-[28px] md:border-t-[32px] border-b-[28px] md:border-b-[32px] border-l-[20px] md:border-l-[24px] border-t-transparent border-b-transparent border-l-gray-700/80 translate-x-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 pr-6 md:pr-8 mr-20 mt-10">
          {/* Vertical Line */}
          <div className="w-0.5 h-16 bg-gray-800" />
          
          {/* Facebook Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Facebook"
          >
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </Link>

          {/* WhatsApp Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="WhatsApp"
          >
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
          </Link>

          {/* Down Arrow */}
          <div className="mt-4">
            <svg
              className="w-6 h-6 text-gray-800 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Product Image */}
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                <Image
                  src={productImages[currentImageIndex]}
                  alt="Fairy Professional"
                  fill
                  className="object-contain p-8"
                />
                
                {/* LAFKSOL Text Overlay */}
                <div className="absolute left-8 top-0 bottom-0 flex items-center">
                  <div className="text-white/30 text-6xl md:text-7xl font-black tracking-wider"
                    style={{ 
                      writingMode: 'vertical-rl',
                      textOrientation: 'mixed',
                      fontFamily: 'Impact, Haettenschweiler, Arial Black, sans-serif',
                      letterSpacing: '0.1em'
                    }}
                  >
                    LAFKSOL
                  </div>
                </div>
              </div>

              {/* Image Navigation */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 font-semibold">IMAGES</span>
                  <span className="text-gray-900 font-semibold">{productImages.length}K</span>
                  <span className="text-gray-600">ADD KRNNA</span>
                </div>
                
                <button
                  onClick={handleNextImage}
                  className="w-12 h-12 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  Fairy Professional
                </h1>
                
                {/* Rating and Stock */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm">(150 Reviews)</span>
                  <span className="text-green-500 text-sm font-medium">In Stock</span>
                </div>

                {/* Product Description */}
                <p className="text-gray-900 text-xl mb-2">
                  Washing Up Liquid
                </p>

                {/* Price */}
                <p className="text-3xl font-bold text-gray-900">
                  400 LKR
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-300"></div>

              {/* Colors */}
              <div>
                <p className="text-gray-900 font-semibold mb-3">Colours:</p>
                <div className="flex items-center gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color.name ? 'border-gray-900 scale-110' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.value }}
                      aria-label={`Select ${color.name} color`}
                    />
                  ))}
                </div>
              </div>

              {/* Liter Options */}
              <div>
                <p className="text-gray-900 font-semibold mb-3">Liter</p>
                <div className="flex items-center gap-3">
                  {literOptions.map((liter) => (
                    <button
                      key={liter}
                      onClick={() => setSelectedLiter(liter)}
                      className={`px-5 py-2 border-2 rounded-md font-semibold transition-all ${
                        selectedLiter === liter
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {liter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Buy Now */}
              <div className="flex items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border-2 border-gray-300 rounded-md">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-3 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-6 py-3 font-semibold border-x-2 border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-3 bg-red-500 text-white hover:bg-red-600 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>

                {/* Buy Now Button */}
                <button className="flex-1 bg-red-500 text-white font-semibold px-8 py-3.5 rounded-md hover:bg-red-600 transition-colors">
                  Buy Now
                </button>

                {/* Wishlist Button */}
                <button className="w-12 h-12 border-2 border-gray-300 rounded-md flex items-center justify-center hover:border-red-500 hover:text-red-500 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Free Delivery Section */}
              <div className="border-2 border-gray-300 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Free Delivery</h3>
                    <p className="text-sm text-gray-600 mb-3 underline">
                      Enter your postal code for Delivery Availability
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      "We offer free delivery for wholesale orders from shops and companies. For individual items or small purchases, please feel free to visit our location to pick them up."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Divider */}
        <div className="border-t border-gray-300 mb-12"></div>

        {/* Product Description Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('description')}
            className="flex items-center justify-center gap-3 mx-auto mb-6 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <span className="font-semibold text-gray-900">Product Description</span>
            <div className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-transform ${
              openSections.description ? '' : 'rotate-180'
            }`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>

          {openSections.description && (
            <div className="space-y-6">
              <p className="text-gray-700 text-center leading-relaxed">
                Fairy Professional Washing Up Liquid Antibacterial is a super concentrated liquid detergent for washing up and pre-soaking of tableware, pots & pans, kitchen utensils and other surfaces. Long-lasting efficient washing-up solution.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Kills 99.9% of bacteria on the sponge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Lifts grease and food residues from pots, pans, plates, cutlery, etc</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Dissolves grease easily</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Also suitable for other surfaces as windows, mirrors, tables & seating</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Recommended for professional use</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Safety & Ingredients Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('safety')}
            className="flex items-center justify-center gap-3 mx-auto mb-6 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <span className="font-semibold text-gray-900">Safety & Ingredients</span>
            <div className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-transform ${
              openSections.safety ? '' : 'rotate-180'
            }`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>

          {openSections.safety && (
            <div className="space-y-6">
              {/* Image */}
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/products/safety-cleaning.jpg"
                  alt="Safety & Ingredients"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Ingredients List */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ingredients We Use</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">15-30% Anionic Surfactants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">5-15% Non-Ionic Surfactants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Phenoxyethanol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Perfumes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Citronellol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Limonene</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-black rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Disinfectants</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Usage Instructions Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('usage')}
            className="flex items-center justify-center gap-3 mx-auto mb-6 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <span className="font-semibold text-gray-900">Usage Instructions</span>
            <div className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-transform ${
              openSections.usage ? '' : 'rotate-180'
            }`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>

          {openSections.usage && (
            <div className="bg-gray-100 rounded-lg p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                <strong>Dishes, pots & pans, crockery, cutlery & glasses:</strong> Fill sink with hand hot water and dose product in sink. Dose: 2 caps or 2 pumps to 5 litres of water. Wash and rinse. Pre-soaking: Dose into bowl.<br /><br />
                <strong>Windows, mirrors, tables & seating:</strong> Add a few droplets in a spray bottle. Fill up with water. Spray surface and wipe with cloth.<br /><br />
                <strong>Sponge care:</strong> Add a drop. Squeeze with water and leave to soak for full dosage instructions. Recommended for professional use. Safety data sheet available for professional user on request.
              </p>
            </div>
          )}
        </div>

        {/* Warnings Section */}
        <div className="mb-8">
          <button
            onClick={() => toggleSection('warnings')}
            className="flex items-center justify-center gap-3 mx-auto mb-6 bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-lg transition-colors"
          >
            <span className="font-semibold text-gray-900">Warnings</span>
            <div className={`w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center transition-transform ${
              openSections.warnings ? '' : 'rotate-180'
            }`}>
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </button>

          {openSections.warnings && (
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6">
              <p className="text-gray-700 text-sm leading-relaxed">
                Keep out of reach of children. Avoid contact with eyes. In case of contact with eyes, rinse immediately with plenty of water and seek medical advice. If swallowed, seek medical advice immediately and show this container or label.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default ItemDescription;