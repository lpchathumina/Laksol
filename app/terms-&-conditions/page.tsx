'use client';

import React, { useState } from 'react';

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing and using the Lakmina Products website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services. These terms apply to all visitors, users, and customers.",
  },
  {
    title: "Products & Orders",
    content:
      "All products are subject to availability. We reserve the right to discontinue any product or refuse any order at any time. Prices are subject to change without notice. When placing an order, you confirm that all information provided is accurate and complete.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment must be received before goods are dispatched. We accept major credit cards, debit cards, and bank transfers. All prices are listed in Sri Lankan Rupees (LKR) unless otherwise stated. We are not responsible for currency conversion charges applied by your bank.",
  },
  {
    title: "Delivery & Shipping",
    content:
      "We aim to dispatch orders within 2–3 business days. Delivery times vary by location. We are not liable for delays caused by weather, customs, or carrier issues. Risk of loss passes to you upon delivery to the carrier.",
  },
  {
    title: "Returns & Refunds",
    content:
      "Unused products in original packaging may be returned within 14 days of receipt for a full refund or exchange. Opened or used products cannot be returned unless defective. To initiate a return, contact our customer service with your order number.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content on this website — including text, graphics, logos, and images — is the property of Lakmina Products and protected by intellectual property laws. You may not reproduce or distribute any content without our written permission.",
  },
  {
    title: "Limitation of Liability",
    content:
      "To the fullest extent permitted by law, Lakmina Products is not liable for any indirect, incidental, or consequential damages arising from use of our website or products. Our total liability shall not exceed the amount paid for the specific product in question.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms and Conditions are governed by the laws of Sri Lanka. Any disputes arising under these terms are subject to the exclusive jurisdiction of the courts of Sri Lanka.",
  },
];

export default function TermsAndConditions() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50 mt-30">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <span>Lakmina Products</span>
            <span>›</span>
            <span className="text-gray-600">Terms & Conditions</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
          <p className="text-sm text-gray-500">Last updated: February 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Notice */}
        <div className="border-l-4 border-red-600 bg-red-50 rounded-r-xl px-5 py-4 mb-10">
          <p className="text-sm text-gray-600 leading-relaxed">
            Please read these terms carefully before using our website or placing an order. By using
            our services, you agree to be legally bound by the terms below.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 mb-20">
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