

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartDisplay from './cartRendering';

const Cart = () => {
  // feching cart data from  Redux Store 
  const cartItems = useSelector((state) => state.cart);

  const [cartVisible, setCartVisible] = useState(false); // state defining for the visiblity of cart details
  


  // setting the cart visiblity to true function
  const toggleCart = () => {                 
    setCartVisible(!cartVisible);
  };


  
  // setting the cart visiblity to false function
  const closeCart = () => {
    setCartVisible(false);
  };

  return (
    <>
    {/* cart button for homepage   */}
    <div className="cart-box" onClick={toggleCart}> 
      <div className='cart-icon'>
        <div><img src='/images/shopping-bag.svg' style={{width: "23px", height:"28px"}}/></div>
        {cartItems.length > 0 && (
            // increasing count  in cart button to show cart is updatred when click on add to cart
          <div className="cart-count">{cartItems.reduce((acc ,curr)=> acc + curr.quantity , 0)}</div>
        )}
      </div>
      </div>
      {/* condition to show and hide cart details based on visibility true or false */}
      {cartVisible && <div className='cart-modal' style={{zIndex: "10"}}><CartDisplay onCloseClick={closeCart}/></div>}
      </>
   
  );
};

export default Cart;
