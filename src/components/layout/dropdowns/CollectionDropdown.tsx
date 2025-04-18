import { useState} from "react";
// import { useEffect } from "react";
import Link from "next/link";
import CollectionCard from "@/components/shared/CollectionCard";
import collectionsData from "@/data/collections.json";

interface CollectionDropdownProps {
  isActive: boolean;
  onMouseEnter: () => void;
}

const CollectionDropdown = ({ isActive, onMouseEnter }: CollectionDropdownProps) => {
  const [collections] = useState(collectionsData);
  // setCollections should be used to fetch the collections from the database
  return (
    <div 
      className={`fixed left-0 right-0 top-[88px] md:top-[104px] bg-white shadow-lg py-8 z-20 transition-all duration-300 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Browse Collections</h2>
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
        
        {/* Custom 4-column grid for collections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {collections.map(collection => (
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
    </div>
  );
};

export default CollectionDropdown; 