import { createContext, useState, useContext } from "react";
import image1 from "../assets/images/14777.jpg";
import image2 from "../assets/images/14855.jpg";
import image3 from "../assets/images/14981.jpg";
import image4 from "../assets/images/pera.jpg";
import image5 from "../assets/images/manzana.jpg";
import image6 from "../assets/images/airpodsPro.jpg";
import image7 from "../assets/images/airpodsMax.jpg";
import image8 from "../assets/images/moto.jpg";
import image9 from "../assets/images/funko.jpg";
import image10 from "../assets/images/cama.jpg";
import image11 from "../assets/images/monitor.jpg";
import image12 from "../assets/images/mouse.jpg";

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
  const [id, setIds] = useState(4);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "fedora",
      price: 200,
      image: image2,
      imageAlt: "Fedora",
      link: "/products/1",
      description: "fedora",
    },
    {
      id: 2,
      name: "Old Parr",
      price: 500,
      image: image1,
      imageAlt: "Old Parr",
      link: "/",
      description: "Old Parr",
    },
    {
      id: 3,
      name: "Ankh",
      price: 999,
      image: image3,
      imageAlt: "Ankh",
      link: "/",
      description: "Ankh",
    },
    {
      id: 4,
      name: "Pera",
      price: 20,
      image: image4,
      imageAlt: "Pera",
      link: "/",
      description: "Una Pera",
    },
    {
      id: 5,
      name: "Manzana",
      price: 15,
      image: image5,
      imageAlt: "Manzana",
      link: "/",
      description: "Una Manzana",
    },
    {
      id: 6,
      name: "Airpods Pro",
      price: 500,
      image: image6,
      imageAlt: "Airpods Pro",
      link: "/",
      description: "Unos Airpods Pro",
    },
    {
      id: 7,
      name: "Airpods Max",
      price: 1000,
      image: image7,
      imageAlt: "Airpods Max",
      link: "/",
      description: "Unos Airpods Max",
    },
    {
      id: 8,
      name: "Moto Kawasaki Z125",
      price: 10000,
      image: image8,
      imageAlt: "Moto kawasaki Z125",
      link: "/",
      description: "Una Moto Kawasaki Z125",
    },
    {
      id: 9,
      name: "Batman Funko Pop",
      price: 10000,
      image: image9,
      imageAlt: "Batman Funko Pop",
      link: "/",
      description: "Un Funko Pop de batman",
    },
    {
      id: 10,
      name: "Cama",
      price: 2000,
      image: image10,
      imageAlt: "Cama",
      link: "/",
      description: "Una Cama",
    },
    {
      id: 11,
      name: "Monitor Samsung odyssey g7",
      price: 3000,
      image: image11,
      imageAlt: "Monitor Samsung odyssey g7",
      link: "/",
      description: "Un Monitor Samsung odyssey g7",
    },
    {
      id: 12,
      name: "Mouse Logitech G502",
      price: 100,
      image: image12,
      imageAlt: "Mouse Logitech G502",
      link: "/",
      description: "Un Mouse Logitech G502",
    },
  ]);

  return {
    products,
    setProducts,
    id,
    setIds,
  };
};
