import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/shared/Hero";
import products from "@/data/products.json";
import ProductCard from "@/components/shared/ProductCard";
import Grid from "@/components/shared/Grid";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return {
      title: "Product Not Found - Audio Store",
    };
  }
  
  return {
    title: `${product.name} - Audio Store`,
    description: `${product.name} by ${product.brand}`,
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <Link href="/shop" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/80 transition">
          Back to Shop
        </Link>
      </div>
    );
  }

  // Get the first variant for pricing
  const defaultVariant = product.variants[0];
  const productPrice = defaultVariant.price / 100; // Convert cents to dollars
  const compareAtPrice = defaultVariant.compareAtPrice ? defaultVariant.compareAtPrice / 100 : null;

  // Get colors from variants
  const colors = product.variants.map(v => v.colorCode);

  // Find similar products - can be based on brand or other criteria
  const similarProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero with breadcrumbs */}
      <Hero 
        title={product.name}
        subtitle={`By ${product.brand}`}
        bgImage="/images/hero-product.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: product.name, href: `/shop/${product.slug}` }
        ]}
      />

      {/* Product Detail Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gray-100 rounded-lg p-8 relative">
            <div className="aspect-square relative mb-4">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex gap-2 justify-center">
              {product.variants.map((variant, index) => (
                <button 
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-primary focus:border-primary transition"
                  style={{ backgroundColor: variant.colorCode }}
                  aria-label={`${variant.color} color option`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? "text-yellow-500" : "text-gray-300"}`}>★</span>
                ))}
              </div>
              <span className="text-gray-600">({product.rating} stars)</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-2">By {product.brand}</p>
            
            <div className="mb-6">
              {compareAtPrice ? (
                <div className="flex items-center gap-2">
                  <p className="text-3xl font-bold text-primary">${productPrice.toFixed(2)}</p>
                  <p className="text-xl text-gray-500 line-through">${compareAtPrice.toFixed(2)}</p>
                  <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                    {product.salePercentage}% OFF
                  </span>
                </div>
              ) : (
                <p className="text-3xl font-bold text-primary">${productPrice.toFixed(2)}</p>
              )}
            </div>
            
            <p className="text-gray-600 mb-8">Experience premium sound quality with the {product.name}, designed for audiophiles who demand excellence.</p>
            
            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {key.includes("Battery") && <span className="text-sm">🔋</span>}
                      {key.includes("Bluetooth") && <span className="text-sm">📶</span>}
                      {key.includes("Driver") && <span className="text-sm">🔊</span>}
                      {key.includes("Output") && <span className="text-sm">⚡</span>}
                      {key.includes("weight") && <span className="text-sm">⚖️</span>}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{key}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex border rounded-md">
                <button className="px-4 py-2 bg-gray-100 border-r">-</button>
                <input type="text" value="1" className="w-12 py-2 text-center" readOnly />
                <button className="px-4 py-2 bg-gray-100 border-l">+</button>
              </div>
              
              <button className="flex-grow flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/80 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-cart">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                Add to Cart
              </button>
              
              <button className="w-12 h-12 flex items-center justify-center border rounded-md hover:bg-gray-100 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-heart text-gray-400 hover:text-red-500">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                </svg>
              </button>
            </div>
            
            {/* Availability */}
            <div className="flex items-center gap-2 text-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check-circle-fill">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              <span>In Stock & Ready to Ship</span>
            </div>
            
            {product.badge && (
              <div className="mt-4">
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded ${
                  product.badge === 'hot' ? 'bg-orange-500 text-white' : 
                  product.badge === 'sale' ? 'bg-red-500 text-white' : 
                  'bg-green-500 text-white'
                }`}>
                  {product.badge.toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">You May Also Like</h2>
          <Grid columns={{ default: 1, sm: 1, md: 2, lg: 4 }} gap="gap-6">
            {similarProducts.map((product) => (
              <Link href={`/shop/${product.slug}`} key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  image={product.image}
                  rating={product.rating}
                  specs={product.specs}
                  variants={product.variants}
                  slug={product.slug}
                />
              </Link>
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
} 