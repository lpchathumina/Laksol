'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // Animation variants
  const list = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  };

  const show = {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative isolate h-[70vh] md:h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/contact.jpg"
            alt="Contact Us"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b to-[#5da14c]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
            variants={list}
            className="text-center"
          >
            <motion.h1 
              variants={show} 
              className="text-white text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight"
            >
              CONTACT US
            </motion.h1>

            <motion.p 
              variants={show} 
              className="mt-6 max-w-2xl mx-auto text-white/90 text-lg md:text-xl leading-relaxed"
            >
              Please choose the option that best fits your needs so we can connect you with the right team.
            </motion.p>

            <motion.div 
              variants={show} 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
            </motion.div>
          </motion.div>
        </div> 
      </section>

      {/* Contact Information and Form Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Information */}
          <div className="space-y-12">
            {/* Header */}
            <div>
              <p className="text-sm text-gray-500 mb-4 font-light tracking-wide">
                /get in touch/
              </p>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                We are always ready to help you and answer your questions
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
              </p>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Call Center */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Call Center</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">800 100 975 20 34</p>
                  <p className="text-gray-600">+1 (123) 1800-234-5678</p>
                </div>
              </div>

              {/* Our Location */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                <div className="space-y-2">
                  <p className="text-gray-600">USA, New York – 1060</p>
                  <p className="text-gray-600">Str. First Avenue 1</p>
                </div>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Email</h3>
                <p className="text-gray-600">neuros@mail.co</p>
              </div>

              {/* Social Network */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Social network</h3>
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
            <p className="text-gray-500 text-sm mb-8">
              Define your goals and identify areas where AI can add value to your business
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
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
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
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
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
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-sm"
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
                  rows={4}
                  className="w-full px-0 py-3 bg-transparent border-b border-gray-300 focus:border-gray-900 focus:outline-none transition-colors placeholder:text-gray-400 text-sm resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  <span>Send a message</span>
                  <span className="text-lg">›</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;