
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/contexts/CartContext";

const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState("all");
  const location = useLocation();

  const categories = ["all", "watches", "jewelry", "accessories"];

  useEffect(() => {
    // Check for category in URL query params
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
      setFilteredProducts(getProductsByCategory(categoryParam));
    } else {
      setActiveCategory("all");
      setFilteredProducts(products);
    }
  }, [location.search]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setFilteredProducts(category === "all" ? products : getProductsByCategory(category));
  };

  return (
    <div className="bg-white">
      <div className="luxury-container py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif mb-2">Our Collection</h1>
          <p className="text-gray-500">Discover our curated selection of luxury items</p>
        </div>

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
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
