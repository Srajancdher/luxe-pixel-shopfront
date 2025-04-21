
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black text-white">
      <div className="luxury-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-serif tracking-wide">
              LUXE<span className="text-luxury-gold">PIXEL</span>
            </Link>
            <p className="text-gray-400 mt-4">
              Exceptional luxury products for the discerning customer. Quality and craftsmanship in every detail.
            </p>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-luxury-gold font-serif text-lg">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/products?category=watches" className="text-gray-400 hover:text-white transition-colors">Watches</Link></li>
              <li><Link to="/products?category=jewelry" className="text-gray-400 hover:text-white transition-colors">Jewelry</Link></li>
              <li><Link to="/products?category=accessories" className="text-gray-400 hover:text-white transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-luxury-gold font-serif text-lg">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-luxury-gold font-serif text-lg">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-luxury-charcoal text-white px-4 py-2 w-full focus:outline-none"
              />
              <button className="bg-luxury-gold text-luxury-black px-4 py-2 hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-gray-400 text-sm text-center">
          <p>© {currentYear} LuxePixel. All rights reserved. This is a demo for a college project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
