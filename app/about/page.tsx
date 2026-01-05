'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Book from '@/components/layout/book';
import Feedback from '@/components/layout/feedback';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

const Counter = ({ end, duration = 2000, suffix = '', decimals = 0 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const currentValue = progress * end;
      setCount(decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, decimals]);

  return (
    <div ref={counterRef}>
      {decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </div>
  );
};

const timelineData = [
  {
    year: '2010',
    iconSrc: '/icons/trending-up.svg',
    description: 'Founded Lakmina Products with a vision to revolutionize cleaning solutions in Sri Lanka.'
  },
  {
    year: '2015',
    iconSrc: '/icons/users.svg',
    description: 'Expanded our team to 50+ employees and launched our flagship bathroom cleaning range.'
  },
  {
    year: '2018',
    iconSrc: '/icons/building.svg',
    description: 'Opened our state-of-the-art manufacturing facility in Ratmalana Industrial Zone.'
  },
  {
    year: '2022',
    iconSrc: '/icons/bar-chart.svg',
    description: 'Achieved 100+ distributor partnerships across Sri Lanka and entered export markets.'
  },
  {
    year: '2026',
    iconSrc: '/icons/clipboard.svg',
    description: 'Continuing innovation with eco-friendly formulations and sustainable packaging.'
  }
];

const values = [
  {
    title: 'MISSION',
    icon: '/icons/target.svg',
    description: 'To provide high-quality, affordable cleaning solutions that make every home and business sparkle while maintaining environmental responsibility.'
  },
  {
    title: 'VISION',
    icon: '/icons/eye.svg',
    description: 'To become the leading cleaning products manufacturer in South Asia, known for innovation, quality, and customer satisfaction.'
  },
  {
    title: 'VALUES',
    icon: '/icons/check-circle.svg',
    description: 'Integrity, excellence, innovation, and sustainability guide everything we do. We believe in building lasting relationships with our partners.'
  }
];

const clients = [
  { name: "Ballys", logo: "/logos/ballys.png" },
  { name: "Bellagio", logo: "/logos/bellagio.png" },
  { name: "Cafe", logo: "/logos/cafe.jpg" },
  { name: "Dinapala", logo: "/logos/dinapala.jpeg" },
  { name: "Kandy", logo: "/logos/kandy.png" },
  { name: "LA", logo: "/logos/la.png" },
  { name: "Molly", logo: "/logos/molly.png" },
  { name: "Prasad", logo: "/logos/prasad.png" },
  { name: "RichLook", logo: "/logos/rich.png" },
  { name: "RV", logo: "/logos/rv.png" }
];

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Animation variants for hero
  const heroList = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  };

  const heroShow = {
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

  // Intersection Observer for content section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/handwash2.jpg"
            alt="About Us - Lakmina Products"
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
              className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            >
              ABOUT US
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              Discover the story behind Lakmina Products – over 14 years of excellence in manufacturing premium cleaning solutions for homes and businesses.
            </motion.p>
          </motion.div>
        </div> 
      </section>

      {/* Social Media Icons - Right Side */}
      <section className="relative">
        <div className="absolute right-0 top-0 -translate-y-1/2 flex flex-col items-center gap-4 pr-6 md:pr-8 z-20">
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

      {/* Content Section - Committed to Excellence */}
      <section 
        ref={sectionRef}
        className="bg-white py-16 md:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Side */}
            <div className="space-y-6">
              {/* Main Heading */}
              <h2 
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                COMMITTED TO
                <br />
                EXCELLENCE
              </h2>

              {/* Subheading */}
              <p 
                className={`text-xl md:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-light italic transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                We carry a passion for quality cleaning solutions and have a knack for delivering products that exceed expectations.
              </p>

              {/* Decorative Line */}
              <div 
                className={`w-16 h-1 bg-gray-300 mt-8 transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 scale-x-100' 
                    : 'opacity-0 scale-x-0'
                }`}
                style={{ transitionDelay: '500ms', transformOrigin: 'left' }}
              />
            </div>

            {/* Right Side */}
            <div className="space-y-6 lg:pt-4">
              {/* Paragraph 1 */}
              <p 
                className={`text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                We believe in developing innovative formulations and turning them into cleaning products that are both effective and environmentally responsible.
              </p>

              {/* Paragraph 2 */}
              <p 
                className={`text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Taking on challenging projects that push us to innovate and go the extra mile is what we consider a way of life at Lakmina Products.
              </p>

              {/* Paragraph 3 */}
              <p 
                className={`text-gray-500 text-base md:text-lg leading-relaxed transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                We are relentless in pushing boundaries and carry out this spirited attitude into every product we create. Cleaning solutions that perform, protect, and make a difference. Make your space shine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - New Design */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Stats Vertical */}
            <div className="lg:col-span-3">
              <div className="space-y-0">
                {/* Stat 1 */}
                <div className="text-center py-6 border-b border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-1">
                    <Counter end={20.5} suffix="k" decimals={1} />
                  </div>
                  <div className="text-gray-500 text-sm">Successfully Delivered</div>
                </div>

                {/* Stat 2 */}
                <div className="text-center py-6 border-b border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-1">
                    <Counter end={450} suffix="+" />
                  </div>
                  <div className="text-gray-500 text-sm">Happy Customers</div>
                </div>

                {/* Stat 3 */}
                <div className="text-center py-6">
                  <div className="text-4xl md:text-5xl font-bold text-gray-300 mb-1">
                    <Counter end={14} suffix="+" />
                  </div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Center - Image with Badge */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image */}
                <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
                  <Image
                    src="/12345.jpg"
                    alt="Lakmina Products Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-4 space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-blue-600 text-sm font-medium tracking-wider uppercase">About Company</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Quality products & their best solutions
              </h2>

              {/* Description */}
              <p className="text-gray-500 text-base leading-relaxed">
                Our comprehensive range of cleaning products is designed to tackle every cleaning challenge. From powerful bathroom cleaners to gentle surface sprays, each product is formulated with care and precision to deliver exceptional results.
              </p>

              {/* Read More Button */}
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-300 group"
                >
                  <span>Read More</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-start gap-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                OUR
              </h2>
              <div className="flex flex-col">
                <span className="text-lg text-gray-600">Journey</span>
                <div className="relative">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                    TIME
                  </span>
                  {/* Curved bracket */}
                  <div className="absolute -left-4 top-0 bottom-0 w-6 border-l-2 border-t-2 border-b-2 border-gray-900 rounded-l-full" />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-600">Through</span>
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/timeline-bg.jpg"
                alt="Timeline Background"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
            </div>

            {/* Timeline Content */}
            <div className="relative px-4 md:px-16 py-12">
              {/* Horizontal Line */}
              <div className="absolute left-4 right-4 md:left-16 md:right-16 top-1/2 h-0.5 bg-gray-900 -translate-y-1/2" />

              {/* Timeline Items */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-8 bg-white rounded-lg p-4 shadow-lg">
                      <Image src={item.iconSrc} alt={item.year} width={32} height={32} />
                    </div>

                    {/* Red Circle on Line */}
                    <div className="relative z-10 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-md mb-4" />

                    {/* Year */}
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {item.year}
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-[150px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - Header and Description */}
            <div className="space-y-8">
              {/* Header with bracket */}
              <div className="flex items-start gap-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-none">
                  OUR
                </h2>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-600">Core</span>
                  <div className="relative">
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-none">
                      VALUES
                    </span>
                    {/* Curved bracket */}
                    <div className="absolute -left-4 top-0 bottom-0 w-6 border-l-2 border-t-2 border-b-2 border-gray-900 rounded-l-full" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
                At Lakmina Products, our values define who we are and guide every decision we make. They are the foundation of our commitment to excellence.
              </p>
            </div>

            {/* Right Side - Cards with Background Image */}
            <div className="relative">
              {/* Background Image */}
              <div className="absolute top-0 right-0 w-[70%] h-full rounded-3xl overflow-hidden">
                <Image
                  src="/office-bg.jpg"
                  alt="Office Background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Cards */}
              <div className="relative space-y-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-gray-100/95 backdrop-blur-sm rounded-2xl p-6 max-w-md shadow-lg"
                    style={{
                      marginLeft: index === 1 ? '80px' : index === 2 ? '40px' : '0'
                    }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-10 h-10">
                        <Image
                          src={value.icon}
                          alt={value.title}
                          width={40}
                          height={40}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <Book />

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OUR CLIENTS
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              We are proud to partner with leading businesses across Sri Lanka, delivering quality cleaning solutions that meet their unique needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-100 hover:-translate-y-1"
              >
                <div className="relative h-20 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-32 h-16 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={40}
                      className="filter grayscale contrast-75 opacity-80 object-contain"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-lg">
                  <div className="h-16 mb-3 flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={80}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-900 text-sm font-medium mt-2">
                    {client.name}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <Feedback />
    </>
  );
};

export default AboutUsPage;