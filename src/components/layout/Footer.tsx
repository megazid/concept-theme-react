import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/next.svg" 
                alt="Brand Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto invert"
              />
            </Link>
            
            <div className="space-y-2">
              <a 
                href="tel:+21-0-987-6543-21" 
                className="block hover:text-gray-300 transition-colors"
              >
                +21 (0) 987 6543 21
              </a>
              <a 
                href="mailto:hello@domain.com" 
                className="block hover:text-gray-300 transition-colors"
              >
                hello@domain.com
              </a>
            </div>
          </div>

          {/* Collections Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/headphones" className="hover:text-gray-300 transition-colors">
                  Headphones
                </Link>
              </li>
              <li>
                <Link href="/earphones" className="hover:text-gray-300 transition-colors">
                  Earphones
                </Link>
              </li>
              <li>
                <Link href="/speakers" className="hover:text-gray-300 transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="hover:text-gray-300 transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/our-story" className="hover:text-gray-300 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-gray-300 transition-colors">
                  Our Journal
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-gray-300 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (full width on small screens) */}
          <div className="md:col-span-3 lg:col-span-1 mt-8 md:mt-0">
            <div className="lg:border-l lg:border-gray-700 lg:pl-8">
              <h3 className="text-2xl font-semibold mb-4">Stay in the loop with our weekly newsletter</h3>
              <div className="flex mt-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-gray-600"
                />
                <button 
                  type="submit" 
                  className="bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-r-md transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-8">
                <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300 transition-colors" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Concept Theme Tech. Powered by Shopify</p>
          
          {/* Payment Methods */}
          <div className="flex space-x-2 mt-4 md:mt-0">
            <span className="bg-white rounded p-1">
              <Image src="/visa.svg" alt="Visa" width={32} height={20} className="h-5 w-auto" />
            </span>
            <span className="bg-white rounded p-1">
              <Image src="/mastercard.svg" alt="Mastercard" width={32} height={20} className="h-5 w-auto" />
            </span>
            <span className="bg-white rounded p-1">
              <Image src="/amex.svg" alt="American Express" width={32} height={20} className="h-5 w-auto" />
            </span>
            <span className="bg-white rounded p-1">
              <Image src="/paypal.svg" alt="PayPal" width={32} height={20} className="h-5 w-auto" />
            </span>
            <span className="bg-white rounded p-1">
              <Image src="/apple-pay.svg" alt="Apple Pay" width={32} height={20} className="h-5 w-auto" />
            </span>
            <span className="bg-white rounded p-1">
              <Image src="/discover.svg" alt="Discover" width={32} height={20} className="h-5 w-auto" />
            </span>
          </div>
          
          {/* Language Selector */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <button className="text-sm text-gray-400 hover:text-white flex items-center">
              <span className="mr-2">English</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            
            <button className="text-sm text-gray-400 hover:text-white flex items-center">
              <span className="mr-2">EGP (£)</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 