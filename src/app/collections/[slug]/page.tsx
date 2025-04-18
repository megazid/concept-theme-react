import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import ProductCard from "@/components/shared/ProductCard";

// Import collections as a plain array
const collections = [
  {
    "id": "c1",
    "name": "Headphones",
    "description": "Surround yourself in sound",
    "image": "/images/collections/collection-02.webp",
    "productCount": 15,
    "slug": "headphones"
  },
  {
    "id": "c2",
    "name": "Earphones",
    "description": "Small design, great sound",
    "image": "/images/collections/collection-03.webp",
    "productCount": 8,
    "slug": "earphones"
  },
  {
    "id": "c3",
    "name": "Speakers",
    "description": "The world's most immersive sound",
    "image": "/images/collections/collection-04.webp",
    "productCount": 12,
    "slug": "speakers"
  },
  {
    "id": "c4",
    "name": "Accessories",
    "description": "Optimal condition for years",
    "image": "/images/collections/collection-07.webp",
    "productCount": 23,
    "slug": "accessories"
  }
];

interface CollectionPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const collection = collections.find(c => c.slug === params.slug);
  
  if (!collection) {
    return {
      title: "Collection Not Found - Audio Store",
      description: "The requested collection could not be found."
    };
  }
  
  return {
    title: `${collection.name} - Audio Store`,
    description: collection.description
  };
}

export function generateStaticParams() {
  return collections.map(collection => ({
    slug: collection.slug,
  }));
}

// Sample products for each collection
const collectionProducts = {
  "headphones": [
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
      "badge": "hot" as const,
      "salePercentage": null
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
      "badge": "sale" as const,
      "salePercentage": 23
    }
  ],
  "speakers": [
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
      "badge": "sale" as const,
      "salePercentage": 16
    }
  ],
  "earphones": [
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
      "badge": "new" as const,
      "salePercentage": null
    }
  ],
  "accessories": [
    {
      "id": "p5",
      "name": "Pro Audio Cable Set",
      "brand": "WIREMASTER",
      "image": "/images/products/pro-audio-cable.jpg",
      "rating": 4.7,
      "specs": {
        "Length": "1.5m",
        "Type": "Braided",
        "Connector": "Gold-plated"
      },
      "variants": [
        {
          "id": "v5-1",
          "color": "Black",
          "colorCode": "#000000",
          "price": 12999,
          "compareAtPrice": null
        }
      ],
      "slug": "pro-audio-cable-set",
      "badge": null,
      "salePercentage": null
    }
  ]
};

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = collections.find(c => c.slug === params.slug);
  const products = collectionProducts[params.slug as keyof typeof collectionProducts] || [];
  
  if (!collection) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-6">Collection Not Found</h1>
        <p className="mb-8">The collection you are looking for does not exist.</p>
        <Link 
          href="/collections" 
          className="inline-flex items-center px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          View All Collections
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
    { label: collection.name, href: `/collections/${collection.slug}` }
  ];

  return (
    <div>
      <Hero 
        title={collection.name}
        subtitle={collection.description}
        breadcrumbs={breadcrumbs}
        bgImage={collection.image}
        size="md"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Products ({products.length})
            </h2>
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <select 
                  className="w-full py-2 px-4 pr-10 bg-white border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <button className="p-2 bg-amber-50 border border-amber-200 rounded-md">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div key={product.id} className={`transform transition-transform hover:-translate-y-1 animation-delay-${(index + 1) * 100}`}>
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
                    badge={product.badge}
                    salePercentage={product.salePercentage !== null ? product.salePercentage : undefined}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600">No products found in this collection.</p>
                <Link 
                  href="/shop" 
                  className="inline-flex items-center mt-4 px-6 py-2 bg-amber-100 text-amber-700 rounded-md hover:bg-amber-200 transition-colors"
                >
                  Browse Shop
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 