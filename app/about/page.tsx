'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Book from '@/components/layout/book';
import Feedback from '@/components/layout/feedback';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter = ({ end, duration = 2000, suffix = '' }: CounterProps) => {
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
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef}>
      {count}{suffix}
    </div>
  );
};

const timelineData = [
  {
    year: '2010',
    iconSrc: '/icons/trending-up.svg',
    description: 'If you share a bit more about how the icon is rendered in'
  },
  {
    year: '2015',
    iconSrc: '/icons/users.svg',
    description: 'If you share a bit more about how the icon is rendered in'
  },
  {
    year: '2018',
    iconSrc: '/icons/building.svg',
    description: 'If you share a bit more about how the icon is rendered in'
  },
  {
    year: '2022',
    iconSrc: '/icons/bar-chart.svg',
    description: 'If you share a bit more about how the icon is rendered in'
  },
  {
    year: '2026',
    iconSrc: '/icons/clipboard.svg',
    description: 'If you share a bit more about how the icon is rendered in'
  }
];

const values = [
  {
    title: 'MISSION',
    icon: '/icons/target.svg',
    description: 'If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet, whether you\'re using SVG'
  },
  {
    title: 'VISION',
    icon: '/icons/eye.svg',
    description: 'If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet, whether you\'re using SVG'
  },
  {
    title: 'Done',
    icon: '/icons/check-circle.svg',
    description: 'If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet, whether you\'re using SVG'
  }
];

const clients = [
  { 
    name: "Ballys", 
    logo: "/logos/ballys.png"
  },
  { 
    name: "belagio", 
    logo: "/logos/bellagio.png"
  },
  { 
    name: "cafe", 
    logo: "/logos/cafe.jpg"
  },
  { 
    name: "Dinapala", 
    logo: "/logos/dinapala.jpeg"
  },
  { 
    name: "Kandy", 
    logo: "/logos/kandy.png"
  },
  { 
    name: "la", 
    logo: "/logos/la.png"
  },
  { 
    name: "moly", 
    logo: "/logos/molly.png"
  },
  { 
    name: "prasad", 
    logo: "/logos/prasad.png"
  },
  { 
    name: "RichLook", 
    logo: "/logos/rich.png"
  },
  { 
    name: "rv", 
    logo: "/logos/rv.png"
  }
];

const AboutUsPage = () => {
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
                    ABOUT US
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

      {/* Content Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Cleaning Services for Your Home and Office
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We provide top-quality cleaning services tailored to meet your specific needs. Our experienced team uses eco-friendly products and advanced techniques to ensure your space is spotless and hygienic. Whether it's your home or office, we deliver exceptional results every time.
              </p>
            </div>

            {/* Right Side - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image - Top Left */}
                <div className="col-span-1 row-span-2">
                  <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/cleaning-bathroom.jpg"
                      alt="Bathroom cleaning service"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Top Right Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/cleaning-sink.jpg"
                    alt="Sink cleaning service"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Middle Right Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/window-cleaning.jpg"
                    alt="Window cleaning service"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Bottom Right Small Image */}
                <div className="relative h-32 rounded-2xl overflow-hidden shadow-lg ml-auto w-32">
                  <Image
                    src="/cleaning-detail.jpg"
                    alt="Detail cleaning service"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Image and Description */}
            <div className="space-y-6">
              {/* Cleaning Products Image */}
              <div className="relative w-full h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/cleaning-products.jpg"
                  alt="Cleaning Products - Clorox and Lysol"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Description Text */}
              <p className="text-gray-600 text-base leading-relaxed">
                If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet, whether you're using SVG, Font Awesome, or a PNG), I can give you a precise code snippet to
              </p>

              {/* Contact Us Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-block border-2 border-gray-900 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right Side - Stats Grid */}
            <div className="relative">
              {/* Vertical Divider Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                {/* Project Count */}
                <div className="text-center pb-8 border-b border-gray-300">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    <Counter end={1} suffix="K" />
                  </div>
                  <div className="text-gray-600 text-lg">Project</div>
                </div>

                {/* Customer Count */}
                <div className="text-center pb-8 border-b border-gray-300">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    <Counter end={5} suffix="K" />
                  </div>
                  <div className="text-gray-600 text-lg">Customer</div>
                </div>

                {/* Years */}
                <div className="text-center pt-8">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    <Counter end={40} />
                  </div>
                  <div className="text-gray-600 text-lg">Years</div>
                </div>

                {/* Trusted */}
                <div className="text-center pt-8">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2">
                    <Counter end={100} />
                  </div>
                  <div className="text-gray-600 text-lg">trusted</div>
                </div>
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
            <div className="relative px-8 md:px-16 py-12">
              {/* Horizontal Line */}
              <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-gray-900 -translate-y-1/2" />

              {/* Timeline Items */}
              <div className="grid grid-cols-5 gap-4">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="mb-8 bg-white rounded-lg p-4 shadow-lg">
                      <Image src={item.iconSrc} alt={item.year} width={32} height={32} className="text-blue-600" />
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
                If you share a bit more about how the icon is rendered in your project (HTML/JSX snippet,
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
                          className="text-gray-900"
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
      <Book />

      {/* Clients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              OUR CLIENTS
            </h2>
            <p className="text-black text-md max-w-2xl mx-auto">
              We work closely with a wide range of clients from diversified business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-100 hover:-translate-y-1"
              >
                <div className="relative h-20 mb-4 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
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
                  <p className="text-black text-sm font-medium mt-2">
                    {client.name}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default AboutUsPage;