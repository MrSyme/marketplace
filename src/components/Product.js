import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSnackbar } from "notistack";

export default function Product(props) {
  const { product, onAdd } = props;
  const { enqueueSnackbar } = useSnackbar();

  const handleProductAdd = (evt) => {
    evt.preventDefault();
    enqueueSnackbar(`${product.name} added to cart`, {
      variant: "success",
      autoHideDuration: 3000,
    });
    onAdd(product);
  };
  return (
    <div className="group cursor-pointer">

      <div className="w-full h-80 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover hover:opacity-75"
        />
      </div>
      <div className="flex justify-between items-center p-4">
        <div>
          <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">
            $ {product.price}
          </p>
        </div>
        <button
          type="button"
          onClick={(evt) => handleProductAdd(evt)}
          className="h-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaShoppingCart className="text-lg mr-3" />
          Buy now
        </button>
      </div>
    </div>
  );
}
