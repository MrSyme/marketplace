import React from 'react';
import { useNavigate } from "react-router-dom";

import { useSnackbar } from "notistack";


export default function Basket(props) {
    const { cartItems, setCartItems,onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const { enqueueSnackbar } = useSnackbar();
    let navigate = useNavigate();


    return (
        <aside className='blockk col-1k'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty </div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="rowk ">
                    <div className='col-2k'>{item.name}</div>
                    <div className='col-2k'>
                        <button onClick={() => onAdd(item)} className="h-10  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">+</button>
                        <button onClick={() => onRemove(item)} className="h-10  text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ">-</button>
                    </div>
                    <div className='col-2k text-rightk' >
                        {item.qty}x${item.price}
                    </div>
                </div>
            ))}
            {
                cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div>
                            <div className='col-2k'><strong>Total</strong></div>
                            <div className='col-1k text-rightk'><strong>${itemsPrice}</strong></div>
                        </div>
                        <hr />
                        <div className='rowk '>
                            <button className='h-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={() => {
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
    )
}