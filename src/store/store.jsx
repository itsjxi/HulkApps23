
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './productSlice';
import productReducer from './dataSlice';

const store = configureStore({
  reducer: {             // reducer for cart and product related actions 
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
