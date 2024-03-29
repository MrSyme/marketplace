import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

/* export default function Header(props){
    const{countCartItems}=props;
    return (
    <header classNameName="row block center ">
        <div >
            <a href='#/'> <h1>Shopping Cart</h1></a> 
            </div>
            <div>
        Cart {' '}
        { countCartItems?(
            <button classNameName='badge'>{countCartItems}</button>
        ):('')}
        <a href='#/'>Cart</a> <a href='#/'>Sing in</a>
        </div>
    </header>
    )
} */

const Header = ({ countCartItems }) => {
  const [open, setOpen] = useState(false);
  const { logoutUser } = useUser();
  const user = JSON.parse(localStorage.getItem("user"));

  let navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="flex items-center cursor-pointer">
          <span
            onClick={() => {
              navigate("/");
            }}
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            Ecommerce
          </span>
        </div>
        <div className="flex md:order-2">
          {((user && user.role === "comprador") || !user) && (
            <div className="group mr-3 md:mr-0 px-5 py-2.5 flex items-center cursor-pointer">
              <div
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <FaShoppingCart
                  className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                  {countCartItems}
                </span>
                <span className="sr-only">items in cart, view bag</span>
              </div>
            </div>
          )}

          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            !open ? "hidden" : ""
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <div
                onClick={() => {
                  navigate("/");
                }}
                className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 dark:text-white cursor-pointer md:hover:text-blue-700"
              >
                Home
              </div>
            </li>
            {user ? (
              <>
                {user.role !== "comprador" && (
                  <li>
                    <div
                      onClick={() => {
                        navigate("/product-master");
                      }}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                    >
                      Product Master
                    </div>
                  </li>
                )}
                <li>
                  <div
                    onClick={() => {
                      handleLogout();
                    }}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Logout
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Sign In
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      navigate("/register");
                    }}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                  >
                    Sign Up
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
