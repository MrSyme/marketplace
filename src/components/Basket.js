import React from 'react';
export default function Basket(props){
    const{cartItems,onAdd,onRemove}=props;
    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    
    return (
    <aside className='block col-1'>
    <h2>Cart Items</h2>  
    <div>
        {cartItems.length===0 &&<div>Cart Is Empty </div>}
        </div>
        {cartItems.map((item)=>(
            <div key={item.id} className="row ">
                <div className='col-2'>{item.name}</div>
                <div className='col-2'>
                <button onClick={()=>onAdd(item)} className="add">+</button>
                <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className='col-2 text-right' >
                    {item.qty}x${item.price.toFixed(2)}
                </div>
            </div>
        ))} 
          {
              cartItems.length!==0 &&   (
                  <>
                  <hr></hr>
                  <div>
                  <div className='col-2'><strong>Total</strong></div>
                  <div className='col-1 text-right'><strong>${itemsPrice.toFixed(2)}</strong></div>
                  </div>
                  <hr/>
                  <div className='row '>
                      <button onClick={()=>{alert("Transacción exitosa")}}> CheckOut</button>
                  </div>
                  </>
                  
              )
          }
    </aside>
    )
}