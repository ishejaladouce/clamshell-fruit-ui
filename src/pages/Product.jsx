import React, { useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingCart, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';

import { fruits } from '../data/fruits';
import { CartContext } from '../contexts/CartContext';

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const fruit = fruits.find((f) => f.id === parseInt(id));

  if (!fruit) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-cream-50 text-brown-900">
        <h2 className="text-2xl font-bold mb-4">No fruit selected.</h2>
        <p className="mb-8">We couldn't find the fruit you're looking for.</p>
        <Link to="/" className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition-colors duration-300">
          Back to Home
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(fruit, quantity);
    toast.success(`${quantity} ${fruit.name}(s) added to your cart!`)
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-cream-50 min-h-screen font-sans text-brown-900">
      <div className="container mx-auto p-4 md:p-8">
        <Link to="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ChevronLeft size={20} className="mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Clamshell Product Image */}
          <div className="w-full p-4 md:p-6 bg-white/50 rounded-3xl shadow-lg relative overflow-hidden">
             <div className="absolute top-0 left-0 right-0 h-1/2 bg-blue-100/30 rounded-t-3xl backdrop-blur-sm z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white/60 rounded-b-3xl"></div>
             <div className="relative z-20 aspect-square flex items-center justify-center">
                <img 
                    src={fruit.image}
                    alt={fruit.name}
                    className="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
             </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-3">{fruit.name}</h1>
            <p className="text-lg text-brown-700 mb-4">{fruit.description}</p>
            <p className="text-3xl font-semibold text-orange-500 mb-6">${fruit.price.toFixed(2)} / lb</p>

            <div className="flex items-center gap-4 mb-8">
                <p className="font-semibold text-lg">Quantity:</p>
                <div className="flex items-center border border-gray-300 rounded-full">
                    <button onClick={decrementQuantity} className="p-3 text-brown-700 hover:bg-gray-100 rounded-l-full transition-colors">
                        <Minus size={16} />
                    </button>
                    <span className="px-5 text-lg font-bold w-16 text-center">{quantity}</span>
                    <button onClick={incrementQuantity} className="p-3 text-brown-700 hover:bg-gray-100 rounded-r-full transition-colors">
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <button 
              onClick={handleAddToCart} 
              className="w-full md:w-auto bg-green-500 text-white font-bold py-4 px-8 rounded-full text-lg flex items-center justify-center gap-3 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ShoppingCart size={22} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
