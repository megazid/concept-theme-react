"use client";

import { useRef } from 'react';

interface ScrollingTextProps {
  className?: string;
}

const ScrollingText = ({ className = '' }: ScrollingTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={containerRef}
      className={`w-full overflow-hidden bg-zinc-900 py-6 ${className}`}
    >
      <div className="scrolling-container">
        <div className="scrolling-text">
          <span className="text-7xl md:text-8xl font-black text-white uppercase px-8 leading-none" style={{ fontFamily: "'Impact', sans-serif" }}>
            Sound • Play anything • Day-long comfort
          </span>
          <span className="w-6 h-6 rounded-full bg-white mx-8 inline-block"></span>
          
          <span className="text-7xl md:text-8xl font-black text-white uppercase px-8 leading-none" style={{ fontFamily: "'Impact', sans-serif" }}>
            Sound • Play anything • Day-long comfort
          </span>
          <span className="w-6 h-6 rounded-full bg-white mx-8 inline-block"></span>
        </div>

        <style jsx>{`
          .scrolling-container {
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
          }
          
          .scrolling-text {
            display: inline-block;
            white-space: nowrap;
            animation: scrollText 30s linear infinite;
          }
          
          @keyframes scrollText {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ScrollingText; 