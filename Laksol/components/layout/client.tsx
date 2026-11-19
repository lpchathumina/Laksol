'use client';

import React from 'react';

const clients = [
  { name: "Sampath Bank", tag: "SAMPATH" },
  { name: "KFC", tag: "KFC" },
  { name: "DSI", tag: "DSI" },
  { name: "McDonald's", tag: "McDONALD'S" },
  { name: "Pizza Hut", tag: "PIZZA HUT" },
  { name: "LOC", tag: "LOC" },
  { name: "Susil", tag: "SUSIL" },
  { name: "Janasawi", tag: "JANASAWI" },
  { name: "Maliban", tag: "MALIBAN" },
  { name: "BOC", tag: "BOC" }
];

export default function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            OUR CLIENTS
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            We are proud to partner with leading businesses across Sri Lanka, delivering quality cleaning solutions that meet their unique needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 hover:bg-white rounded-xl p-5 text-center cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200 hover:-translate-y-1 flex flex-col items-center justify-center min-h-[100px]"
            >
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-gray-500 group-hover:text-gray-900 transition-colors uppercase">
                {client.tag}
              </span>
              <span className="text-[11px] text-gray-400 group-hover:text-gray-600 mt-1 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}