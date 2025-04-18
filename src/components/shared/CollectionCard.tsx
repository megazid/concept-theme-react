import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CollectionCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
  slug: string;
}

const CollectionCard: FC<CollectionCardProps> = ({
  name,
  description,
  image,
  productCount,
  slug
}) => {
  return (
    <Link 
      href={`/collections/${slug}`}
      className="block group"
    >
      <div className="bg-gray-50 rounded-lg overflow-hidden transition-transform duration-300 group-hover:shadow-md">
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-2">
            <div className="bg-white text-xs rounded-full h-6 px-2 flex items-center mr-2 shadow-sm">
              <span className="text-gray-800 font-medium">{productCount}</span>
            </div>
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
              className="text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-black">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard; 