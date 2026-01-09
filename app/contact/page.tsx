'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Set hero loaded after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 1200); // Wait for hero animation to complete

    return () => clearTimeout(timer);
  }, []);

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

  // Animation variants for content section (loads after hero)
  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const contentItem = {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section - Loads First */}
      <section className="relative isolate h-[60vh] md:h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/contact_hero.jpg"
            alt="Contact Us"
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
              CONTACT US
            </motion.h1>

            <motion.p 
              variants={heroShow} 
              className="mt-4 max-w-xl mx-auto text-white/90 text-base md:text-lg leading-relaxed"
            >
              We'd love to hear from you. Reach out to our team for inquiries, partnerships, or support.
            </motion.p>
          </motion.div>
        </div> 
      </section>

      {/* Contact Information and Form Section - Loads After Hero */}
      <motion.section 
        initial="hidden"
        animate={heroLoaded ? "visible" : "hidden"}
        variants={contentContainer}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Information */}
          <motion.div variants={contentItem} className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
                We are always ready to help you and answer your questions
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                At Lakmina Products, customer satisfaction is our top priority. Whether you have questions about our cleaning solutions, need technical support, or want to explore partnership opportunities, our dedicated team is here to assist you.
              </p>
            </div>

            {/* Contact Information Grid */}
            <motion.div 
              variants={contentContainer}
              initial="hidden"
              animate={heroLoaded ? "visible" : "hidden"}
              className="grid grid-cols-2 gap-x-8 gap-y-8"
            >
              {/* Call Center */}
              <motion.div variants={contentItem}>
                <h3 className="text-base font-semibold text-black mb-3">Call Center</h3>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">+94 11 234 5678</p>
                  <p className="text-gray-500 text-sm">+94 77 123 4567</p>
                </div>
              </motion.div>

              {/* Our Location */}
              <motion.div variants={contentItem}>
                <h3 className="text-base font-semibold text-black mb-3">Our Location</h3>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">No. 45, Industrial Zone</p>
                  <p className="text-gray-500 text-sm">Colombo, Sri Lanka</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div variants={contentItem}>
                <h3 className="text-base font-semibold text-black mb-3">Email</h3>
                <p className="text-gray-500 text-sm">info@lakminaproducts.com</p>
              </motion.div>

              {/* Social Network */}
              <motion.div variants={contentItem}>
                <h3 className="text-base font-semibold text-black mb-3">Social network</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-black transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div 
            variants={contentItem}
            className="bg-gray-50 rounded-2xl p-8 md:p-10 lg:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">Get in Touch</h2>
            <p className="text-gray-400 text-sm mb-8">
              Share your requirements with us and our team will get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-black focus:outline-none transition-colors placeholder:text-gray-400 text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-black transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span className="text-base">›</span>
                  <span>Send a message</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
};

export default ContactUs;