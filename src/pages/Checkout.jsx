import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import OrderSummary from '../components/OrderSummary';

const Checkout = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brown mb-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
           <h2 className="text-2xl font-bold text-brown mb-6">Shipping Information</h2>
           <CheckoutForm />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-brown mb-6">Your Order</h2>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;