
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { Trash2, ArrowLeft, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const handleQuantityChange = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleCheckout = () => {
    // In a real app, this would integrate with a payment processor
    setCheckoutSuccess(true);
    clearCart();
  };

  if (checkoutSuccess) {
    return (
      <div className="luxury-container py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 border border-gray-200 shadow-sm">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-serif mb-4">Order Complete!</h1>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been processed successfully.</p>
          <Link to="/products" className="bg-luxury-gold text-white px-6 py-3 inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="luxury-container py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full">
            <ShoppingBag size={32} className="text-gray-400" />
          </div>
          <h1 className="text-2xl font-serif mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/products" className="bg-luxury-gold text-white px-6 py-3 inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="luxury-container py-12">
        <h1 className="text-3xl font-serif mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.product.id} className="grid grid-cols-5 gap-4 items-center border-b border-gray-200 pb-6">
                  <div className="col-span-2 sm:col-span-1">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="w-full h-24 object-cover"
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-2">
                    <h3 className="font-medium">{item.product.name}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.product.category}</p>
                  </div>
                  <div className="text-center">
                    <select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value))}
                      className="border border-gray-300 rounded px-2 py-1 w-16"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="text-right">
                    <button 
                      onClick={() => handleRemoveItem(item.product.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link to="/products" className="inline-flex items-center text-gray-600 hover:text-luxury-gold">
                <ArrowLeft size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6">
              <h2 className="text-xl font-serif mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t border-gray-200 pt-4 font-medium flex justify-between">
                  <span>Total</span>
                  <span className="text-luxury-gold">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCheckout}
                className="w-full bg-luxury-gold text-white py-3 font-medium hover:bg-opacity-90 transition-colors"
              >
                Proceed to Checkout
              </button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                This is a demo store for educational purposes. No real transactions will be processed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
