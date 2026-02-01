'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const heroList: Variants = {
  visible: { transition: { staggerChildren: 0.2 } },
  hidden: {}
};

const heroShow: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const allImages = [
  { id: 1, src: "/care-home.jpg", alt: "Care Homes", title: "Care Homes", description: "We know you value the quality of care you provide for your residents. That's why P&G Professional delivers professional formulas of the brands your residents know and love – for a comfort and clean that feels more like home.", href: "/solutions/by-industry/care-homes" },
  { id: 2, src: "/accomodation.jpg", alt: "Accommodation", title: "Accommodation", description: "Create memorable guest experiences with our professional cleaning solutions. From lobbies to guest rooms, ensure every space meets the highest standards of cleanliness and hygiene.", href: "/solutions/by-industry/accommodation" },
  { id: 3, src: "/restaurant.jpg", alt: "Restaurants", title: "Restaurants", description: "Keep your kitchen spotless and your dining areas welcoming. Our restaurant-grade solutions help you maintain the cleanliness standards your customers expect and deserve.", href: "/solutions/by-industry/restaurants" },
  { id: 4, src: "/bars.jpg", alt: "Bars & Cafes", title: "Bars & Cafes", description: "From gleaming bar tops to sparkling glassware, create an inviting atmosphere that keeps customers coming back. Professional cleaning for professional hospitality.", href: "/solutions/by-industry/bars-cafes" },
  { id: 5, src: "/facilities.jpg", alt: "Facilities", title: "Facilities", description: "Maintain pristine facilities with industrial-strength cleaning power. Our solutions are designed for high-traffic areas that demand consistent, reliable cleanliness.", href: "/solutions/by-industry/facilities" },
];

// Current page - Restaurants (index 2)
const CURRENT_PAGE_INDEX = 2;

export default function RestaurantsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(CURRENT_PAGE_INDEX);
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % allImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getDisplayImages = () => {
    const total = allImages.length;
    const positions = [];
    for (let i = -2; i <= 2; i++) {
      let index = (activeImageIndex + i + total) % total;
      positions.push(allImages[index]);
    }
    return positions;
  };

  const displayImages = getDisplayImages();

  const handleImageClick = (image: typeof allImages[0], positionIndex: number) => {
    if (positionIndex === 2) {
      router.push(image.href);
    } else {
      const clickedIndex = allImages.findIndex(img => img.id === image.id);
      setActiveImageIndex(clickedIndex);
    }
  };

  const getSizeClass = (positionIndex: number) => {
    switch (positionIndex) {
      case 2: return 'w-44 h-56 sm:w-52 sm:h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 z-10 shadow-2xl';
      case 1: case 3: return 'w-24 h-40 sm:w-28 sm:h-48 md:w-36 md:h-56 lg:w-40 lg:h-64';
      default: return 'w-16 h-32 sm:w-20 sm:h-40 md:w-24 md:h-48 lg:w-28 lg:h-56';
    }
  };

  const activeImage = allImages[activeImageIndex];

  return (
    <main className="w-full bg-white text-black">
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="absolute inset-0">
          <Image src="/restaurant.jpg" alt="Restaurant Solutions" fill priority className="object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={heroList} className="text-center">
            <motion.h1 variants={heroShow} className="text-white text-4xl sm:text-5xl md:text-6xl md:mt-24 font-bold tracking-tight leading-tight">Restaurant Solutions</motion.h1>
            <motion.p variants={heroShow} className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed">Clean, fresh, and hygienic</motion.p>
          </motion.div>
        </div> 
      </section>

      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a5c] italic">Superior Solutions for your Customers</h2>
            <p className="mt-4 text-gray-800 font-semibold text-lg">Delivered Efficiently</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {displayImages.map((image, positionIndex) => (
              <motion.div key={`${image.id}-${positionIndex}`} layout transition={{ duration: 0.5, ease: "easeInOut" }} onClick={() => handleImageClick(image, positionIndex)} className={`relative cursor-pointer overflow-hidden rounded-2xl group ${getSizeClass(positionIndex)} ${positionIndex !== 2 ? 'opacity-90 hover:opacity-100' : ''}`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500" />
                {positionIndex !== 2 && <div className="absolute inset-0 bg-white/10" />}
                {positionIndex === 2 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-semibold text-sm md:text-base">Click to explore →</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mb-6 h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h3 key={activeImage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-2xl md:text-3xl font-bold text-gray-900">{activeImage.title}</motion.h3>
            </AnimatePresence>
          </div>

          <div className="max-w-3xl mx-auto text-center min-h-[100px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p key={activeImage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-gray-600 text-base md:text-lg leading-relaxed">{activeImage.description}</motion.p>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {allImages.map((img, index) => (
              <button key={img.id} onClick={() => setActiveImageIndex(index)} className="relative h-1.5 rounded-full overflow-hidden bg-gray-200 transition-all duration-300" style={{ width: index === activeImageIndex ? '2rem' : '0.5rem' }} aria-label={`Go to ${img.title}`}>
                {index === activeImageIndex && <motion.div className="absolute inset-0 bg-[#1a0a5c] rounded-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5, ease: "linear" }} style={{ transformOrigin: 'left' }} key={`progress-${activeImageIndex}`} />}
              </button>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-10">
            <Link href={activeImage.href} className="inline-flex items-center gap-2 bg-[#1a0a5c] hover:bg-[#2727f6] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
              Explore {activeImage.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}