import React from 'react';
import { fruits } from '../data/fruits';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  return (
    <div id="product-grid" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-brown mb-8">Our Fresh Selection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {fruits.map((fruit) => (
          <ProductCard key={fruit.id} fruit={fruit} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;