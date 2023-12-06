import React from 'react'
import './home.css'
import Products from './Products.jsx';
import data from '../data.js'

function Home ({cartItems}) {
  const {productItem} = data;
  return (
    <div className='home-container'>
      <Products productItem={productItem}  />
    </div>
  )
}

export default Home;
