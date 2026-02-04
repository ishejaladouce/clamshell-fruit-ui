import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Cart = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-center py-20 px-4">
        <ShoppingCart size={64} className="mx-auto text-gray-400"/>
        <h1 className="text-3xl font-bold text-brown mt-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mt-2">Looks like you haven't added any fruits yet.</p>
        <Link to="/" className="mt-8 inline-block bg-peach text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown mb-8">Your Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cart.map(item => (
          <CartItem key={`${item.id}-${item.temperature}`} item={item} />
        ))}
        <div className="text-right mt-8 border-t pt-4">
          <h2 className="text-2xl font-bold text-brown">Subtotal: ${subtotal.toFixed(2)}</h2>
          <Link to="/checkout" className="mt-4 inline-block bg-peach text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;