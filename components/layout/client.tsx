    'use client';

    import React from 'react';
    import Image from 'next/image';

    const clients = [
    { name: "Ballys", logo: "/logos/ballys.png" },
    { name: "Bellagio", logo: "/logos/bellagio.png" },
    { name: "Cafe", logo: "/logos/cafe.jpg" },
    { name: "Dinapala", logo: "/logos/dinapala.jpeg" },
    { name: "Kandy", logo: "/logos/kandy.png" },
    { name: "LA", logo: "/logos/la.png" },
    { name: "Molly", logo: "/logos/molly.png" },
    { name: "Prasad", logo: "/logos/prasad.png" },
    { name: "RichLook", logo: "/logos/rich.png" },
    { name: "RV", logo: "/logos/rv.png" }
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

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
                <div
                key={index}
                className="group relative bg-white rounded-lg p-6 text-center cursor-pointer transition-all duration-300 hover:shadow-xl border border-gray-100 hover:-translate-y-1"
                >
                <div className="relative h-20 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <div className="w-32 h-16 flex items-center justify-center">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        width={80}
                        height={40}
                        className="filter grayscale contrast-75 opacity-80 object-contain"
                    />
                    </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-lg">
                    <div className="h-16 mb-3 flex items-center justify-center">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        width={80}
                        height={40}
                        className="object-contain"
                    />
                    </div>
                    <p className="text-gray-900 text-sm font-medium mt-2">
                    {client.name}
                    </p>
                </div>

                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-500 transition-all duration-300 pointer-events-none" />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }