import React from 'react';
import { useNavigate } from "react-router-dom";

import { useSnackbar } from "notistack";


export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
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
                        <button onClick={() => onAdd(item)} className="buttonk addk ">+</button>
                        <button onClick={() => onRemove(item)} className="buttonk removek ">-</button>
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
                            <button className='buttonk' onClick={() => {

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