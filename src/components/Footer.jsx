import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brown text-cream mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Fruitful. All Rights Reserved.</p>
          <p className="mt-2">Taste the Blessing</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
