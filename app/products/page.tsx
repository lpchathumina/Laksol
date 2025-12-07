'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '@/components/layout/book';

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
    id: 4,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-4.png',
    link: '/products/4'
  },
  {
    id: 5,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-5.png',
    link: '/products/5'
  },
  {
    id: 6,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-6.png',
    link: '/products/6'
  },
  {
    id: 7,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-7.png',
    link: '/products/7'
  },
  {
    id: 8,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-8.png',
    link: '/products/8'
  },
  {
    id: 9,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-9.png',
    link: '/products/9'
  },
  {
    id: 10,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-10.png',
    link: '/products/10'
  },
  {
    id: 11,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-11.png',
    link: '/products/11'
  },
  {
    id: 12,
    name: 'Product Name',
    description: 'Antibacterial 2X5L',
    image: '/products/product-12.png',
    link: '/products/12'
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(3);

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
                    PRODUCTS
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

      {/* All Products Section */}
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
            {/* Left Small Image */}
            <div className="absolute left-0 top-20 md:top-32 w-32 md:w-40 h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/products/cleaning-spray.jpg"
                alt="Cleaning spray"
                fill
                className="object-cover"
              />
            </div>

            {/* Left Medium Image */}
            <div className="absolute left-16 md:left-32 top-0 w-40 md:w-56 h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/products/sink-cleaning.jpg"
                alt="Sink cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Center Large Image */}
            <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 w-56 md:w-72 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl z-20">
              <Image
                src="/products/dish-washing.jpg"
                alt="Dish washing"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Medium Image */}
            <div className="absolute right-16 md:right-32 top-0 w-40 md:w-56 h-56 md:h-64 rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/products/window-cleaning.jpg"
                alt="Window cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Small Image */}
            <div className="absolute right-0 top-20 md:top-32 w-32 md:w-40 h-48 md:h-56 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/products/toilet-cleaning.jpg"
                alt="Toilet cleaning"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
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

      {/* New Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              NEW PRODUCT
            </h2>
          </div>

          {/* Product Grid */}
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
                {/* Product Card */}
                <div className="relative aspect-[3/4] p-6 flex flex-col items-center justify-between">
                  {/* Product Image */}
                  <div className="relative w-full h-48 flex items-center justify-center mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={180}
                      className="object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center w-full">
                    <h3 className="text-gray-900 font-semibold text-base mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {product.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/50 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    {/* VIEW Button */}
                    <div className="bg-white text-gray-900 font-bold text-lg px-12 py-3 rounded-xl mb-4 shadow-lg">
                      VIEW
                    </div>
                    
                    {/* Product Name on Hover */}
                    <p className="text-white text-sm font-medium px-4 text-center">
                      {product.name}
                    </p>
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