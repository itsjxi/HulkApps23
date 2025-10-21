
//cart footer componnet including subtotal and lower text


const CartFooter = ({ calculateSubtotal }) => {
  return (
    <>
      <div className="cart-footer">
        <div className="subtotal">
          <span>Subtotal</span> 
          <span>${calculateSubtotal().toFixed(2)}</span>
        </div>
        <div className="checkout-section">
          <button
            className="checkout-button"
            onClick={() => console.log("Checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
        <div className="footer-info">
          <p>Have a promo code? Enter your code at checkout</p>
          <p>Shipping and taxes are calculated during checkout</p>
        </div>
      </div>
    </>
  );
};

export default CartFooter;
