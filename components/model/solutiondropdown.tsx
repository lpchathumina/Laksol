"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface SolutionDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionDropdown({ isOpen, onClose }: SolutionDropdownProps) {
  // Common styling for the links to keep the JSX clean
  const linkStyle = "block text-gray-600 hover:text-[#2727f6] hover:translate-x-1 transition-all duration-200 text-lg font-medium";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. Invisible Backdrop (Closes modal when clicking outside) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-transparent z-40" 
          />

          {/* 2. The Dropdown "Modal" Content */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-24 inset-x-0 mx-auto max-w-4xl z-50 px-4"
          >
            <div 
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-10 border border-gray-200"
              onMouseLeave={onClose}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                
                {/* --- COLUMN 1: By Industry --- */}
                <div>
                  <h3 className="text-[#003B73] font-bold text-xl mb-6 tracking-wide">
                    By Industry
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/solutions/by-industry/care-homes" onClick={onClose} className={linkStyle}>
                        Care Homes
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/by-industry/accommodation" onClick={onClose} className={linkStyle}>
                        Accommodation
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/by-industry/restaurants-bars-cafes" onClick={onClose} className={linkStyle}>
                        Restaurants/Bars/Cafes
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/by-industry/facilities" onClick={onClose} className={linkStyle}>
                        Facilities
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* --- COLUMN 2: By Cleaning Area --- */}
                <div>
                  <h3 className="text-[#003B73] font-bold text-xl mb-6 tracking-wide">
                    By Cleaning Area
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/solutions/by-cleaning-area/bathroom-cleaning" onClick={onClose} className={linkStyle}>
                        Bathroom Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/by-cleaning-area/kitchen-cleaning" onClick={onClose} className={linkStyle}>
                        Kitchen Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/by-cleaning-area/laundry-cleaning" onClick={onClose} className={linkStyle}>
                        Laundry Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/front-of-house" onClick={onClose} className={linkStyle}>
                        Front of House & Room Solutions
                      </Link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}