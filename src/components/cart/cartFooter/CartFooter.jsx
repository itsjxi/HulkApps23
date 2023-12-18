
//cart footer componnet including subtotal and lower text


const CartFooter = ({ calculateSubtotal }) => {
  return (
    <>
      <div className="cart-footer">
        <div className="subtotal">
          <h2>Subtotal </h2> <h2>${calculateSubtotal().toFixed(2)}</h2>
        </div>
        <div className="checkout-section">
          <button
            className="checkout-button"
            onClick={() => console.log("Checkout")}
          >
            Checkout
          </button>
        </div>
        <p>Have promocode? Enter your code and checkout</p>
        <p>Shipping and texes are calculated during checkout</p>
      </div>
    </>
  );
};

export default CartFooter;
