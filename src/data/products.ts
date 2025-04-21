
import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Royal Gold Watch",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2088&auto=format&fit=crop",
    category: "watches",
    description: "A timeless masterpiece crafted with 18k gold and sapphire crystal glass. This elegant timepiece features Swiss automatic movement and is water-resistant up to 100 meters. The perfect accessory for the modern connoisseur."
  },
  {
    id: 2,
    name: "Diamond Pendant Necklace",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1974&auto=format&fit=crop",
    category: "jewelry",
    description: "This exquisite diamond pendant necklace features a stunning 1.5-carat diamond set in 14k white gold. The delicate chain measures 18 inches and includes a secure lobster clasp. A statement piece that adds elegance to any outfit."
  },
  {
    id: 3,
    name: "Leather Portfolio Bag",
    price: 459.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop",
    category: "accessories",
    description: "Handcrafted from premium Italian leather, this portfolio bag combines functionality with sophisticated style. Features multiple compartments, a padded laptop sleeve, and adjustable shoulder strap. Perfect for the business professional."
  },
  {
    id: 4,
    name: "Silver Chronograph Watch",
    price: 799.99,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
    category: "watches",
    description: "This sophisticated chronograph watch features a stainless steel case, precision quartz movement, and a scratch-resistant sapphire crystal face. The elegant silver-tone band complements the sleek black dial for a timeless look."
  },
  {
    id: 5,
    name: "Sapphire Tennis Bracelet",
    price: 1199.99,
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?q=80&w=2074&auto=format&fit=crop",
    category: "jewelry",
    description: "This stunning tennis bracelet features 25 oval-cut blue sapphires totaling 10 carats, set in 18k white gold. The secure box clasp ensures this elegant piece stays perfectly in place throughout your day or evening."
  },
  {
    id: 6,
    name: "Designer Sunglasses",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1970&auto=format&fit=crop",
    category: "accessories",
    description: "These premium designer sunglasses feature polarized lenses with UV400 protection and an elegant gold-accented frame. The timeless design offers both style and functionality for the fashion-conscious individual."
  },
  {
    id: 7,
    name: "Smart Luxury Watch",
    price: 899.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
    category: "watches",
    description: "Combining traditional craftsmanship with modern technology, this smart luxury watch features health monitoring, notifications, and a 7-day battery life. The premium stainless steel case and genuine leather band create a sophisticated aesthetic."
  },
  {
    id: 8,
    name: "Pearl Earrings",
    price: 549.99,
    image: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1974&auto=format&fit=crop",
    category: "jewelry",
    description: "These elegant pearl earrings feature 10mm South Sea pearls with excellent luster, set in 18k gold with small diamond accents. The secure butterfly backs ensure comfortable all-day wear for any occasion."
  },
  {
    id: 9,
    name: "Italian Leather Wallet",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974&auto=format&fit=crop",
    category: "accessories",
    description: "Crafted from premium Italian leather, this bifold wallet features 8 card slots, 2 bill compartments, and RFID-blocking technology. The sleek design fits comfortably in front or back pockets while maintaining a sophisticated appearance."
  },
  {
    id: 10,
    name: "Signature Gold Pen",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1925&auto=format&fit=crop",
    category: "accessories",
    description: "This luxury signature pen features a solid gold nib, balanced weight distribution, and smooth ink flow for an exceptional writing experience. The elegant design includes subtle gold accents and comes in a premium gift box."
  },
  {
    id: 11,
    name: "Diamond Encrusted Watch",
    price: 2499.99,
    image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?q=80&w=2080&auto=format&fit=crop",
    category: "watches",
    description: "A true statement piece featuring a diamond-encrusted bezel and markers on a 42mm case. The automatic Swiss movement ensures precise timekeeping, while the alligator leather strap provides comfort and additional luxury."
  },
  {
    id: 12,
    name: "Gold Link Bracelet",
    price: 749.99,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1974&auto=format&fit=crop",
    category: "jewelry",
    description: "This sophisticated 18k gold link bracelet features an intricate pattern and secure box clasp with additional safety mechanism. The 7.5-inch length sits perfectly on the wrist for an elegant addition to any outfit."
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
};
