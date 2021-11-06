import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductsByCategory } from '../../common/api/StoreApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category) => {
  const res = await fetchProductsByCategory(category);
  return res;
});

export const ProductsSlice = createSlice({
  name: 'categories',
  initialState: {
    products: [],
    status: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      return {
        products: [],
        status: 'loading',
      };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return {
        products: action.payload.data.category.products,
        status: 'success',
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        products: [],
        status: 'error',
      };
    });
  },
});

export const ProductsReducer = ProductsSlice.reducer;
