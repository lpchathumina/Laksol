<section className="relative bg-gray-200 min-h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8 z-10">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-blue-600 leading-tight uppercase"
                style={{ fontFamily: 'Impact, Arial Black, sans-serif' }}
              >
                WELCOME TO<br />LAKSOL
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 leading-tight">
                8 Focus Areas For a Clean and Sanitary Kitchen.
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
                Fairy Professional Washing Up Liquid Antibacterial is a super concentrated liquid detergent for washing dishes, pots, pans, and kitchen surfaces. Our professional-grade formula ensures sparkling clean results with every use.
              </p>

              {/* CTA Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-gray-400 hover:bg-gray-500 text-gray-900 font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg uppercase tracking-wide"
                >
                  CONTACT US
                </Link>
              </div>
            </div>

            {/* Right Side - Product Bottles */}
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Center Large Bottle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-96 h-auto z-20">
                <Image
                  src="/products/harpic-center.png"
                  alt="Harpic Bathroom Cleaning Spray"
                  width={400}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Top Left Small Bottle */}
              <div className="absolute left-0 top-8 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-1.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Top Center Small Bottle */}
              <div className="absolute left-1/3 top-0 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-2.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Top Right Small Bottle */}
              <div className="absolute right-1/4 top-12 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-3.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>

              {/* Bottom Right Small Bottle */}
              <div className="absolute right-0 top-1/3 w-32 md:w-40 h-auto z-10">
                <Image
                  src="/products/harpic-small-4.png"
                  alt="Harpic Product"
                  width={160}
                  height={240}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons - Right Side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 pr-6 md:pr-8 z-30">
          {/* Vertical Line */}
          <div className="w-0.5 h-24 bg-gray-700" />
          
          {/* Facebook Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </Link>

          {/* WhatsApp Icon */}
          <Link
            href="#"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </Link>

          {/* Down Arrow */}
          <div className="mt-4">
            <svg
              className="w-6 h-6 text-gray-700 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>