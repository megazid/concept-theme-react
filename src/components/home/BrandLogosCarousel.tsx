"use client";

import { useRef, useState } from 'react';
import Image from 'next/image';

// Simplified logo array with just 5 brands
const techLogos = [
  { id: 1, name: 'Apple', alt: 'Apple' },
  { id: 2, name: 'B&O', alt: 'Bang & Olufsen' },
  { id: 3, name: 'Bose', alt: 'Bose' },
  { id: 4, name: 'DEI', alt: 'DEI' },
  { id: 5, name: 'Urbanista', alt: 'Urbanista' }
];

const BrandLogosCarousel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative py-16 bg-amber-50 overflow-hidden"
      onMouseMove={handleMouseMove}
      ref={sectionRef}
    >
      {/* Wavy background */}
      <div className="absolute inset-0 z-0">
        <svg 
          viewBox="0 0 1440 320" 
          className="absolute bottom-0 left-0 w-full h-auto"
          style={{
            transform: `translateY(${mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <path 
            fill="#f3f4f6" 
            fillOpacity="0.5" 
            d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,213.3C672,203,768,149,864,144C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 mb-10 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Trusted by Leading Tech Brands
        </h2>
      </div>

      {/* Logo row */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
          {techLogos.map((logo, index) => (
            <div 
              key={logo.id}
              className="transform transition-all duration-300"
              style={{ 
                transform: `translateY(${mousePosition.y * 15 * (index % 2 === 0 ? 1 : -1)}px)`
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div 
                className={`w-44 h-16 md:w-56 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-md relative overflow-hidden transition-all duration-300 ${
                  hoverIndex === index ? 'shadow-lg scale-105' : ''
                }`}
              >
                <div className="text-gray-800 font-bold text-xl md:text-2xl">{logo.name}</div>
                
                {/* Shine effect */}
                <div className={`absolute inset-0 shine-effect opacity-0 ${hoverIndex === index ? 'opacity-100' : ''} transition-opacity duration-700`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .shine-effect {
          background: linear-gradient(
            90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.2) 50%, 
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
          top: 0;
          left: -100%;
          width: 300%;
          height: 100%;
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% {
            left: -100%;
          }
          20% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default BrandLogosCarousel; 