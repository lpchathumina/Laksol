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
    <footer className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative h-48 md:h-64 flex items-center justify-center">
              <Image
                src="/vacuum-cleaner.png"
                alt="Vacuum Cleaner"
                width={350}
                height={250}
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
              <p className="text-blue-100 text-sm mb-6">
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
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/90 backdrop-blur-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-blue-100 text-xs">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Stay Clean</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/icons/facebook.png" alt="Facebook" width={18} height={18} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/icons/twitter.png" alt="Twitter" width={18} height={18} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/icons/instagram.png" alt="Instagram" width={18} height={18} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={18} height={18} />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <Image src="/icons/google.png" alt="Google" width={18} height={18} />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Tweet @ Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Webians
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Become Teacher
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  All in One
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
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
                <span className="text-gray-600 text-sm">(91) 98765 4321 54</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-600 flex-shrink-0"
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
                <span className="text-gray-600 text-sm">support@mail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © Copyright by CodedUI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Terms of Use
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Legal
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;