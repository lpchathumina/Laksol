"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const byIndustry = [
  { name: "Care Homes", href: "/solutions/by-industry/care-homes" },
  { name: "Accommodation", href: "/solutions/by-industry/accommodation" },
  { name: "Restaurants", href: "/solutions/by-industry/restaurants" },
  { name: "Facilities", href: "/solutions/by-industry/facilities" },
  { name: "Bars & Cafes", href: "/solutions/by-industry/bars-cafes" },
];

const byCleaningArea = [
  { name: "Bathroom Cleaning", href: "/solutions/by-cleaning-area/bathroom-cleaning" },
  { name: "Kitchen Cleaning", href: "/solutions/by-cleaning-area/kitchen-cleaning" },
  { name: "Laundry Cleaning", href: "/solutions/by-cleaning-area/laundry-cleaning" },
  { name: "Front of House & Room Solutions", href: "/solutions/front-of-house" },
];

interface SolutionDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SolutionDropdown({ isOpen, onClose }: SolutionDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay - closes dropdown when clicking outside */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40"
          />

          {/* Dropdown Panel - positioned directly below the button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-10 z-50"
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[500px]"
              onMouseLeave={onClose}
            >
              <div className="py-4 grid grid-cols-2">
                
                {/* --- COLUMN 1: By Industry --- */}
                <div className="border-r border-gray-100">
                  <h3 className="px-6 py-2 text-[#003B73] font-bold text-sm uppercase tracking-wider">
                    By Industry
                  </h3>
                  {byIndustry.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                    >
                      <span className="text-gray-700 group-hover:text-[#2727f6] transition-colors duration-300 text-[15px]">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* --- COLUMN 2: By Cleaning Area --- */}
                <div>
                  <h3 className="px-6 py-2 text-[#003B73] font-bold text-sm uppercase tracking-wider">
                    By Cleaning Area
                  </h3>
                  {byCleaningArea.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                    >
                      <span className="text-gray-700 group-hover:text-[#2727f6] transition-colors duration-300 text-[15px]">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}