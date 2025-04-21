
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-luxury-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Watch" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      
      <div className="luxury-container relative z-10 py-24 md:py-32 lg:py-48">
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            Timeless Elegance, Modern Luxury
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Discover our curated collection of premium watches, jewelry, and accessories. 
            Each piece tells a story of craftsmanship and sophistication.
          </p>
          <div className="flex space-x-4">
            <Link 
              to="/products" 
              className="bg-luxury-gold text-luxury-black px-8 py-3 font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link 
              to="/about" 
              className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-luxury-black transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
