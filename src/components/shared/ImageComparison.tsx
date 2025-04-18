"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  showHeader?: boolean;
}

const ImageComparison = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt = "Before image",
  afterAlt = "After image",
  className = "",
  showHeader = true
}: ImageComparisonProps) => {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const calculatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerLeft = containerRect.left;
    
    // Calculate position as percentage
    let newPosition = ((clientX - containerLeft) / containerWidth) * 100;
    
    // Clamp position between 1 and 99 to ensure labels remain visible
    newPosition = Math.max(1, Math.min(99, newPosition));
    
    setPosition(newPosition);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    calculatePosition(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    calculatePosition(e.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className={`${className}`}>
      {showHeader && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Drag to Compare</h3>
          <p className="text-gray-600">See the difference between our premium models</p>
        </div>
      )}

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-lg shadow-lg aspect-[16/9]"
      >
        {/* Before image (full width) */}
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${beforeImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Before Label - always visible on left side */}
          <div 
            className="absolute top-4 left-4 bg-white text-black px-4 py-2 rounded-full font-medium shadow-md"
          >
            {beforeLabel}
          </div>
        </div>

        {/* After image (clipped) */}
        <div 
          className="absolute top-0 right-0 h-full"
          style={{
            width: `${100 - position}%`,
            backgroundImage: `url(${afterImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center'
          }}
        >
          {/* After Label - always visible on right side */}
          <div 
            className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-full font-medium shadow-md"
          >
            {afterLabel}
          </div>
        </div>

        {/* Slider */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m0 0l-4-4m4 4l-4 4m-4 6h8m-8 0l4 4m-4-4l4-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparison; 