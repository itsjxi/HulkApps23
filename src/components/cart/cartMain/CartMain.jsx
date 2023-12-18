
import React from "react";
import EmptyCartMessage from "./EmptyCartMessage";
import CartList from "./cartList";

//rendering whole cart data with their details and empty msz

const CartMain = ({ cartItems, handleIncrement, handleDecrement, handleRemoveItem }) => {
  return (
    <>
      {cartItems.length > 0 ? (
        <CartList
          cartItems={cartItems}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemoveItem={handleRemoveItem}
        />
      ) : (
        <EmptyCartMessage />
      )}
    </>
  );
};

export default CartMain;
