import React, { useEffect } from "react";

import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import Routes from "../Routes";
import Main from "./Main";
import Basket from "./Basket";
function Carro() {

  const { cartItems, setCartItems } = useCart();
  const { products } = useProducts();

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                qty: exist.qty + 1,
              }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id
            ? {
                ...exist,
                qty: exist.qty - 1,
              }
            : x
        )
      );
    }
  }; 

 

  return (
    <div className="Carro">
 
       <div className="rowk">
       
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div> 
    </div>
  );
}

export default Carro;