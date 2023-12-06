import React, { useState } from "react";
import "./products.css";

const Products = ({ productItem }) => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (productItem) => {
    const exist = cartItems.find((item) => item.id === productItem.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productItem.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
      let newQuantity = exist.quantity + 1;
      localStorage.setItem("quantity", newQuantity);
      return;
    } else {
      setCartItems([...cartItems, { ...productItem, qty: 1 }]);
      let newQuantity = 1;
      localStorage.setItem("quantity", newQuantity);
      return;
    }
  };
  return (
    <div className="products">
      {productItem.map((item) => (
        <div className="image-container" key={item.id}>
          <img
            className="imges"
            src={item.image}
            alt={`image for ${item.name}`}
          />
          <div className="item-details">
            <h2>{item.name}</h2>
            <p>$ {item.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(item)}
            >
              Add to cart  
              {/* ({exist ? exist.qty : 0}) */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
