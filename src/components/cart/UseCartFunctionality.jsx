
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../../store/productSlice";

// Custom hook for cart functionality for handeling the cart calulations 
const useCartFunctionality = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Retrieving cart items from the Redux store
  const cartItems = useSelector((state) => state.cart?.items || []);

  // Increment the quantity of a product in the cart
  const handleIncrement = (index) => {
    const item = cartItems[index];
    if (item) {
      dispatch(updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      }));
    }
  };

  // Decrement the quantity of a product in the cart
  const handleDecrement = (index) => {
    const item = cartItems[index];
    if (item) {
      if (item.quantity > 1) {
        dispatch(updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        }));
      } else {
        dispatch(removeFromCart(item.id));
      }
    }
  };

  // Remove a product from the cart
  const handleRemoveItem = (index) => {
    const item = cartItems[index];
    if (item) {
      dispatch(removeFromCart(item.id));
    }
  };

  // Calculating the subtotal of allitems in the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      return subtotal + (item.quantity || 0) * parseFloat(item.price || 0);
    }, 0);
  };

  // Return an array of functions for external  which we are using in our cart quantityupdation 
  return [
    handleIncrement,
    handleDecrement,
    handleRemoveItem,
    calculateSubtotal
  ];
};

export default useCartFunctionality;
