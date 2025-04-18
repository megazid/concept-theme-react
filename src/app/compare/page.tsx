import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/shared/Hero';
import ImageComparison from '@/components/shared/ImageComparison';

export const metadata: Metadata = {
  title: 'Product Comparisons - Audio Store',
  description: 'Compare our premium audio products to find the perfect match for your needs'
};

export default function ComparePage() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Compare Products" 
        subtitle="Slide to compare and find the perfect audio gear for your needs"
        bgImage="/images/hero-compare.jpg"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Compare', href: '/compare' }
        ]}
      />
      
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Headphones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the differences between our premium headphone models to find your perfect audio match.
            </p>
          </div>
          
          <div className="space-y-24 mb-24">
            {/* Headphone Comparison 1 */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6">Gold Tone vs Crimson Shadow</h3>
              <ImageComparison 
                beforeImage="/images/products/headphone-gold.jpg"
                afterImage="/images/products/headphone-black.jpg"
                beforeLabel="Gold Tone Edition"
                afterLabel="Crimson Shadow Edition"
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-amber-50 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '200ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Gold Tone Highlights</h4>
                  <ul className="space-y-2">
                    <li>Warm, rich sound signature perfect for jazz and classical</li>
                    <li>Elegant cream and gold design</li>
                    <li>Ultra-comfortable memory foam ear cushions</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '300ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Crimson Shadow Highlights</h4>
                  <ul className="space-y-2">
                    <li>Powerful bass response ideal for modern music</li>
                    <li>Sleek matte black with crimson accents</li>
                    <li>Enhanced noise cancellation technology</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Headphone Comparison 2 */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6">Wireless vs Studio Pro</h3>
              <ImageComparison 
                beforeImage="/images/products/wireless-earbuds.jpg"
                afterImage="/images/products/studio-headphones.jpg"
                beforeLabel="Wireless Freedom"
                afterLabel="Studio Pro Experience"
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-blue-50 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '200ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Wireless Earbuds Benefits</h4>
                  <ul className="space-y-2">
                    <li>Ultra-portable and lightweight design</li>
                    <li>Perfect for active lifestyles and workouts</li>
                    <li>Up to 8 hours of playback per charge</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '300ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Studio Pro Benefits</h4>
                  <ul className="space-y-2">
                    <li>Professional-grade sound quality</li>
                    <li>Superior noise isolation for studio work</li>
                    <li>Durable construction for years of use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Speaker Systems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our speaker systems to find the perfect setup for your space.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Speaker Comparison */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold mb-6">Compact vs Tower Speakers</h3>
              <ImageComparison 
                beforeImage="/images/products/compact-speaker.jpg"
                afterImage="/images/products/tower-speaker.jpg"
                beforeLabel="Compact Bookshelf"
                afterLabel="Tower Performance"
                className="mb-8"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-green-50 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '200ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Compact Speaker Benefits</h4>
                  <ul className="space-y-2">
                    <li>Space-saving design for smaller rooms</li>
                    <li>Surprisingly powerful sound in a small package</li>
                    <li>Easy to reposition and integrate with existing decor</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-6 rounded-lg animate-fadeInUp" style={{animationDelay: '300ms'}}>
                  <h4 className="text-lg font-semibold mb-3">Tower Speaker Benefits</h4>
                  <ul className="space-y-2">
                    <li>Full-range sound with deep, resonant bass</li>
                    <li>Designed for larger spaces and audiophile experience</li>
                    <li>Statement piece with premium finish options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 