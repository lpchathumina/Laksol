"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-4 transition-all duration-300">
        {/* The "Pill" Container */}
        <nav
          className={`
            relative w-full max-w-7xl rounded-full border border-white/20 shadow-xl transition-all duration-300
            flex items-center justify-between px-6 md:px-12 h-20
            ${
              scrolled
                ? "bg-white/90 backdrop-blur-md"
                : "bg-gradient-to-r from-gray-100/80 via-white/80 to-gray-100/80 backdrop-blur-sm"
            }
          `}
        >
          {/* --- LEFT SIDE LINKS (Desktop) --- */}
          <div className="hidden md:flex flex-1 items-center justify-start gap-8">
            <NavLink href="/">Home</NavLink>

            <NavLink href="/shop">Shop</NavLink>

            <NavLink href="/products">Products</NavLink>
          </div>

          {/* --- MIDDLE LOGO --- */}
          <div className="flex items-center justify-center">
            <Link href="/">
              <img 
                src="/laksol.png" 
                alt="Logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* --- RIGHT SIDE LINKS (Desktop) --- */}
          <div className="hidden md:flex flex-1 items-center justify-end gap-8">
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden absolute right-6 text-black hover:text-[#F6AB27] transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* --- MOBILE MENU (Dropdown) --- */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-full px-4 md:hidden">
              <div className="rounded-2xl bg-white/95 backdrop-blur shadow-xl p-6 flex flex-col space-y-4 text-center border border-gray-200">
                <Link href="/" className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#F6AB27] transition-colors">Home</Link>
                <Link href="/shop" className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#F6AB27] transition-colors">Shop</Link>
                <Link href="/products" className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#F6AB27] transition-colors" onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#F6AB27] transition-colors">About Us</Link>
                <Link href="/contact" className="text-sm font-bold uppercase tracking-widest text-black hover:text-[#F6AB27] transition-colors">Contact Us</Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

// --- CUSTOM NAVLINK COMPONENT WITH HOVER ANIMATION ---
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative group text-sm font-bold text-black uppercase tracking-widest hover:text-[#C0222F] transition-colors duration-300"
    >
      {children}
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#C0222F] group-hover:w-full transition-all duration-500 ease-out"></span>
    </Link>
  );
}