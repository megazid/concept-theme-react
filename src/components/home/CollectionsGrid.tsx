"use client";

import Link from 'next/link';
import CollectionCard from '@/components/shared/CollectionCard';
import collections from '@/data/collections.json';

const CollectionsGrid = () => {
  // Get featured collections (first 4)
  const featuredCollections = collections.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div className="animate-fadeInUp mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Shop Collections</h2>
            <p className="text-gray-600 max-w-xl">
              Browse our curated collections of premium audio equipment for every listening experience.
            </p>
          </div>
          
          <Link
            href="/collections"
            className="flex items-center text-amber-600 font-medium group animate-fadeIn self-start md:self-auto"
            style={{animationDelay: '300ms'}}
          >
            View All Collections
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCollections.map((collection, index) => (
            <div
              key={collection.id}
              className="animate-fadeInUp"
              style={{animationDelay: `${(index + 1) * 100}ms`}}
            >
              <CollectionCard
                id={collection.id}
                name={collection.name}
                description={collection.description}
                image={collection.image}
                productCount={collection.productCount}
                slug={collection.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsGrid; 