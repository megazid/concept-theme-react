import Hero from "@/components/shared/Hero";
import CollectionCard from "@/components/shared/CollectionCard";
import collections from "@/data/collections.json";

export const metadata = {
  title: "Collections - Audio Store",
  description: "Browse our audio collections including headphones, earphones, speakers, and accessories.",
};

export default function CollectionsPage() {
  return (
    <div>
      <Hero 
        title="Our Collections"
        subtitle="Browse our premium audio collections to find the perfect match for your lifestyle"
        breadcrumbs={[
          { label: "Collections", href: "/collections" }
        ]}
        size="md"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
      </section>
    </div>
  );
} 