
import { Link } from "react-router-dom";
import { Product } from "@/contexts/CartContext";
import { useCart } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="product-card group overflow-hidden animate-scale-in">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 bg-luxury-gold text-white p-2 rounded-full transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-luxury-gold font-serif">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
