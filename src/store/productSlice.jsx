
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { variant, quantity,product_type } = action.payload;
      const existingItem = state.find(item => item.variant.id === variant.id);

      if (existingItem) {
        existingItem.quantity += quantity;

        // Remove the item from the cart if the quantity becomes 0
        if (existingItem.quantity === 0) {
          state.splice(state.indexOf(existingItem), 1);//we are d
        }
      } else if (quantity > 0) {
        state.push({ variant, quantity, product_type });
      }
    },
    removeFromCart: (state, action) => {
      const { variantId } = action.payload;
      const indexToRemove = state.findIndex(item => item.variant.id === variantId);

      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
