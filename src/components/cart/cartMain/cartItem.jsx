
import React from "react";

//cart item component showing image price color size and quantity

const CartItem = ({item,index,handleIncrement,handleDecrement,handleRemoveItem}) => {
  return (
    <div className="cart-item" key={index}>
      <div className="cart-image-details">
        <img src={item.variant.featured_image.src} alt={item.variant.title} />
        <div className="cart-item-details">
          <strong>{item.product_type}</strong>
          <p>Size: {item.variant.option2}</p>
          <p>Color: {item.variant.option1}</p>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(index)}>-</button>
            <p>{item.quantity}</p>
            <button onClick={() => handleIncrement(index)}>+</button>
          </div>
        </div>
      </div>
      <div className="cart-remove-price">
        <p onClick={() => handleRemoveItem(index)}>X</p>
        <p>${item.variant.price}</p>
      </div>
    </div>
  );
};

export default CartItem;

