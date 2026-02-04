import React from 'react';
import { useCart } from '../contexts/CartContext';

const OrderSummary = () => {
  const { cart } = useCart();
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.08; // Example 8% tax
  const total = subtotal + tax;

  return (
    <div className="space-y-4">
      {cart.map(item => (
        <div key={`${item.id}-${item.temperature}`} className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-brown">{item.name} <span className="text-sm font-normal">x {item.quantity}</span></p>
            <p className="text-sm text-gray-500 capitalize">{item.temperature}</p>
          </div>
          <p className="font-semibold text-brown">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-600">Subtotal</p>
          <p className="font-semibold text-brown">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-600">Taxes</p>
          <p className="font-semibold text-brown">${tax.toFixed(2)}</p>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <p className="text-brown">Total</p>
          <p className="text-peach">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;