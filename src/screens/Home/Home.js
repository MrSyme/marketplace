import React, { useState } from "react";
import Pagination from "../../components/Pagination";
import Product from "../../components/Product";
import { useProducts } from "../../context/ProductContext";
import { useCart } from "../../context/CartContext";
import MainLayout from "../../layouts/MainLayout";


const Home = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 10;
  const pagesVisited = pageNumber * productsPerPage;

  const { products } = useProducts();
  const { cartItems, setCartItems } = useCart();

  const productsToShow = products.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );

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
    console.log(cartItems);
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
    <MainLayout>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {productsToShow.map((product) => (
              <Product key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        productsPerPage={productsPerPage}
        products={products}
        pagesVisited={pagesVisited}
      />
    </MainLayout>
  );
};

export default Home;
