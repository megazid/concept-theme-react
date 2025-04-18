"use client";

import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-white opacity-5 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            Ready to Experience Premium Sound?
          </h2>
          
          <p className="text-xl mb-10 animate-fadeInUp" style={{animationDelay: '200ms'}}>
            Join thousands of satisfied customers and discover why we're the leading audio equipment provider.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{animationDelay: '400ms'}}>
            <Link 
              href="/shop" 
              className="bg-white text-amber-600 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fadeInUp" style={{animationDelay: '600ms'}}>
            <div>
              <p className="text-4xl font-bold mb-2">50K+</p>
              <p className="text-sm uppercase tracking-wider">Happy Customers</p>
            </div>
            
            <div>
              <p className="text-4xl font-bold mb-2">100+</p>
              <p className="text-sm uppercase tracking-wider">Audio Products</p>
            </div>
            
            <div>
              <p className="text-4xl font-bold mb-2">5★</p>
              <p className="text-sm uppercase tracking-wider">Average Rating</p>
            </div>
            
            <div>
              <p className="text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm uppercase tracking-wider">Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 