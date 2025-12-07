'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Feedback from '@/components/layout/feedback';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: '/products/harpic-bottle-1.png',
      title: 'Harpic Bathroom Cleaning Spray'
    },
    {
      image: '/products/harpic-bottle-2.png',
      title: 'Harpic Professional Cleaner'
    },
    {
      image: '/products/harpic-bottle-3.png',
      title: 'Harpic Antibacterial Spray'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const categories = [
    {
      title: 'Dishwash',
      image: '/categories/dishwash.jpg',
      link: '/products/dishwash',
      span: 'row-span-2'
    },
    {
      title: 'Handwash',
      image: '/categories/handwash.jpg',
      link: '/products/handwash',
      span: ''
    },
    {
      title: 'Floor Care',
      image: '/categories/floor-care.jpg',
      link: '/products/floor-care',
      span: ''
    },
    {
      title: 'Carwash',
      image: '/categories/carwash.jpg',
      link: '/products/carwash',
      span: ''
    },
    {
      title: 'Degreasing',
      image: '/categories/degreasing.jpg',
      link: '/products/degreasing',
      span: ''
    },
    {
      title: 'Disinfectants',
      image: '/categories/disinfectants.jpg',
      link: '/products/disinfectants',
      span: 'row-span-2'
    }
  ];

  const stats = [
    { value: '1K', label: 'Projext' },
    { value: '100', label: 'Customers' },
    { value: '35', label: 'Employ' },
    { value: '10', label: 'Years' }
  ];

  const services = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'cumulative trading volume to date'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'leading global and local crypto exchanges'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      title: 'Gravity Teammates (& growing)'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'of the global crypto spot trading volume'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'crypto-asset pairs'
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'liquidity'
    }
  ];

  return (
    <>
      <section className="relative bg-gray-200 min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 z-10">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-blue-600 leading-tight uppercase"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                WELCOME TO<br />LAKSOL
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">
                8 Focus Areas For a Clean and Sanitary Kitchen.
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                Fairy Professional Washing Up Liquid Antibacterial is a super concentrated liquid detergent for washing dishes, pots, pans, and kitchen surfaces. Our professional-grade formula ensures sparkling clean results with every use.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg uppercase tracking-wide"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right Side - Product Bottles */}
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Center Large Bottle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 h-auto z-20">
                <Image
                  src="/products/harpic-center.png"
                  alt="Harpic Bathroom Cleaning Spray"
                  width={400}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Top Left Small Bottle */}
              <div className="absolute left-0 top-8 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-1.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Top Center Small Bottle */}
              <div className="absolute left-1/3 top-0 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-2.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Top Right Small Bottle */}
              <div className="absolute right-1/4 top-12 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-3.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Bottom Right Small Bottle */}
              <div className="absolute right-0 top-1/3 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-4.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 pr-6 md:pr-8 z-30">
          {/* Vertical Line */}
          <div className="w-0.5 h-24 bg-gray-700" />
          
          {/* Facebook Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>

          {/* WhatsApp Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </Link>

          {/* Down Arrow */}
          <div className="mt-4">
            <svg
              className="w-6 h-6 text-gray-700 animate-bounce"
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

      <section className="bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-wider">
              PRODUCT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left Side - LAKSOL Text and Description */}
            <div className="relative">
              {/* Vertical LAKSOL Text */}
              <div className="absolute -left-8 md:-left-16 top-0 bottom-0 flex items-center">
                <div
                  className="text-gray-200 text-7xl md:text-8xl lg:text-9xl font-black tracking-wider"
                  style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    fontFamily: 'Impact, Haettenschweiler, Arial Black, sans-serif',
                    letterSpacing: '0.05em'
                  }}
                >
                  LAKSOL
                </div>
              </div>

              {/* Description Text */}
              <div className="pl-12 md:pl-20 lg:pl-24">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  Everything you need for a Fairy clean.
                </h3>
              </div>
            </div>

            {/* Center - Product Image with Navigation */}
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                className="absolute left-0 w-14 h-14 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors shadow-lg z-10"
                aria-label="Previous product"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative w-64 h-96 md:w-80 md:h-[480px]">
                <Image
                  src={products[currentIndex].image}
                  alt={products[currentIndex].title}
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 w-14 h-14 rounded-full bg-gray-400 hover:bg-gray-500 flex items-center justify-center transition-colors shadow-lg z-10"
                aria-label="Next product"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Side - Description and CTA */}
            <div className="space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing
              </p>

              <div>
                <Link
                  href="/products"
                  className="inline-block bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md"
                >
                  See More...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4">
          {/* Dishwash - Large Left */}
          <Link
            href={categories[0].link}
            className="relative rounded-3xl overflow-hidden group row-span-2 hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[0].image}
              alt={categories[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[0].title}
            </h3>
          </Link>

          {/* Handwash - Top Middle */}
          <Link
            href={categories[1].link}
            className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[1].image}
              alt={categories[1].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[1].title}
            </h3>
          </Link>

          {/* Carwash - Top Right */}
          <Link
            href={categories[3].link}
            className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[3].image}
              alt={categories[3].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[3].title}
            </h3>
          </Link>

          {/* Disinfectants - Large Right */}
          <Link
            href={categories[5].link}
            className="relative rounded-3xl overflow-hidden group row-span-2 hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[5].image}
              alt={categories[5].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[5].title}
            </h3>
          </Link>

          {/* Floor Care - Bottom Middle Left */}
          <Link
            href={categories[2].link}
            className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[2].image}
              alt={categories[2].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[2].title}
            </h3>
          </Link>

          {/* Degreasing - Bottom Middle Right */}
          <Link
            href={categories[4].link}
            className="relative rounded-3xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={categories[4].image}
              alt={categories[4].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-bold">
              {categories[4].title}
            </h3>
          </Link>
        </div>
      </div>
    </section>
     <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-wider">
            WHO WE ARE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Overlapping Images and Description */}
          <div className="relative">
            {/* Top Left Image Box */}
            <div className="relative w-full h-64 md:h-80 bg-gray-300 rounded-3xl overflow-hidden">
              <Image
                src="/about/cleaning-team-1.jpg"
                alt="Cleaning team"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Overlapping Image Box */}
            <div className="relative w-4/5 h-64 md:h-80 bg-gray-500 rounded-3xl overflow-hidden mt-8 ml-auto lg:absolute lg:right-0 lg:top-32 lg:mt-0 shadow-xl">
              <Image
                src="/about/cleaning-team-2.jpg"
                alt="Professional cleaning"
                fill
                className="object-cover"
              />
            </div>

            {/* Description Text */}
            <div className="mt-12 lg:mt-48 max-w-md">
              <p className="text-gray-900 text-base md:text-lg leading-relaxed mb-6">
                An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing
              </p>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-block bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md"
              >
                See More...
              </Link>
            </div>
          </div>

          {/* Right Side - Heading */}
          <div className="flex items-center justify-center lg:justify-start">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              Everything you need for a Fairy clean.
            </h3>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              {/* Stat Item */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl md:text-2xl text-gray-900 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-32 bg-gray-400" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 uppercase tracking-wide mb-8">
            OUR SERVICES
          </h2>
          
          {/* Description */}
          <p className="text-gray-900 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            An effective kitchen cleaning regimen should follow HACCP guidelines to properly clean and disinfect, especially food preparation areas. The key to containing restaurant cleaning expenditures is developing more effective cleaning procedures and using highly efficient products that won't compromise on the critical goal of food, customer and staff safety
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          {/* Top Row - 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center justify-start text-center p-6 min-h-[200px]">
                  <div className="text-gray-900 mb-4">
                    {service.icon}
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed">
                    {service.title}
                  </p>
                </div>
                
                {/* Vertical Divider */}
                {index < 3 && (
                  <div className="hidden lg:block w-px bg-gray-300 self-stretch" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Horizontal Divider */}
          <div className="hidden lg:block h-px bg-gray-300 my-0" />

          {/* Bottom Row - 2 Items Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Empty space for centering */}
            <div className="hidden lg:block" />
            
            {services.slice(4, 6).map((service, index) => (
              <React.Fragment key={index + 4}>
                <div className="flex flex-col items-center justify-start text-center p-6 min-h-[200px]">
                  <div className="text-gray-900 mb-4">
                    {service.icon}
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed">
                    {service.title}
                  </p>
                </div>
                
                {/* Vertical Divider */}
                {index < 1 && (
                  <div className="hidden lg:block w-px bg-gray-300 self-stretch" />
                )}
              </React.Fragment>
            ))}
            
            {/* Empty space for centering */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
    <Feedback />
    </>
  );
};

export default HeroSection;