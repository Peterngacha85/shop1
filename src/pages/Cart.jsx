import React from 'react'
import './cart.css'
import '../App.jsx'


const Cart = ({cartItems}) => {
  console.log(cartItems);
  
  return (
    <div className='cart-container'>
      <h1>Cart items</h1>
      {cartItems.length === 0 && <div>No item aded</div>}
      <div>
        {cartItems.map((item)=> (
          <div className='cart-items' key={item.id}>
            <img src={item.image} alt={`image for ${item.name}`}/>
            <h2>{item.name}</h2>
            <p>$ {item.price}</p>
            <button className='remove-btn'>Remove</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Cart
