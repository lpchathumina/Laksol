'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

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

// Product categories
const productCategories = [
  { id: 'top', name: 'Top Products' },
  { id: 'degreasing', name: 'Degreasing' },
  { id: 'dishwashing', name: 'Dishwashing' },
  { id: 'hard-surface', name: 'Hard Surface Cleaning' },
  { id: 'floor-care', name: 'Floor Care' },
];

// Products data by category
const productsByCategory: { [key: string]: { id: number; name: string; size: string; image: string }[] } = {
  'top': [
    { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
    { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
    { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
    { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
  ],
  'degreasing': [
    { id: 5, name: "Heavy Duty Degreaser", size: "1L", image: "/k.png" },
    { id: 6, name: "Industrial Degreaser", size: "5L", image: "/k.png" },
    { id: 7, name: "Kitchen Degreaser Plus", size: "750mL", image: "/k.png" },
    { id: 8, name: "Oven & Grill Cleaner", size: "500mL", image: "/k.png" },
  ],
  'dishwashing': [
    { id: 9, name: "Dish Soap Pro", size: "1L", image: "/k.png" },
    { id: 10, name: "Auto Dishwash Powder", size: "2.5kg", image: "/k.png" },
    { id: 11, name: "Rinse Aid Plus", size: "500mL", image: "/k.png" },
    { id: 12, name: "Glass Cleaner", size: "750mL", image: "/k.png" },
  ],
  'hard-surface': [
    { id: 13, name: "Multi-Surface Cleaner", size: "1L", image: "/k.png" },
    { id: 14, name: "Bathroom Cleaner", size: "750mL", image: "/k.png" },
    { id: 15, name: "Stainless Steel Polish", size: "500mL", image: "/k.png" },
    { id: 16, name: "Window Cleaner", size: "500mL", image: "/k.png" },
  ],
  'floor-care': [
    { id: 17, name: "Floor Cleaner Pro", size: "5L", image: "/k.png" },
    { id: 18, name: "Floor Polish", size: "2.5L", image: "/k.png" },
    { id: 19, name: "Tile & Grout Cleaner", size: "1L", image: "/k.png" },
    { id: 20, name: "Carpet Shampoo", size: "2L", image: "/k.png" },
  ],
};

// Current page - Restaurants (index 2)
const CURRENT_PAGE_INDEX = 2;

export default function RestaurantsPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(CURRENT_PAGE_INDEX);
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState('top');
  const router = useRouter();

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % allImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Get the display order - active image always in center (position 2)
  const getDisplayImages = () => {
    const total = allImages.length;
    const positions = [];

    // Calculate positions: -2, -1, 0 (center), +1, +2 relative to active
    for (let i = -2; i <= 2; i++) {
      let index = (activeImageIndex + i + total) % total;
      positions.push(allImages[index]);
    }

    return positions;
  };

  const displayImages = getDisplayImages();

  const handleImageClick = (image: typeof allImages[0], positionIndex: number) => {
    if (positionIndex === 2) {
      // Center image clicked - navigate
      router.push(image.href);
    } else {
      // Other image clicked - make it active
      const clickedIndex = allImages.findIndex(img => img.id === image.id);
      setActiveImageIndex(clickedIndex);
    }
  };

  // Size classes based on position (0=far left, 1=left, 2=center, 3=right, 4=far right)
  const getSizeClass = (positionIndex: number) => {
    switch (positionIndex) {
      case 2: return 'w-44 h-56 sm:w-52 sm:h-64 md:w-64 md:h-80 lg:w-72 lg:h-96 z-10 shadow-2xl';
      case 1: case 3: return 'w-24 h-40 sm:w-28 sm:h-48 md:w-36 md:h-56 lg:w-40 lg:h-64';
      default: return 'w-16 h-32 sm:w-20 sm:h-40 md:w-24 md:h-48 lg:w-28 lg:h-56';
    }
  };

  const activeImage = allImages[activeImageIndex];
  const currentProducts = productsByCategory[activeCategory] || productsByCategory['top'];

  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }} className="absolute inset-0">
          <Image src="/restaurant.jpg" alt="Restaurant Solutions" fill priority className="object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
          <motion.div initial="hidden" animate="visible" variants={heroList} className="text-center">
            <motion.h1 variants={heroShow} className="text-white text-4xl sm:text-5xl md:text-6xl md:mt-24 font-bold tracking-tight leading-tight">
              Restaurant Solutions
            </motion.h1>
            <motion.p variants={heroShow} className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed">
              Clean, fresh, and hygienic
            </motion.p>
          </motion.div>
        </div> 
      </section>

      {/* Superior Solutions Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a0a5c] italic">Superior Solutions for your Customers</h2>
            <p className="mt-4 text-gray-800 font-semibold text-lg">Delivered Efficiently</p>
          </motion.div>

          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-12" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          > 
            {displayImages.map((image, positionIndex) => (
              <motion.div 
                key={`${image.id}-${positionIndex}`} 
                layout 
                transition={{ duration: 0.5, ease: "easeInOut" }} 
                onClick={() => handleImageClick(image, positionIndex)} 
                className={`relative cursor-pointer overflow-hidden rounded-2xl group ${getSizeClass(positionIndex)} ${positionIndex !== 2 ? 'opacity-90 hover:opacity-100' : ''}`}
              >
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

          {/* Dynamic Title */}
          <div className="text-center mb-6 h-12 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h3 key={activeImage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeImage.title}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Dynamic Description */}
          <div className="max-w-3xl mx-auto text-center min-h-[100px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.p key={activeImage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-gray-600 text-base md:text-lg leading-relaxed">
                {activeImage.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {allImages.map((img, index) => (
              <button 
                key={img.id} 
                onClick={() => setActiveImageIndex(index)} 
                className="relative h-1.5 rounded-full overflow-hidden bg-gray-200 transition-all duration-300" 
                style={{ width: index === activeImageIndex ? '2rem' : '0.5rem' }} 
                aria-label={`Go to ${img.title}`}
              >
                {index === activeImageIndex && 
                  <motion.div 
                    className="absolute inset-0 bg-[#1a0a5c] rounded-full" 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ duration: 5, ease: "linear" }} 
                    style={{ transformOrigin: 'left' }} 
                    key={`progress-${activeImageIndex}`} 
                  />
                }
              </button>
            ))}
          </div>

          {/* Explore Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-10">
            <Link href={activeImage.href} className="inline-flex items-center gap-2 bg-[#1a0a5c] hover:bg-[#2727f6] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg">
              Explore {activeImage.title}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </motion.div>
        </div>
      </section>

            {/* Products Section with Category Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8"
          >
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-6 py-3 text-sm md:text-base font-medium transition-all duration-500 overflow-hidden group ${
                  activeCategory === category.id
                    ? 'text-[#1a0a5c] font-bold'
                    : 'text-gray-500 hover:text-[#1a0a5c]'
                }`}
              >
                {/* Water/Glass Background */}
                <span className={`absolute inset-0 bg-gradient-to-r from-cyan-50/50 via-blue-100/30 to-cyan-50/50 backdrop-blur-sm rounded-full transition-all duration-500 ${
                  activeCategory === category.id 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95'
                }`} />
      
                {/* Animated Border */}
                <span className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'border-[#1a0a5c]/30'
                    : 'border-transparent group-hover:border-gray-200'
                }`} />
      
                {/* Bottom Line Animation */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#1a0a5c] to-transparent transition-all duration-500 ${
                  activeCategory === category.id ? 'w-3/4' : 'w-0 group-hover:w-1/2'
                }`} />
      
                {/* Arrow Icon */}
                <span className="relative z-10 flex items-center gap-2">
                  {activeCategory === category.id && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[#1a0a5c]"
                    >
                      ▶
                    </motion.span>
                  )}
                  {category.name}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We know you value the quality of care you provide for your residents. That's 
              why P&G Professional delivers professional formulas of the brands your 
              residents know and love – for a comfort and clean that feels more like home.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {currentProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-64 p-8 flex items-center justify-center bg-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 z-10">
                      <Image src={product.image} alt={product.name} fill className="object-contain" />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex flex-col items-center justify-center gap-3">
                      <button className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-[#1a0a5c] hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-lg">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="p-6 relative bg-white z-30">
                    <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-gray-500 text-sm font-medium flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {product.size}
                      </p>
                      <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show All Products Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#1a0a5c] text-[#1a0a5c] font-bold rounded-full hover:bg-[#1a0a5c] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ShoppingBag className="w-5 h-5" />
              Show All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}