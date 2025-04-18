"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Hero Background" 
          fill 
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          className="transition-transform duration-[20s] hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black opacity-40 animate-fadeIn"></div>
      </div>

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight animate-fadeInUp">
            Experience Sound Like Never Before
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Immerse yourself in premium audio technology designed for those who demand the best.
          </p>
          <div className="flex flex-wrap gap-4 animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <Link 
              href="/shop" 
              className="relative overflow-hidden px-8 py-3 bg-white text-black font-medium rounded-md group"
            >
              <span className="relative z-10">Shop Now</span>
              <span className="absolute inset-0 bg-amber-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </Link>
            <Link 
              href="/collections" 
              className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors group"
            >
              <span>Explore Collections</span>
              <svg 
                className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent"></div>
      <div className="absolute bottom-10 right-10 flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
        <div className="w-2 h-2 rounded-full bg-white opacity-30"></div>
      </div>
    </div>
  );
};

export default HeroSection; 