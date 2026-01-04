"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-black/10 backdrop-blur shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" >
              <img src="/logo4.png" alt="lalmina logo" className="h-8 w-30" />
            </Link>
          </div>

          <div className="hidden items-center space-x-6 md:flex font-bold">
            <Link href="/home" className="text-black hover:text-black/60">
              Home
            </Link>
            <Link href="/solution" className="text-black hover:text-black/60">
              Solution
            </Link>
            <Link href="/products" className="text-black hover:text-black/60">
              Products
            </Link>
            <Link href="/about" className="text-black hover:text-black/60">
              About Us
            </Link>
            <Link href="/contact" className="text-black hover:text-black/60">
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 rounded-b-lg backdrop-blur bg-transparent bg white px-3 pb-4 pt-2">
              <Link href="/services" className="block rounded px-3 py-2 text-black hover:text-white">
                Services
              </Link>
              <Link href="/solutions" className="block rounded px-3 py-2 text-black hover:text-white">
                Solutions
              </Link>
              <Link href="/about" className="block rounded px-3 py-2 text-black hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="block rounded px-3 py-2 text-black hover:text-white">
                Contact Us
              </Link>
              <Link href="/careers" className="block rounded px-3 py-2 text-black hover:text-white">
                Careers
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}