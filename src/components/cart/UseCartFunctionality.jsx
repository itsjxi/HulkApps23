
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/productSlice";

// Custom hook for cart functionality for handeling the cart calulations 
const useCartFunctionality = () => {
  // Access the Redux dispatch function
  const dispatch = useDispatch();

  // Retrieving cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);

  // Increment the quantity of a product in the cart
  const handleIncrement = (index) => {
    const updatedCart = [...cartItems];
    
    // Updating the quantity of the selected item
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity + 1
    };

    // Dispatch an action to add the item to the cart
    dispatch(
      addToCart({
        variant: updatedCart[index].variant,
        quantity: 1,
        product_type: updatedCart[index].product_type
      })
    );
  };

  // Decrement the quantity of a product in the cart
  const handleDecrement = (index) => {
    const updatedCart = [...cartItems];

    // Check if the quantity is greater than 1 before decrementing
    if (updatedCart[index].quantity > 1) {
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1
      };
    } else {
      // If quantity is 1, remove the item from the cart
      dispatch(removeFromCart({ variantId: updatedCart[index].variant.id }));
    }

    // Dispatch an action to update the cart with the decremented quantity
    dispatch(
      addToCart({
        variant: updatedCart[index].variant,
        quantity: -1,
        product_type: updatedCart[index].product_type
      })
    );
  };

  // Remove a product from the cart
  const handleRemoveItem = (index) => {
    dispatch(removeFromCart({ variantId: cartItems[index].variant.id }));
  };

  // Calculating the subtotal of allitems in the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      return subtotal + item.quantity * parseFloat(item.variant.price);
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
