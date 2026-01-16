"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const productCategories = [
  { name: "Degreasing", href: "/products/degreasing" },
  { name: "Dishwashing", href: "/products/dishwashing" },
  { name: "Disinfectants", href: "/products/disinfectants" },
  { name: "Floor Care", href: "/products/floor-care" },
  { name: "Hard Surface Cleaning", href: "/products/hard-surface-cleaning" },
  { name: "Laundry Detergents", href: "/products/laundry-detergents" },
  { name: "Fairy Commercial Auto Dish Washing System", href: "/products/fairy-commercial" },
  { name: "Auto-dose Laundry", href: "/products/auto-dose-laundry" },
];

interface ProductsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductsDropdown({ isOpen, onClose }: ProductsDropdownProps) {
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
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
          />

          {/* Dropdown Panel */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 -translate-x-1/2 top-28 z-50"
          >
            <div 
              className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px]"
              onMouseLeave={onClose}
            >
              <div className="py-4">
                {productCategories.map((category, index) => (
                  <Link
                    key={index}
                    href={category.href}
                    onClick={onClose}
                    className="group flex items-center px-6 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                  >
                    <span className="text-gray-700 group-hover:text-[#2727f6] transition-colors duration-300 text-[15px]">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}