
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="luxury-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif tracking-wide">
            LUXE<span className="text-luxury-gold">PIXEL</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Shop</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-luxury-black hover:text-luxury-gold transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} className="text-luxury-black hover:text-luxury-gold transition-colors" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-luxury-gold text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </Badge>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} className="text-luxury-black hover:text-luxury-gold transition-colors" />
              {cartItems.length > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-luxury-gold text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </Badge>
              )}
            </Link>
            <button 
              className="text-luxury-black"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <Link to="/" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/products" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link to="/about" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
