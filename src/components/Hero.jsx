import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg overflow-hidden my-8">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/710962b8-35cb-4dbc-800b-6a7f39a54ee9/fruitful-hero-pwhzbzc-1770200439740.webp" 
            alt="Fresh fruits in clamshell packaging" 
            className="w-full h-auto object-cover lg:h-[500px]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">Fruitful</h1>
            <p className="text-xl sm:text-2xl text-white mt-4 font-light">Taste the Blessing</p>
            <Link 
              to="/" 
              onClick={(e) => { e.preventDefault(); document.getElementById('product-grid').scrollIntoView({ behavior: 'smooth' }); }}
              className="mt-8 bg-peach text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 text-lg"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;