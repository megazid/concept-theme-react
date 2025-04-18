"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ShopDropdown from "./dropdowns/ShopDropdown";
import CollectionDropdown from "./dropdowns/CollectionDropdown";
import ExploreDropdown from "./dropdowns/ExploreDropdown";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const exploreRef = useRef<HTMLLIElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavigationLeave = (e: React.MouseEvent) => {
    const target = e.relatedTarget as HTMLElement;
    // Only clear dropdown if we're not moving to another nav item
    if (!target?.closest('nav')) {
      setActiveDropdown(null);
    }
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  // Add the Compare link in the navigation links array
  const navigationLinks = [
    { text: 'Home', href: '/' },
    { text: 'Shop', href: '/shop', hasDropdown: true, dropdownType: 'shop' },
    { text: 'Collections', href: '/collections', hasDropdown: true, dropdownType: 'collection' },
    { text: 'Compare', href: '/compare' },
    { text: 'Explore', href: '#', hasDropdown: true, dropdownType: 'explore' },
    { text: 'Contact', href: '/contact' },
  ];

  return (
    <div className="relative">
      <header 
        className={`w-full fixed top-[32px] left-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="w-full px-2 md:px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <Image 
                src="/next.svg" 
                alt="Brand Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? "transform rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all ${isMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? "transform -rotate-45" : ""}`}></div>
          </button>

          {/* Desktop Navigation */}
          <nav 
            className="hidden md:flex justify-center flex-1"
            onMouseLeave={handleNavigationLeave}
          >
            <ul className="flex items-center space-x-8">
              {navigationLinks.map((link, index) => (
                <li key={index} className="relative">
                  {link.hasDropdown ? (
                    <button 
                      className="font-medium text-gray-800 hover:text-black py-2 transition-colors relative group"
                      onMouseEnter={() => handleMouseEnter(link.dropdownType)}
                      aria-expanded={activeDropdown === link.dropdownType}
                    >
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                    </button>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="font-medium text-gray-800 hover:text-black py-2 transition-colors relative group"
                      onMouseEnter={handleMouseLeave}
                    >
                      {link.text}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              className="text-gray-800 hover:text-black transition-colors"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button
              className="text-gray-800 hover:text-black transition-colors"
              aria-label="My Account"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button
              className="text-gray-800 hover:text-black transition-colors relative"
              aria-label="Shopping Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            {/* Close button for mobile menu */}
            <button 
              className="absolute top-4 right-4 p-2"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="h-full flex flex-col pt-20 px-6">
              <nav className="flex-1">
                <ul className="space-y-6 text-xl">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      {link.hasDropdown && link.dropdownType === 'explore' ? (
                        <details className="group">
                          <summary className="list-none flex justify-between items-center py-2 font-medium cursor-pointer">
                            {link.text}
                            <svg className="w-4 h-4 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <ul className="pl-4 mt-2 space-y-2">
                            <li><Link href="#" className="block py-2" onClick={handleCloseMenu}>Our Story</Link></li>
                            <li><Link href="#" className="block py-2" onClick={handleCloseMenu}>Our Blogs</Link></li>
                            <li><Link href="#" className="block py-2" onClick={handleCloseMenu}>FAQ</Link></li>
                            <li><Link href="#" className="block py-2" onClick={handleCloseMenu}>Contact Us</Link></li>
                          </ul>
                        </details>
                      ) : (
                        <Link href={link.href} className="block py-2 font-medium" onClick={handleCloseMenu}>
                          {link.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="py-8 border-t border-gray-200 mt-8">
                <div className="flex justify-around">
                  <button className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <span className="mt-1 text-sm">Search</span>
                  </button>
                  <button className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="mt-1 text-sm">Account</span>
                  </button>
                  <button className="flex flex-col items-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                    <span className="mt-1 text-sm">Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Shop Dropdown */}
      <ShopDropdown 
        isActive={activeDropdown === 'shop'} 
        onMouseEnter={() => handleMouseEnter('shop')}
      />

      {/* Collection Dropdown */}
      <CollectionDropdown 
        isActive={activeDropdown === 'collection'} 
        onMouseEnter={() => handleMouseEnter('collection')}
      />

      {/* Explore Dropdown */}
      {activeDropdown === 'explore' && <ExploreDropdown isActive={activeDropdown === 'explore'} onMouseEnter={() => handleMouseEnter('explore')} />}
    </div>
  );
};

export default Header; 