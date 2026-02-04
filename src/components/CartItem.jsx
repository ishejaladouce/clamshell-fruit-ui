import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleRemove = () => {
    removeFromCart(item.id, item.temperature);
    toast.error(`${item.name} removed from cart.`);
  }

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg"/>
        <div>
          <h3 className="font-bold text-brown">{item.name}</h3>
          <p className="text-sm text-gray-600 capitalize">{item.temperature}</p>
          <p className="text-peach font-semibold">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button onClick={() => updateQuantity(item.id, item.temperature, item.quantity - 1)} className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full font-bold text-lg">-</button>
          <span className="font-bold text-brown">{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.temperature, item.quantity + 1)} className="w-8 h-8 bg-gray-200 text-gray-700 rounded-full font-bold text-lg">+</button>
        </div>
        <p className="font-bold text-brown w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
        <button onClick={handleRemove} className="text-red-500 hover:text-red-700 transition-colors">
          <Trash2 />
        </button>
      </div>
    </div>
  );
};

export default CartItem;