"use client";

import React from "react";
import Link from "next/link";

// Product categories data
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
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
        onClick={onClose}
      />

      {/* Dropdown Panel */}
      <div className="fixed left-1/2 -translate-x-1/2 top-28 z-50 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[280px]">
          {/* Categories List */}
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
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}