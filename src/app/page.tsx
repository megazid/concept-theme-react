import React from 'react';
import Hero from '@/components/shared/Hero';
import ScrollingText from '@/components/shared/ScrollingText';
import collections from '@/data/collections.json';
import products from '@/data/products.json';
import Grid from '@/components/shared/Grid';
import CollectionCard from '@/components/shared/CollectionCard';
import ProductCard from '@/components/shared/ProductCard';
import Link from 'next/link';
import RichTextSection from '@/components/home/RichTextSection';
import ProductComparison from '@/components/home/ProductComparison';
import BrandLogosCarousel from "@/components/home/BrandLogosCarousel";

// Define types for ProductCard props
interface ProductVariant {
  id: string;
  color: string;
  colorCode: string;
  price: number;
  compareAtPrice?: number;
}

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  rating: number;
  specs: {
    [key: string]: string;
  };
  variants: ProductVariant[];
  slug: string;
  badge?: 'hot' | 'sale' | 'new' | null;
  salePercentage?: number;
}

// Utility function to convert specs to the required format
const convertSpecs = (specs: any): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  for (const key in specs) {
    if (Object.prototype.hasOwnProperty.call(specs, key)) {
      result[key] = String(specs[key]);
    }
  }
  return result;
};

export default function Home() {
  // Featured collections (first 4)
  const featuredCollections = collections.slice(0, 4);
  
  // Featured products (first 4)
  const typedProducts: Product[] = products.map(product => ({
    ...product,
    specs: convertSpecs(product.specs),
    variants: product.variants.map(variant => ({
      ...variant,
      compareAtPrice: variant.compareAtPrice || undefined
    })),
    badge: product.badge as 'hot' | 'sale' | 'new' | null | undefined,
    salePercentage: product.salePercentage || undefined
  }));
  
  const featuredProducts = typedProducts.slice(0, 4);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Premium Audio Gear" 
        subtitle="Experience sound like never before with our high-quality audio equipment."
        bgImage="/images/hero-home.jpg"
        breadcrumbs={[]}
      />
      
      {/* Scrolling Text */}
      <ScrollingText className="my-8" />

      {/* Rich Text Section */}
      <RichTextSection />
      
      {/* Collections Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Shop by Collection</h2>
            <Link 
              href="/collections" 
              className="text-sm font-medium flex items-center hover:text-gray-900 transition-colors"
            >
              View All Collections
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredCollections.map((collection) => (
              <CollectionCard 
                key={collection.id} 
                id={collection.id}
                name={collection.name}
                description={collection.description}
                image={collection.image}
                productCount={collection.productCount}
                slug={collection.slug}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Comparison Section */}
      <ProductComparison />
      
      {/* Featured Products Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Featured Products</h2>
            <Link 
              href="/shop" 
              className="text-sm font-medium flex items-center hover:text-gray-900 transition-colors"
            >
              View All Products
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id} 
                name={product.name}
                brand={product.brand}
                image={product.image}
                rating={product.rating}
                specs={product.specs}
                variants={product.variants}
                slug={product.slug}
                badge={product.badge}
                salePercentage={product.salePercentage}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-primary text-white py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Stay updated with our latest products, exclusive deals, and audio technology news.
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow py-3 px-4 text-gray-900 focus:outline-none rounded-l-lg"
            />
            <button className="bg-black text-white py-3 px-6 rounded-r-lg font-medium hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      {/* Add the BrandLogosCarousel component */}
      <BrandLogosCarousel />
    </main>
  );
}
