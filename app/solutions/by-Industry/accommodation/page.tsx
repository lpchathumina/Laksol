'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';

const heroList: Variants = {
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
      ease: "easeOut"
    }
  }
};

// Sample product data
const products = [
  { id: 1, name: "Power Degreaser Pro", size: "800mL", image: "/k.png" },
  { id: 2, name: "Kitchen Cleaner Ultra", size: "800mL", image: "/k.png" },
  { id: 3, name: "Grease Buster Max", size: "800mL", image: "/k.png" },
  { id: 4, name: "Surface Degreaser", size: "800mL", image: "/k.png" },
  { id: 5, name: "Oven & Grill Cleaner", size: "800mL", image: "/k.png" },
  { id: 6, name: "Hood Degreaser Plus", size: "800mL", image: "/k.png" },
  { id: 7, name: "Fryer Clean Solution", size: "800mL", image: "/k.png" },
  { id: 8, name: "All-Purpose Degreaser", size: "800mL", image: "/k.png" }
];

export default function AccommodationPage() {
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/Degreasing.jpg"
            alt="Degreasing Products"
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
              className="text-white text-4xl sm:text-5xl md:text-6xl md:mt-24 font-bold tracking-tight leading-tight"
            >
              Accommodation Solutions
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-5xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              HEAVY DUTY KITCHEN DEGREASERS
            </motion.p>
          </motion.div>
        </div> 
      </section>
    </main>
  );
}