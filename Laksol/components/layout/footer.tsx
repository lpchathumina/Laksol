'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Subscribed with email:', email);
  };

  return (
    <footer className="bg-gray-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-gray-300 to-gray-700 rounded-3xl p-8 md:p-12 mb-12 -mt-40 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Image */}
              <div className="relative h-48 md:h-64 flex items-center justify-center">
                <Image
                  src="/footeri.png"
                  alt="Vacuum Cleaner"
                  width={520}
                  height={700}
                  className="object-contain"
                />
                {/* Sparkle decorations */}
                <div className="absolute top-8 left-12 text-white text-2xl">✨</div>
                <div className="absolute top-4 left-24 text-white text-xl">✨</div>
                <div className="absolute bottom-12 left-8 text-white text-lg">✨</div>
              </div>

              {/* Right Side - Newsletter Form */}
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  Subscribe to our newsletter to get updates to our latest collections
                </h2>
                <p className="text-blue-100 text-md mb-6">
                  Get 20% off on your first order just by subscribing to our newsletter
                </p>

                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-4 pr-4 py-3.5 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-white text-red-600 rounded-xl font-semibold hover:bg-gray-300 transition-colors text-sm whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </form>

                <p className="text-blue-100 text-sm">
                  You will be able to unsubscribe at any time.
                  <br />
                  Read our privacy policy{' '}
                  <Link href="#" className="underline hover:text-white">
                    here
                  </Link>
                </p>
              </div>
            </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-4">
          {/* Logo and Description */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1 mb-4">
              <div className="flex items-center justify-center">
                <img src='/laksol.png' className='h-10 w-24' alt="Logo" />
              </div>
            </div>
            <p className="text-black text-sm leading-relaxed mb-4">
              Lakmina Products, established in 2010 by owner Ajantha Liyanagama, has earned growing recognition in 
              local and international markets as a dedicated manufacturer of quality consumer goods.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/lakminaproducts"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
              </Link>
              <Link
                href="https://wa.me/94776873199"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/whatsapp.png" alt="Instagram" width={26} height={26} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="font-semibold text-black mb-4 text-md">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-black hover:text-red-400 text-md transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-black hover:text-red-400 text-md transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-black hover:text-red-400 text-md transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-red-400 text-md transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-black mb-4 text-md">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-black hover:text-red-400 text-md transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-&-conditions" className="text-black hover:text-red-400 text-md transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-black hover:text-red-400 text-md transition-colors">
                  Site Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-black mb-4 text-md">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-black text-md">(047) 222 5356</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-black text-md">support@lakmina.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-red-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black text-md">
            © 2026 Lakmina Products. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-black text-md transition-colors">
              Developed by  
              <a href="https://wa.me/94703906526" target="_blank" rel="noopener noreferrer" className="text-black hover:text-red-600 text-md transition-colors"> Chathumina Liyanagamage</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;