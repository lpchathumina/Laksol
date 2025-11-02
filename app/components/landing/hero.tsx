"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              The Professional{" "}
              <span className="block">Approach to Clean</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-lg leading-relaxed max-w-xl"
            >
              Lorem Ipsum available, but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even slightly believable.
              If you are going to use a passage of Lorem Ipsum.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="relative"
          >
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/products3.jpg"
                  alt="Professional Cleaner"
                  width={600}
                  height={700}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}