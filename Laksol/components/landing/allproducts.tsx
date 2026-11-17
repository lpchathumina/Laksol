'use client';

import Image from 'next/image';

export default function ServicesGrid() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white p-8">
      <div className="max-w-[1280px] w-full">
        <div className="flex gap-4 flex-wrap md:flex-nowrap">
          {/* Left Column - Dishwash (Large) */}
          <div className="w-full md:w-[300px] h-[500px]">
            <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-100 hover:shadow-2xl hover:scale-100 hover:border-[#00E5FF]/40 hover:shadow-[0_20px_60px_rgba(0,229,255,0.15)]">
              <Image src="/dishwash.jpg" alt="Dishwash" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
              {/* Accent glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(0,229,255,0.15) 0%, transparent 70%)' }} />
              {/* Corner bracket */}
              <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#00E5FF]/60 group-hover:scale-110" />
              {/* Number */}
              <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300">01</span>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Dishwash</h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">Crystal-clean results</p>
              </div>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#00E5FF] rounded-tr-full" />
            </div>
          </div>

          {/* Middle Column - Handwash and Floor Care */}
          <div className="w-full md:w-[300px] flex flex-col gap-4">
            <div className="w-full h-[240px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#B4FF39]/40 hover:shadow-[0_20px_60px_rgba(180,255,57,0.15)]">
                <Image src="/handwash.jpg" alt="Handwash" fill className="object-cover transition-transform duration-200 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(180,255,57,0.15) 0%, transparent 70%)' }} />
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#B4FF39]/60 group-hover:scale-110" />
                <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-100">02</span>
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Handwash</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">Gentle & effective</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#B4FF39] rounded-tr-full" />
              </div>
            </div>
            <div className="w-full h-[240px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#FF6BFF]/40 hover:shadow-[0_20px_60px_rgba(255,107,255,0.15)]">
                <Image src="/floorcare.jpg" alt="Floor Care" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(255,107,255,0.15) 0%, transparent 70%)' }} />
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#FF6BFF]/60 group-hover:scale-110" />
                <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300">03</span>
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Floor Care</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">Spotless surfaces</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#FF6BFF] rounded-tr-full" />
              </div>
            </div>
          </div>

          {/* Right Column - Carwash and Degreasing */}
          <div className="w-full md:w-[300px] flex flex-col gap-4">
            <div className="w-full h-[240px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#FFB800]/40 hover:shadow-[0_20px_60px_rgba(255,184,0,0.15)]">
                <Image src="/carwash.jpg" alt="Carwash" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(255,184,0,0.15) 0%, transparent 70%)' }} />
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#FFB800]/60 group-hover:scale-110" />
                <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300">04</span>
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Carwash</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">Showroom shine</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#FFB800] rounded-tr-full" />
              </div>
            </div>
            <div className="w-full h-[240px]">
              <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#FF4757]/40 hover:shadow-[0_20px_60px_rgba(255,71,87,0.15)]">
                <Image src="/degreasing.jpg" alt="Degreasing" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(255,71,87,0.15) 0%, transparent 70%)' }} />
                <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#FF4757]/60 group-hover:scale-110" />
                <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300">05</span>
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Degreasing</h3>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">Heavy-duty power</p>
                </div>
                <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#FF4757] rounded-tr-full" />
              </div>
            </div>
          </div>

          {/* Far Right Column - Disinfectants (Large) */}
          <div className="w-full md:w-[300px] h-[500px]">
            <div className="relative overflow-hidden rounded-3xl group cursor-pointer w-full h-full border border-white/5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:border-[#00FFC6]/40 hover:shadow-[0_20px_60px_rgba(0,255,198,0.15)]">
              <Image src="/disinfectants.jpg" alt="Disinfectants" fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at bottom left, rgba(0,255,198,0.15) 0%, transparent 70%)' }} />
              <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-white/15 rounded-tl-lg transition-all duration-300 group-hover:border-[#00FFC6]/60 group-hover:scale-110" />
              <span className="absolute top-5 right-5 font-black text-xs tracking-widest text-white/20 group-hover:text-white/60 transition-colors duration-300">06</span>
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <h3 className="text-white text-3xl font-black tracking-wide transition-all duration-300 group-hover:translate-x-1">Disinfectants</h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/40 mt-1 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-75">99.9% protection</p>
              </div>
              <div className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#00FFC6] rounded-tr-full" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}