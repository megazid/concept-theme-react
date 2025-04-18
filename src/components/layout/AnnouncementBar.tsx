"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const animateGlow = () => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to('.announcement-highlight', {
        textShadow: '0 0 7px rgba(255,255,255,0.7)',
        duration: 1.5,
        ease: 'sine.inOut'
      });
    };
    
    animateGlow();
    
    return () => {
      gsap.killTweensOf('.announcement-highlight');
    };
  }, []);
  
  const handleClose = () => {
    gsap.to('.announcement-bar', {
      height: 0,
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
      onComplete: () => setIsVisible(false)
    });
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="announcement-bar w-full bg-black text-white text-sm z-50">
      <div className="max-w-[1440px] mx-auto px-4 py-2 flex items-center justify-between">
        {/* Social Icons */}
        <div className="flex space-x-3">
          <a href="#" className="text-white hover:text-red-500 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
        
        {/* Central Message */}
        <div className="hidden md:block text-center animate-pulse">
          <Link 
            href="/contact" 
            className="inline-flex items-center hover:text-red-400 transition-colors"
          >
            <span>Save up to</span>
            <span className="mx-1 font-bold announcement-highlight text-red-500">60%</span>
            <span>with code</span>
            <span className="ml-1 font-bold text-red-500">BLACKFRIDAY</span>
          </Link>
        </div>
        
        {/* Language and Currency */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center text-white hover:text-red-400 transition-colors">
              <span className="mr-1">English</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-zinc-800 shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">English</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">French</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">Spanish</a>
            </div>
          </div>
          
          <div className="relative group">
            <button className="flex items-center text-white hover:text-red-400 transition-colors">
              <span className="mr-1">Egypt (EGP ₤)</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-zinc-800 shadow-lg rounded-md overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">USD ($)</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">EUR (€)</a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-zinc-700 transition-colors">GBP (£)</a>
            </div>
          </div>

          <button 
            onClick={handleClose} 
            className="text-white hover:text-red-500 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar; 