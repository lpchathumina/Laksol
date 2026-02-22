'use client';

import React, { useState } from 'react';

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us when you create an account, place an order, or contact us for support — including your name, email address, phone number, shipping address, and payment information. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, and pages viewed.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to process and fulfill your orders, communicate with you about products and services, send promotional communications with your consent, improve our website and services, comply with legal obligations, and protect against fraudulent or illegal activity.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website, provided they agree to keep this information confidential. We may also disclose your information when required by law.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "Our website uses cookies to enhance your experience, remember your preferences, and understand how visitors interact with our site. You can disable cookies through your browser settings, though this may affect some website functionality.",
  },
  {
    title: "Data Security",
    content:
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, update, or delete the personal information we hold about you. You may also request restriction of processing or data portability. To exercise these rights, please contact us using the details below.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the effective date. We encourage you to review this policy periodically.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 mt-30">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <span>Lakmina Products</span>
            <span>›</span>
            <span className="text-gray-600">Privacy Policy</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: February 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed mb-10 text-[15px]">
          At Lakmina Products, we are committed to protecting your privacy. This policy explains how we
          collect, use, and safeguard your personal information when you use our website and services.
        </p>

        {/* Sections */}
        <div className="space-y-8 mt-10 mb-20">
          {sections.map((section, i) => (
            <div key={i} className="border-b border-gray-100 pb-8 last:border-0">
              <div className="flex items-start gap-4">
                <span className="text-xs font-semibold text-gray-300 mt-1 w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-base font-semibold text-gray-900 mb-2">{section.title}</h2>
                  <p className="text-[14px] text-gray-500 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}