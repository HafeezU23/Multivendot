import React, { useState, useEffect, useRef } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate } from 'react-router'

const slides = [
  {
    id: 1,
    title: 'FIND CLOTHES THAT MATCHES YOUR STYLE',
    subtitle: 'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.',
    buttonText: 'Shop Now',
    badge: 'Fashion & Apparel',
    filterCategory: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { number: '200+', label: 'International Brands' },
      { number: '2,000+', label: 'High-Quality Products' },
      { number: '30,000+', label: 'Happy Customers' },
    ]
  },
  {
    id: 2,
    title: 'UPGRADE TO LATEST SMARTPHONES & TECH',
    subtitle: 'Explore cutting-edge flagship smartphones and smart accessories engineered for top performance, stunning cameras, and sleek everyday elegance.',
    buttonText: 'Explore Tech',
    badge: 'Smartphones & Gadgets',
    filterCategory: 'Electronics',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { number: '150+', label: 'Top Tech Brands' },
      { number: '5,000+', label: 'Smart Devices' },
      { number: '50,000+', label: 'Tech Enthusiasts' },
    ]
  },
  {
    id: 3,
    title: 'DISCOVER NEXT-GEN SMARTWATCHES & FIT',
    subtitle: 'Track your health, stay connected, and elevate your personal style with state-of-the-art luxury smartwatches and fitness wearables.',
    buttonText: 'Shop Wearables',
    badge: 'Smartwatches & Fitness',
    filterCategory: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { number: '80+', label: 'Premium Watchmakers' },
      { number: '1,200+', label: 'Smart Accessories' },
      { number: '25,000+', label: 'Active Wearers' },
    ]
  },
  {
    id: 4,
    title: 'FRESH ORGANIC GROCERIES AT YOUR DOOR',
    subtitle: 'Savor farm-fresh organic fruits, fresh vegetables, and artisanal essentials delivered straight to your doorstep with guaranteed freshness.',
    buttonText: 'Order Fresh',
    badge: 'Fresh & Organic',
    filterCategory: 'Home & Kitchen',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { number: '500+', label: 'Local Organic Farms' },
      { number: '10,000+', label: 'Fresh Products' },
      { number: '100,000+', label: 'Delighted Homes' },
    ]
  }
]

const brands = [
  'VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'Calvin Klein', 
  'APPLE', 'SAMSUNG', 'NIKE', 'ADIDAS', 'SONY', 
  'PUMA', 'LG', 'ROLEX', 'DIOR', 'CHANEL'
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)
  const navigate = useNavigate();

  // Auto-slide every 3 seconds (3000ms)
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 3000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="w-full bg-[#F2F0F1] font-sans relative overflow-x-clip">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Main Hero Slider Container */}
      <div 
        className="max-w-full mx-4 md:mx-10 lg:mx-20 px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Wrapper */}
        <div className="relative min-h-[550px] sm:min-h-[580px] md:min-h-[520px] lg:min-h-[480px] flex items-center">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide
            return (
              <div
                key={slide.id}
                className={`w-full transition-all duration-700 ease-in-out grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isActive 
                    ? 'opacity-100 relative z-10 translate-x-0' 
                    : 'opacity-0 absolute inset-0 z-0 pointer-events-none translate-x-8'
                }`}
              >
                {/* Left Text Content */}
                <div className="lg:col-span-7 lg:mx-10 flex flex-col justify-center text-center lg:text-left">
                  {/* Category Badge */}
                  <div className="inline-flex items-center justify-center lg:justify-start mb-3">
                    <span className="bg-black/5 text-black text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full border border-black/10 uppercase tracking-wider">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight leading-[1.1] text-black mb-4 sm:mb-6 max-w-3xl mx-auto lg:mx-0">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6 sm:mb-8 font-normal">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div className="mb-8 sm:mb-12">
                    <button 
                      onClick={() => navigate(`/category?category=${encodeURIComponent(slide.filterCategory)}`)}
                      className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-medium text-sm sm:text-base px-10 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-xl active:scale-[0.98] cursor-pointer"
                    >
                      {slide.buttonText}
                    </button>
                  </div>

                  {/* Stats Counter Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-black/10 max-w-lg mx-auto lg:mx-0">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className={`text-center lg:text-left ${idx !== 0 ? 'border-l border-black/10 pl-2 sm:pl-6' : ''}`}>
                        <div className="text-xl sm:text-3xl font-extrabold text-black tracking-tight">
                          {stat.number}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 font-normal mt-0.5 sm:mt-1 leading-tight">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="lg:col-span-5 relative flex justify-center lg:justify-end items-center">

                  {/* Product Image Box */}
                  <div className="relative lg:me-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[600px] aspect-4/3 sm:aspect-4/3.5 rounded-3xl overflow-hidden shadow-2xl bg-white/60 p-2 sm:p-3 border border-white/80 backdrop-blur-xs">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center shadow-lg backdrop-blur-sm border border-gray-200 transition-all hover:scale-110 cursor-pointer"
        >
          <FiChevronLeft className="text-xl sm:text-2xl" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black flex items-center justify-center shadow-lg backdrop-blur-sm border border-gray-200 transition-all hover:scale-110 cursor-pointer"
        >
          <FiChevronRight className="text-xl sm:text-2xl" />
        </button>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6 z-20 relative">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-black' : 'w-2.5 bg-black/20 hover:bg-black/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Sliding Brand Names Banner (Continuous Infinite Marquee) */}
      <div className="w-full bg-black py-6 sm:py-8 text-white overflow-hidden shadow-inner border-t border-b border-gray-800">
        <div className="animate-marquee items-center gap-10 sm:gap-16 md:gap-20">
          {/* Double array to create smooth seamless infinite loop */}
          {[...brands, ...brands].map((brand, i) => (
            <span
              key={i}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wider uppercase font-serif whitespace-nowrap text-gray-200 hover:text-white transition-colors cursor-default select-none opacity-90 hover:opacity-100"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
