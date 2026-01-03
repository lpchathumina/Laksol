'use client';

import { useState, useEffect, useRef } from 'react';

export default function OurServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      image: "/help.gif",
      title: "Expert Cleaning\nConsultation"
    },
    {
      image: "/24.gif",
      title: "24/7 Customer\nSupport"
    },
    {
      image: "/delivery.gif",
      title: "Fast & Reliable\nDelivery"
    },
    {
      image: "/people.gif",
      title: "Trained Service\nProfessionals"
    },
    {
      image: "/Handshake.gif",
      title: "Trusted Business\nPartnerships"
    },
    {
      image: "/money.png",
      title: "Competitive\nPricing"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 
            className={`text-3xl md:text-4xl font-bold text-black uppercase tracking-wide mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            OUR SERVICES
          </h2>
          
          {/* Description */}
          <p 
            className={`text-gray-900 text-base md:text-md leading-relaxed max-w-5xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            At Lakmina Products, we go beyond manufacturing exceptional cleaning solutions. We provide comprehensive services designed to meet the unique needs of households, businesses, and industries. From expert consultation to reliable delivery, our commitment to quality extends to every aspect of customer experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16">
          {/* Top Row - 4 Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="flex items-stretch">
                <div 
                  className={`flex flex-col items-center justify-start text-center p-6 min-h-[200px] flex-1 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="text-gray-900 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed whitespace-pre-line">
                    {service.title}
                  </p>
                </div>
                
                {/* Vertical Divider */}
                {index < 3 && (
                  <div className="hidden lg:block w-px bg-gray-300" />
                )}
              </div>
            ))}
          </div>

          {/* Horizontal Divider */}
          <div className="hidden lg:block h-px bg-gray-300 my-0" />

          {/* Bottom Row - 2 Items Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Empty space for centering */}
            <div className="hidden lg:block" />
            
            {services.slice(4, 6).map((service, index) => (
              <div key={index + 4} className="flex items-stretch">
                <div 
                  className={`flex flex-col items-center justify-start text-center p-6 min-h-[200px] flex-1 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 150}ms` }}
                >
                  <div className="text-gray-900 mb-4">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  <p className="text-gray-900 text-sm font-medium leading-relaxed whitespace-pre-line">
                    {service.title}
                  </p>
                </div>
                
                {/* Vertical Divider */}
                {index < 1 && (
                  <div className="hidden lg:block w-px bg-gray-300" />
                )}
              </div>
            ))}
            
            {/* Empty space for centering */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}