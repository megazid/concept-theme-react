import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface ProductVariant {
  id: string;
  color: string;
  colorCode: string;
  price: number;
  compareAtPrice?: number;
}

interface ProductCardProps {
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

const ProductCard: FC<ProductCardProps> = ({
  name,
  brand,
  image,
  rating,
  specs,
  variants,
  slug,
  badge,
  salePercentage
}) => {
  // Get default variant (first one)
  const defaultVariant = variants[0];

  return (
    <Link 
      href={`/products/${slug}`}
      className="block group relative"
    >
      <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md">
        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${
            badge === 'hot' ? 'bg-red-500' : 
            badge === 'sale' ? 'bg-orange-500' : 
            'bg-blue-500'
          }`}>
            {badge === 'sale' && salePercentage ? `-${salePercentage}%` : badge.toUpperCase()}
          </div>
        )}

        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Rating */}
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center shadow-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="#FACC15" 
              stroke="#FACC15" 
              strokeWidth="1" 
              className="mr-1"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span className="text-xs font-semibold">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        {/* Product Details */}
        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase mb-1">{brand}</div>
          
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-black">{name}</h3>
            <div className="text-right">
              {defaultVariant.compareAtPrice && (
                <span className="text-xs line-through text-gray-400 mr-2">
                  LE {defaultVariant.compareAtPrice.toLocaleString()}
                </span>
              )}
              <span className="text-sm font-bold text-gray-900">
                From LE {defaultVariant.price.toLocaleString()}
              </span>
            </div>
          </div>
          
          {/* Color Options */}
          <div className="flex space-x-2 mb-3">
            {variants.map((variant) => (
              <div 
                key={variant.id} 
                className="w-5 h-5 rounded-full border border-gray-200 cursor-pointer"
                style={{ backgroundColor: variant.colorCode }}
                title={variant.color}
              />
            ))}
            {variants.length > 4 && (
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-700">
                +{variants.length - 4}
              </div>
            )}
          </div>
          
          {/* Specs */}
          <div className="grid grid-cols-3 gap-2 mt-3">
            {Object.entries(specs).slice(0, 3).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-xs text-gray-500">{key}</div>
                <div className="text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
