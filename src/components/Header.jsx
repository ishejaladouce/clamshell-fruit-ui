import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Header = () => {
  return (
    <header className="bg-cream shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-brown">
              Fruitful
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <Link to="/" className="text-brown hover:text-peach transition-colors duration-300">Home</Link>
            {/* Add other nav links here */}
          </nav>
          <div className="flex items-center">
             <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
