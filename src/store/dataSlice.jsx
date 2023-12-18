// Import necessary libraries and modules from reduct toolkit
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Creating an asynchronous thunk for fetching products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      // Make an asynchronous request to get products data
      const response = await axios.get('/products.json');
      return response.data.products;
    } catch (error) {
      throw error.message;
    }
  }
);

// Create a Redux slice for the 'products' state 
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  //handeling various states while feching the data 
  extraReducers: (builder) => { 
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
