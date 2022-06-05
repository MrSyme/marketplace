import React, { useEffect } from "react";
import { users } from "./data";

import Routes from "./Routes";
function App() {
  /*   const [cartItems, setCartItems] = useState([]);
  const { products } = data;

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
  }; */

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users)); // Guarda los usuarios en el localStorage
  }, []);

  return (
    <div className="App">
      <Routes />
      {/* <div className="row">
        <Main onAdd={onAdd} products={products} />
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
      </div> */}
    </div>
  );
}

export default App;
