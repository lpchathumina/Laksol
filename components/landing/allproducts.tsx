'use client';

import Image from 'next/image';

export default function ServicesGrid() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-[1280px] w-full">
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          {/* Left Column - Dishwash (Large) */}
          <div className="w-full md:w-[300px] h-[380px]">
            <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src="/images/dishwash.jpg"
                alt="Dishwash"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                  Dishwash
                </h3>
              </div>
            </div>
          </div>

          {/* Middle Column - Handwash and Floor Care */}
          <div className="w-full md:w-[300px] flex flex-col gap-4">
            <div className="w-full h-[180px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <Image
                  src="/images/handwash.jpg"
                  alt="Handwash"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                    Handwash
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-[180px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <Image
                  src="/images/floor-care.jpg"
                  alt="Floor Care"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                    Floor Care
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Carwash and Degreasing */}
          <div className="w-full md:w-[300px] flex flex-col gap-4">
            <div className="w-full h-[180px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <Image
                  src="/images/carwash.jpg"
                  alt="Carwash"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                    Carwash
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-full h-[180px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <Image
                  src="/images/degreasing.jpg"
                  alt="Degreasing"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                    Degreasing
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Far Right Column - Disinfectants (Large) */}
          <div className="w-full md:w-[300px] h-[380px]">
            <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              <Image
                src="/images/disinfectants.jpg"
                alt="Disinfectants"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl md:text-3xl font-semibold text-center px-4 transition-all duration-500 group-hover:scale-110 group-hover:text-shadow-lg">
                  Disinfectants
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}