
// importing cartItm and using each component to render list
import CartItem from "./cartItem";

const CartList = ({ cartItems, handleIncrement, handleDecrement, handleRemoveItem }) => {
  return (
    <div className="cart-items">
      {cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          index={index}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </div>
  );
};

export default CartList;
