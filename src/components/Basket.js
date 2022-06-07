import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

import { useSnackbar } from "notistack";

export default function Basket(props) {
  const { cartItems, setCartItems, onAdd, onRemove, deleteProduct } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  return (
    <div className="bg-gray-100 w-full h-screen">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col md:flex-row shadow-md my-10">
          <div className="w-full md:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {cartItems.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className="text-red-500 text-xs">
                      {item.description}
                    </span>
                    <div
                      onClick={() => {
                        deleteProduct(item);
                      }}
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                    >
                      Remove
                    </div>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <FaMinus
                    className="text-gray-600 w-3 cursor-pointer"
                    onClick={() => onRemove(item)}
                  />
                  <div className="mx-2 text-center w-8">{item.qty}</div>
                  <FaPlus
                    className="text-gray-600 w-3 cursor-pointer"
                    onClick={() => onAdd(item)}
                  />
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${item.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${item.price * item.qty}
                </span>
              </div>
            ))}

            <div
              onClick={() => {
                navigate("/");
              }}
              className="flex font-semibold text-indigo-600 text-sm mt-10 cursor-pointer"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </div>
          </div>

          <div id="summary" className=" w-full md:w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cartItems.length}
              </span>
              <span className="font-semibold text-sm">${itemsPrice}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${itemsPrice + 10}</span>
              </div>
              <button
                onClick={() => {
                  navigate("/payment");
                }}
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /*  return (
        <aside classNameName='blockk col-1k'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty </div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} classNameName="rowk ">
                    <div classNameName='col-2k'>{item.name}</div>
                    <div classNameName='col-2k'>
                        <button onClick={() => onAdd(item)} classNameName="h-10  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
                        <button onClick={() => onRemove(item)} classNameName="h-10  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">-</button>
                    </div>
                    <div classNameName='col-2k text-rightk' >
                        {item.qty}x${item.price}
                    </div>
                </div>
            ))}
            {
                cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div>
                            <div classNameName='col-2k'><strong>Total</strong></div>
                            <div classNameName='col-1k text-rightk'><strong>${itemsPrice}</strong></div>
                        </div>
                        <hr />
                        <div classNameName='rowk '>
                            <button classNameName='h-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => {
                                    setCartItems([])
                                    enqueueSnackbar("Transacción exitosa", {
                                    variant: "success",
                                    autoHideDuration: 3000,
                                });
                                navigate("/");
                            }}> CheckOut</button>
                        </div>
                    </>

                )
            }
        </aside>
    ) */
}
