
import React from "react";

//cart item component showing image price color size and quantity

const CartItem = ({item,index,handleIncrement,handleDecrement,handleRemoveItem}) => {
  return (
    <div className="cart-item" key={index}>
      <div className="cart-image-details">
        <img src={item.image || ''} alt={item.title || 'Product'} />
        <div className="cart-item-details">
          <p>{item.title}</p>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(index)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleIncrement(index)}>+</button>
          </div>
        </div>
      </div>
      <div className="cart-remove-price">
        <p onClick={() => handleRemoveItem(index)}>Remove</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;

