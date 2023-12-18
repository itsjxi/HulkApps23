
//cart header which is tellingh the total items added and a close cart button

const CartHeader = ({ cartItems, closeCart }) => {
  return (
    <>
      <div className="cart-header">
        <div className="cart-header-text">
          <h1>YOUR BAG </h1>
          <h3>
            ({cartItems.reduce((acc, curr) => acc + curr.quantity, 0)} item)
          </h3>
        </div>

        <div className="close-cart" onClick={closeCart}>
          &#10006;
        </div>
      </div>
    </>
  );
};

export default CartHeader;
