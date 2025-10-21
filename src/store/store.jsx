
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './productSlice';
import productReducer from './dataSlice';
import wishlistReducer from './wishlistSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
