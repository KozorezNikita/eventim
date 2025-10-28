import React, { createContext, useContext, useState } from "react";

// Створюємо Context
const CartContext = createContext();

// Хук для зручного використання
export const useCart = () => useContext(CartContext);

// Провайдер
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // при старті беремо з localStorage або пустий масив
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (tickets) => {
    setCartItems(prev => {
      const updated = [...prev, ...tickets];
      localStorage.setItem("cartItems", JSON.stringify(updated));
      return updated;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};