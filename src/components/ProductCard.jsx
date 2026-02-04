import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ fruit }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <Link to={`/product/${fruit.id}`}>
        <img src={fruit.image} alt={fruit.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-bold text-brown">{fruit.name}</h3>
          <p className="text-peach font-semibold mt-2">${fruit.price.toFixed(2)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;