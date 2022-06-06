import { createContext, useState, useContext } from "react";
import image1 from "../assets/images/14777.jpg";
import image2 from "../assets/images/14855.jpg";
import image3 from "../assets/images/14981.jpg";

const ProductContext = createContext(); // Create a context

/* 
  This is the provider component.
  It provides the product state to all components that need it.
*/
export const ProductProvider = ({ children }) => {
  const cart = useProductProvider();
  return (
    <ProductContext.Provider value={cart}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext); // Hook to access the product state

/* 
  This are the values that are provided to the consumer.
*/
export const useProductProvider = () => {
  const [id, setIds] = useState(4)
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "fedora",
      price: 200,
      image: image2,
      imageAlt: "XD",
      link: "/products/1",
      description: "fedora"

    },
    {
      id: 2,
      name: "Old Parr",
      price: 500,
      image: image1,
      imageAlt: "XD",
      link: "/",
      description: "Old Parr"
    },
    {
      id: 3,
      name: "Ankh",
      price: 999,
      image: image3,
      imageAlt: "XD",
      link: "/",
      description: "Ankh"
    },
  ]);

  return {
    products,
    setProducts,
    id, 
    setIds,
  };
};
