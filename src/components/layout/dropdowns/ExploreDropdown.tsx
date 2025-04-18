import { useState } from "react";
import Link from "next/link";

interface ExploreDropdownProps {
  isActive: boolean;
  onMouseEnter?: () => void;
}

const ExploreDropdown = ({ isActive, onMouseEnter }: ExploreDropdownProps) => {
  return (
    <div 
      className={`absolute left-0 right-0 top-full bg-white shadow-lg z-20 transition-all duration-300 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Story</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Our Team</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Brand Philosophy</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Audio Guides</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Product Reviews</Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-600 hover:text-black transition-colors">Product Comparisons</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Blog</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Latest Articles</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Industry News</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Audio Tech Trends</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-black transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDropdown; 