
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/contexts/CartContext";
import { ShoppingBag, ArrowLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
      }
      
      setLoading(false);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  if (loading) {
    return (
      <div className="luxury-container py-16 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="luxury-container py-16 text-center">
        <h1 className="text-2xl font-serif mb-4">Product Not Found</h1>
        <Link to="/products" className="text-luxury-gold">
          Return to products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="luxury-container py-12">
        <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-luxury-gold mb-8">
          <ArrowLeft size={16} className="mr-2" />
          Back to products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="overflow-hidden bg-gray-50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-serif">{product.name}</h1>
            <p className="text-2xl text-luxury-gold font-serif">${product.price.toFixed(2)}</p>
            <div className="w-12 h-1 bg-luxury-gold"></div>
            <p className="text-gray-600">{product.description}</p>
            
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium mb-2">Category</h3>
              <p className="text-gray-600 capitalize">{product.category}</p>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                  Quantity
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-gray-300 rounded px-4 py-2"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex-grow flex items-center justify-center bg-luxury-gold text-white px-6 py-3 hover:bg-opacity-90 transition-colors"
              >
                <ShoppingBag size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
