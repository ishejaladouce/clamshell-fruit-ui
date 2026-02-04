import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id && i.temperature === item.temperature);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id && i.temperature === item.temperature ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  const removeFromCart = (id, temperature) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.temperature === temperature)));
  };

  const updateQuantity = (id, temperature, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, temperature);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.temperature === temperature ? { ...item, quantity } : item
        )
      );
    }
  };
  
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};