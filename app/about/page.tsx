'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react';
import GrowUp1 from '@/components/layout/growup1';
import Book from '@/components/layout/book';
import Feedback from '@/components/layout/feedback';
import Clients from '@/components/layout/client';
import { Variants } from 'framer-motion';

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

// const timelineData = [
//   {
//     year: '2010',
//     iconSrc: '/icons/trending-up.svg',
//     description: 'Founded Lakmina Products with a vision to revolutionize cleaning solutions in Sri Lanka.'
//   },
//   {
//     year: '2015',
//     iconSrc: '/icons/users.svg',
//     description: 'Expanded our team to 50+ employees and launched our flagship bathroom cleaning range.'
//   },
//   {
//     year: '2018',
//     iconSrc: '/icons/building.svg',
//     description: 'Opened our state-of-the-art manufacturing facility in Ratmalana Industrial Zone.'
//   },
//   {
//     year: '2022',
//     iconSrc: '/icons/bar-chart.svg',
//     description: 'Achieved 100+ distributor partnerships across Sri Lanka and entered export markets.'
//   },
//   {
//     year: '2026',
//     iconSrc: '/icons/clipboard.svg',
//     description: 'Continuing innovation with eco-friendly formulations and sustainable packaging.'
//   }
// ];

const coreValuesSections = [
  {
    id: 1,
    title: "MISSION",
    description: "Our mission is to provide high-quality cleaning solutions that ensure safety and hygiene for families and businesses alike. We strive for excellence in every drop.",
    icon: Target,
    image: "/mission.jpg",
  },
  {
    id: 2,
    title: "VISION",
    description: "To be the global leader in sustainable hygiene products, setting the standard for innovation, effectiveness, and environmental responsibility.",
    icon: Eye,
    image: "/vision.jpg",
  },
  {
    id: 3,
    title: "VALUES",
    description: "Integrity, Transparency, and Customer Focus. We believe in building trust through consistent quality and honest practices.",
    icon: Heart,
    image: "/values.jpg",
  },
];

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const coreValuesRefs = useRef<(HTMLDivElement | null)[]>([]);

  const heroList = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  };

  const heroShow: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

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

  useEffect(() => {
    const observers = coreValuesRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveFeature(index);
          }
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/about3.jpg"
            alt="About Us - Lakmina Products"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={heroList}
            className="text-center"
          >
            <motion.h1 
              variants={heroShow} 
              className="text-white text-4xl sm:text-5xl md:text-6xl md:mt-24 font-bold tracking-tight leading-tight"
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

      {/* Content Section - Committed to Excellence */}
      <section 
        ref={sectionRef}
        className="bg-white py-16 md:py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            <div className="space-y-6">
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

              <p 
                className={`text-md md:text-3xl text-black leading-relaxed font-light italic transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                We carry a passion for quality cleaning solutions and have a knack for delivering products that exceed expectations.
              </p>
            </div>

            <div className="space-y-6 lg:pt-4">
              <p 
                className={`text-black text-base md:text-lg leading-relaxed transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                We believe in developing innovative formulations and turning them into cleaning products that are both effective and environmentally responsible.
              </p>

              <p 
                className={`text-black  text-base md:text-lg leading-relaxed transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Taking on challenging projects that push us to innovate and go the extra mile is what we consider a way of life at Lakmina Products.
              </p>

              <p 
                className={`text-black text-base md:text-lg leading-relaxed transition-all duration-700 ${
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

        {/* Stats Section */}
        <section className="bg-white py-10 md:py-10 mb-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        <div className="lg:col-span-3">
          <div className="space-y-0">
            <div className="text-center py-6 border-b border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-black mb-1">
                <Counter end={1.5} suffix="k" decimals={1} />
              </div>
              <div className="text-gray-500 text-sm">Successfully Delivered</div>
            </div>

            <div className="text-center py-6 border-b border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-black mb-1">
                <Counter end={50} suffix="+" />
              </div>
              <div className="text-gray-500 text-sm">Happy Customers</div>
            </div>

            <div className="text-center py-6">
              <div className="text-4xl md:text-5xl font-bold text-black mb-1">
                <Counter end={14} suffix="+" />
              </div>
              <div className="text-gray-500 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative">
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

        <div className="lg:col-span-4 lg:mt-26 space-y-6 ">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-red-600 text-sm font-medium tracking-wider uppercase">About Company</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Quality products & their best solutions
          </h2>

          <p className="text-black text-base leading-relaxed">
            Our comprehensive range of cleaning products is designed to tackle every cleaning challenge. From powerful bathroom cleaners to gentle surface sprays, each product is formulated with care and precision to deliver exceptional results.
          </p>
        </div>
      </div>
    </div>
  </section>

      <GrowUp1 />

      {/* Timeline Section
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/timeline-bg.jpg"
                alt="Timeline Background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
            </div>

            <div className="relative px-4 md:px-16 py-12">
              <div className="absolute left-4 right-4 md:left-16 md:right-16 top-1/2 h-0.5 bg-gray-900 -translate-y-1/2" />

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {timelineData.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="mb-8 bg-white rounded-lg p-4 shadow-lg">
                      <Image src={item.iconSrc} alt={item.year} width={32} height={32} />
                    </div>

                    <div className="relative z-10 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-md mb-4" />

                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {item.year}
                    </div>

                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed max-w-[150px]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Values Scroll Section */}
      {/* <section className="relative w-full bg-white">
        <div className="flex flex-col lg:flex-row"> */}
          
          {/* Left Side - Sticky Image */}
          {/* <div className="lg:w-1/2 h-[50vh] lg:h-screen sticky top-0 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src={coreValuesSections[activeFeature].image}
                alt={coreValuesSections[activeFeature].title}
                fill
                className="object-cover transition-opacity duration-500"
                priority
              />
            </div>
          </div> */}

          {/* Right Side - Scrollable Content */}
          {/* <div className="lg:w-1/2 relative bg-white">
            <div className="flex flex-col">
              {coreValuesSections.map((section, index) => (
                <div 
                  key={section.id}
                  ref={el => { coreValuesRefs.current[index] = el; }}
                  className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
                >
                  <div 
                    className={`
                      relative p-8 md:p-12 rounded-[2rem] max-w-lg w-full border border-gray-100
                      transition-all duration-300
                      ${activeFeature === index 
                        ? 'bg-gray-200 shadow-xl -translate-y-1 scale-105' 
                        : 'bg-gray-100 opacity-50 scale-95'
                      }
                    `}
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className=" shadow-sm backdrop-blur-sm bg-white/30 p-4 rounded-xl border border-white/20">
                          <section.icon className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide uppercase">
                          {section.title}
                        </h3>
                      </div>
                      
                      <div className="h-px w-full bg-gray-300" />
                      
                      <p className="text-gray-900 font-medium leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="h-[50vh]" />
            </div>
          </div>
        </div>
      </section> */}

      {/* Clients Section */}
      <Clients />

      {/* Book Section */}
      <Book />

      {/* Feedback Section */}
      <Feedback />
    </>
  );
};

export default AboutUsPage;