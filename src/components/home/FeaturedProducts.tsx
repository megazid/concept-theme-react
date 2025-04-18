"use client";

import Link from "next/link";
import ProductCard from "../shared/ProductCard";

// Import products data with proper types
interface ProductVariant {
  id: string;
  color: string;
  colorCode: string;
  price: number;
  compareAtPrice?: number | null;
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
  salePercentage?: number | null;
  featured: boolean;
}

const products: Product[] = [
  {
    "id": "p1",
    "name": "Flow Harmony Liz",
    "brand": "SONICPULSE",
    "image": "/images/products/flow-harmony-liz.jpg",
    "rating": 5.0,
    "specs": {
      "Driver size": "40mm",
      "Product weight": "323 g",
      "Battery": "38h"
    },
    "variants": [
      {
        "id": "v1-1",
        "color": "White",
        "colorCode": "#FFFFFF",
        "price": 52099,
        "compareAtPrice": null
      },
      {
        "id": "v1-2",
        "color": "Black",
        "colorCode": "#000000",
        "price": 52099,
        "compareAtPrice": null
      }
    ],
    "slug": "flow-harmony-liz",
    "badge": "hot",
    "salePercentage": null,
    "featured": true
  },
  {
    "id": "p2",
    "name": "Audiophile Pro X",
    "brand": "SOUNDWAVE",
    "image": "/images/products/audiophile-pro.jpg",
    "rating": 4.8,
    "specs": {
      "Driver size": "45mm",
      "Product weight": "298 g",
      "Battery": "42h"
    },
    "variants": [
      {
        "id": "v2-1",
        "color": "Black",
        "colorCode": "#000000",
        "price": 45999,
        "compareAtPrice": 59999
      },
      {
        "id": "v2-2",
        "color": "Silver",
        "colorCode": "#C0C0C0",
        "price": 45999,
        "compareAtPrice": 59999
      }
    ],
    "slug": "audiophile-pro-x",
    "badge": "sale",
    "salePercentage": 23,
    "featured": true
  },
  {
    "id": "p3",
    "name": "TrueSound Wireless Elite",
    "brand": "ECHOBEATS",
    "image": "/images/products/truesound-wireless.jpg",
    "rating": 4.5,
    "specs": {
      "Driver size": "8mm",
      "Product weight": "58 g",
      "Battery": "24h"
    },
    "variants": [
      {
        "id": "v3-1",
        "color": "Black",
        "colorCode": "#000000",
        "price": 35499,
        "compareAtPrice": null
      },
      {
        "id": "v3-2",
        "color": "White",
        "colorCode": "#FFFFFF",
        "price": 35499,
        "compareAtPrice": null
      }
    ],
    "slug": "truesound-wireless-elite",
    "badge": "new",
    "salePercentage": null,
    "featured": true
  },
  {
    "id": "p4",
    "name": "SonicBoom Tower Speaker",
    "brand": "BASSMASTER",
    "image": "/images/products/sonicboom-tower.jpg",
    "rating": 4.9,
    "specs": {
      "Output": "1200W",
      "Product weight": "15.2 kg",
      "Bluetooth": "5.2"
    },
    "variants": [
      {
        "id": "v4-1",
        "color": "Black",
        "colorCode": "#000000",
        "price": 125999,
        "compareAtPrice": 149999
      }
    ],
    "slug": "sonicboom-tower-speaker",
    "badge": "sale",
    "salePercentage": 16,
    "featured": true
  }
];

const FeaturedProducts = () => {
  // Get only featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div className="animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Featured Products</h2>
            <p className="text-gray-600 max-w-xl">
              Discover our handpicked selection of premium audio equipment that delivers exceptional quality and performance.
            </p>
          </div>
          <Link 
            href="/shop" 
            className="hidden md:flex items-center text-amber-600 font-medium group animate-fadeIn"
            style={{animationDelay: '300ms'}}
          >
            View All Products
            <svg 
              className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="transform transition-transform hover:-translate-y-1 animate-fadeInUp"
              style={{animationDelay: `${(index + 1) * 100}ms`}}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                brand={product.brand}
                image={product.image}
                rating={product.rating}
                specs={product.specs}
                variants={product.variants.map(v => ({
                  ...v,
                  compareAtPrice: v.compareAtPrice ?? undefined
                }))}
                slug={product.slug}
                badge={product.badge || undefined}
                salePercentage={product.salePercentage !== null ? product.salePercentage : undefined}
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/shop" 
            className="inline-flex items-center text-amber-600 font-medium"
          >
            View All Products
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 