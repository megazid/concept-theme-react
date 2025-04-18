import { Metadata } from "next";
import Hero from "@/components/shared/Hero";
import products from "@/data/products.json";
import ProductCard from "@/components/shared/ProductCard";
import Grid from "@/components/shared/Grid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shop - Audio Store",
  description: "Browse our collection of premium audio products"
};

// Type definition to match the ProductCard component requirements
type ProductType = {
  id: string;
  name: string;
  brand: string;
  image: string;
  rating: number;
  specs: { [key: string]: string };
  variants: {
    id: string;
    color: string;
    colorCode: string;
    price: number;
    compareAtPrice: number | null;
  }[];
  slug: string;
  badge: 'hot' | 'sale' | 'new' | null;
  salePercentage: number | null;
};

export default function ShopPage() {
  const typedProducts = products as ProductType[];

  return (
    <div className="min-h-screen">
      <Hero 
        title="Shop"
        subtitle="Discover our premium audio products"
        bgImage="/images/hero-shop.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" }
        ]}
      />
      
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">All Products</h2>
        <Grid columns={{ default: 1, sm: 2, md: 3, lg: 4 }} gap="gap-6">
          {typedProducts.map((product) => (
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
                badge={product.badge}
                salePercentage={product.salePercentage}
              />
            </Link>
          ))}
        </Grid>
      </section>
    </div>
  );
} 