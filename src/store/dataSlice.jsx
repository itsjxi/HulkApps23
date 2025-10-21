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
    items: [],
    filteredItems: [],
    status: 'idle',
    error: null,
    filters: {
      category: 'all',
      priceRange: [0, 1000]
    },
    sortBy: 'featured'
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredItems = applyFilters(state.items, state.filters, state.sortBy);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.filteredItems = applyFilters(state.items, state.filters, action.payload);
    }
  },
  //handeling various states while feching the data 
  extraReducers: (builder) => { 
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.items = action.payload;
      state.filteredItems = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

const applyFilters = (items, filters, sortBy) => {
  let filtered = [...items];
  
  // Apply category filter
  if (filters.category !== 'all') {
    filtered = filtered.filter(item => 
      item.product_type?.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Apply price filter
  filtered = filtered.filter(item => {
    const price = parseFloat(item.variants?.[0]?.price || 0);
    return price >= filters.priceRange[0] && price <= filters.priceRange[1];
  });
  
  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.variants?.[0]?.price || 0);
        const priceB = parseFloat(b.variants?.[0]?.price || 0);
        return priceA - priceB;
      });
      break;
    case 'price-high':
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.variants?.[0]?.price || 0);
        const priceB = parseFloat(b.variants?.[0]?.price || 0);
        return priceB - priceA;
      });
      break;
    case 'name':
      filtered.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
      break;
    default:
      break;
  }
  
  return filtered;
};

export const { setFilters, setSortBy } = productSlice.actions;

export default productSlice.reducer;
