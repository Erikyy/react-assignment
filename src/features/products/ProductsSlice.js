import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApifetchProductsByCategory } from '../../common/api/StoreApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (category) => {
  const res = await ApifetchProductsByCategory(category);
  return res;
});

export const ProductsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: '',
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, () => {
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
    builder.addCase(fetchProducts.rejected, () => {
      return {
        products: [],
        status: 'error',
      };
    });
  },
});

export const ProductsReducer = ProductsSlice.reducer;
