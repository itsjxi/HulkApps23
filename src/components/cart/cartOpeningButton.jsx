

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartDisplay from './cartRendering';

const Cart = ({ isOpen, onClose }) => {
  // feching cart data from  Redux Store 
  const cartItems = useSelector((state) => state.cart?.items || []);

  return (
    <>
      {/* condition to show and hide cart details based on visibility true or false */}
      {isOpen && (
        <div className='cart-modal' style={{zIndex: "2000"}}>
          <CartDisplay onCloseClick={onClose}/>
        </div>
      )}
    </>
  );
};

export default Cart;
