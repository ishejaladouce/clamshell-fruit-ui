import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Confirmation = () => {
  return (
    <div className="container mx-auto text-center py-20 px-4">
      <CheckCircle2 size={64} className="mx-auto text-green"/>
      <h1 className="text-3xl font-bold text-brown mt-4">Order Confirmed!</h1>
      <p className="text-gray-600 mt-2">Thank you for your purchase. Your fresh fruits are on their way!</p>
      <p className="text-gray-600 mt-1">You'll receive a confirmation email shortly.</p>
      <div className="mt-8 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-left">
         <h2 className="text-2xl font-bold text-brown mb-6">Your Order Summary</h2>
         {/* In a real app, you would pass order details here */}
         <p className="text-center text-gray-500">Your cart is now empty.</p>
      </div>
      <Link to="/" className="mt-8 inline-block bg-peach text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300">
        Continue Shopping
      </Link>
    </div>
  );
};

export default Confirmation;