
import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = ["all", "watches", "jewelry", "accessories"];
  
  const filteredProducts = activeCategory === "all" 
    ? products.slice(0, 6) 
    : products.filter(product => product.category === activeCategory).slice(0, 6);

  return (
    <section className="py-16">
      <div className="luxury-container">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-2">Featured Collections</h2>
        <p className="text-center text-gray-500 mb-10">Discover our most exclusive luxury items</p>
        
        {/* Category Filters */}
        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`capitalize pb-1 transition-colors ${
                activeCategory === category 
                  ? "text-luxury-gold border-b-2 border-luxury-gold" 
                  : "text-gray-500 hover:text-luxury-gold"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
