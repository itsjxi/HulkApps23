
//cart header which is tellingh the total items added and a close cart button

const CartHeader = ({ cartItems, closeCart }) => {
  return (
    <>
      <div className="cart-header">
        <div className="cart-header-text">
          <h3>Your Bag</h3>
          <span>
            ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} items)
          </span>
        </div>

        <div className="close-cart" onClick={closeCart}>
          &#10006;
        </div>
      </div>
    </>
  );
};

export default CartHeader;
