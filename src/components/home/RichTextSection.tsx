"use client";

import Link from 'next/link';

const RichTextSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fadeIn">
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-amber-100 rounded-full opacity-50 blur-lg"></div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-200 rounded-full opacity-30 blur-xl"></div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
              We believe in the 
              <span className="relative">
                power of sound
                <span className="absolute bottom-2 left-0 w-full h-4 bg-amber-200/70 -z-10 animate-growWidth"></span>
              </span>
            </h2>
            
            <Link 
              href="/about"
              className="inline-flex items-center mt-6 font-medium text-gray-900 hover:text-amber-600 transition-all group"
            >
              <span className="relative">
                Our Story
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </span>
              <svg 
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </Link>
          </div>
          
          <div className="space-y-6 relative animate-fadeInUp">
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-50 rounded-full opacity-20 blur-xl"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold relative inline-block">
                Harmony Sound
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-300"></span>
              </span> is more than just an audio equipment retailer. We represent the grandeur of sound in its finest manifestations. Our mission is to cater to audiophiles and those who simply appreciate quality sound.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer audio devices that combine unparalleled sound with elegant design. Every product in our catalog promises a full immersion into the world of music for those unwilling to compromise on quality.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              We offer everything from the warm sound of vinyl records to the clarity and crispness of modern wireless headphones, ensuring every note sounds impeccable.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {["Audiophile", "Premium", "Quality", "Design"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RichTextSection; 