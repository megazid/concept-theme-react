import Link from "next/link";
// import Grid from "@/components/shared/Grid";
// import ProductCard from "@/components/shared/ProductCard";

// Mock data - in a real app this would come from an API or context


interface ShopDropdownProps {
  isActive: boolean;
  onMouseEnter: () => void;
}

const ShopDropdown = ({ isActive, onMouseEnter }: ShopDropdownProps) => {
  return (
    <div 
      className={`fixed left-0 right-0 top-[88px] md:top-[104px] bg-white shadow-lg py-8 z-20 transition-all duration-300 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categories section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/headphones" className="text-gray-700 hover:text-black transition-colors">
                  Headphones
                </Link>
              </li>
              <li>
                <Link href="/shop/earphones" className="text-gray-700 hover:text-black transition-colors">
                  Earphones
                </Link>
              </li>
              <li>
                <Link href="/shop/speakers" className="text-gray-700 hover:text-black transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/shop/accessories" className="text-gray-700 hover:text-black transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop/bundles" className="text-gray-700 hover:text-black transition-colors">
                  Bundles
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Featured products section */}
          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Featured Products</h3>
              <Link 
                href="/shop" 
                className="text-sm font-medium flex items-center hover:text-gray-900 transition-colors"
              >
                View All
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
            
            {/* <Grid columns={{ default: 1, md: 3 }} gap="gap-6">
              {featuredProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  {...product}
                />
              ))}
            </Grid> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDropdown; 