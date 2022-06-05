import React from "react";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

const MainLayout = ({ children }) => {
  const { cartItems } = useCart();

  return (
    <>
      <Header countCartItems={cartItems.length} />
      {children}
    </>
  );
};

export default MainLayout;
