import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd handle payment processing here.
    clearCart();
    toast.success('Order placed successfully!');
    navigate('/confirmation');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brown">Full Name</label>
        <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-peach focus:border-peach" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brown">Email Address</label>
        <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-peach focus:border-peach" />
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-brown">Address</label>
        <input type="text" id="address" name="address" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-peach focus:border-peach" />
      </div>
       <div>
        <label htmlFor="card-details" className="block text-sm font-medium text-brown">Card Details</label>
        <div className="mt-1 p-3 w-full border border-gray-300 rounded-md h-12 bg-gray-50">...</div>
      </div>
      <button type="submit" className="w-full bg-peach text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg mt-4">
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;