import React from 'react';
export default function Header(props){
    const{countCartItems}=props;
    return (
    <header className="row block center ">
        <div >
            <a href='#/'> <h1>Shopping Cart</h1></a> 
            </div>
            <div>
        Cart {' '}
        { countCartItems?(
            <button className='badge'>{countCartItems}</button>
        ):('')}
        <a href='#/'>Cart</a> <a href='#/'>Sing in</a>
        </div>
    </header>
    )
}