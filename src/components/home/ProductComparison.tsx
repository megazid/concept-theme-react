"use client";

import ImageComparison from "../shared/ImageComparison";

const ProductComparison = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Our Premium Models</h2>
          <p className="text-gray-600 md:text-lg">
            Slide to see the difference between our flagship headphone models and choose the perfect one for your needs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ImageComparison
            beforeImage="/images/headphones-gold.jpg"
            afterImage="/images/headphones-red.jpg"
            beforeLabel="Flow Harmony Gold Tone"
            afterLabel="Flow Harmony Crimson Shadow"
            showHeader={false}
            className="mb-12"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-600">Flow Harmony Gold Tone</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Premium gold-finished aluminum construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>40mm titanium-coated drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Active noise cancellation with transparency mode</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>30-hour battery life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Memory foam ear cushions with genuine leather</span>
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-200">
                <span className="text-2xl font-bold">$349.99</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Flow Harmony Crimson Shadow</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Deep crimson matte finish with carbon fiber accents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>50mm beryllium dynamic drivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Hybrid active noise cancellation with adaptive EQ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>40-hour battery life with quick charge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Premium alcantara ear cushions with cooling gel</span>
                </li>
              </ul>
              <div className="mt-5 pt-5 border-t border-gray-200">
                <span className="text-2xl font-bold">$429.99</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300">
              Shop All Headphones
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductComparison; 