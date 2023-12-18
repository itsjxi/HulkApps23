import "./cart.css"
import { useSelector } from 'react-redux';
import CartHeader from "./cartHeader/CartHeader";
import CartMain from "./cartMain/CartMain";
import CartFooter from "./cartFooter/CartFooter";
import useCartFunctionality from "./UseCartFunctionality";

const CartDisplay = ({ onCloseClick }) => {
   // Retrieve cart items from Redux store
  const cartItems = useSelector((state) => state.cart);
  const [handleIncrement,handleDecrement,handleRemoveItem,calculateSubtotal] = useCartFunctionality();

   // Function to close the cart
  const closeCart = () => {
    onCloseClick();
  };

  return (
    <div className="cart-container" style={{background: "white"}}>
       {/* cart header and passing cart close function to it */}
      <CartHeader cartItems={cartItems} closeCart = {closeCart} />
      {/* this is displaying the cart items details including price size color and image  and quantity */}
      <CartMain cartItems={cartItems} handleIncrement = {handleIncrement} handleDecrement = {handleDecrement} handleRemoveItem = {handleRemoveItem} />
      {/* cart footer including the subtotal */}
      <CartFooter calculateSubtotal= {calculateSubtotal} />
    </div>
  );
};

export default CartDisplay;