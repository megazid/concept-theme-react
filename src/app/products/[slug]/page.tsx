import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import products from "@/data/products.json";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }
  
  return {
    title: `${product.name} - Audio Store`,
    description: `${product.brand} ${product.name} - Premium audio technology`,
  };
}

export function generateStaticParams() {
  return products.map(product => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  // Find the product
  const product = products.find(p => p.slug === params.slug);
  
  // If product doesn't exist, return 404
  if (!product) {
    return notFound();
  }
  
  // Get default variant (first one)
  const defaultVariant = product.variants[0];
  
  return (
    <div>
      <Hero 
        title={product.name}
        subtitle={`${product.brand} premium audio technology`}
        breadcrumbs={[
          { label: "Shop", href: "/shop" },
          { label: product.name, href: `/products/${product.slug}` }
        ]}
        size="sm"
        align="left"
      />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              
              {/* Badge */}
              {product.badge && (
                <div className={`absolute top-4 left-4 z-10 rounded-full px-4 py-1.5 text-sm font-semibold text-white ${
                  product.badge === 'hot' ? 'bg-red-500' : 
                  product.badge === 'sale' ? 'bg-orange-500' : 
                  'bg-blue-500'
                }`}>
                  {product.badge === 'sale' && product.salePercentage ? `-${product.salePercentage}%` : product.badge.toUpperCase()}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-2 text-sm font-medium text-gray-500 uppercase tracking-wider">{product.brand}</div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="#FACC15" 
                    stroke="#FACC15" 
                    strokeWidth="1" 
                    className="mr-1"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span className="font-medium">{product.rating.toFixed(1)}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm mb-2">Price:</div>
                <div className="flex items-baseline">
                  {defaultVariant.compareAtPrice && (
                    <span className="text-gray-400 line-through mr-2">
                      LE {defaultVariant.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-2xl font-bold">LE {defaultVariant.price.toLocaleString()}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-sm mb-2">Color Options:</div>
                <div className="flex flex-wrap space-x-3">
                  {product.variants.map((variant) => (
                    <div 
                      key={variant.id} 
                      className="w-10 h-10 rounded-full border-2 border-gray-200 cursor-pointer hover:border-gray-400 transition-colors"
                      style={{ backgroundColor: variant.colorCode }}
                      title={variant.color}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-sm mb-2">Specifications:</div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex flex-col border-b border-gray-100 pb-2">
                      <span className="text-xs text-gray-500">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <button 
                  className="px-8 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                >
                  Add to Cart
                </button>
                <button 
                  className="px-8 py-3 border border-black text-black font-medium rounded-md hover:bg-black/5 transition-colors"
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Description Section - would be fetched from API in a real app */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Product Description</h2>
          <div className="prose max-w-none">
            <p>Experience exceptional sound with the {product.name} from {product.brand}. This premium audio device delivers crystal-clear audio with deep, rich bass and precise treble.</p>
            <p>Designed for comfort and style, the {product.name} features premium materials and expert craftsmanship to ensure long-lasting performance and listening enjoyment.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 