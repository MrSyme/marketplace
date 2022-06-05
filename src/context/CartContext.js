import { createContext, useState, useContext } from "react";

const CartContext = createContext(); // Create a context

/* 
  This is the provider component.
  It provides the cart state to all components that need it.
*/
export const CartProvider = ({ children }) => {
  const cart = useCartProvider();
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext); // Hook to access the cart state

/* 
  This are the values that are provided to the consumer.
*/
export const useCartProvider = () => {
  const [cartItems, setCartItems] = useState([]);

  return {
    cartItems,
    setCartItems,
  };
};
