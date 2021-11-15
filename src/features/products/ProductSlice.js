import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApifetchProductById } from '../../common/api/StoreApi';

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id) => {
  const res = await ApifetchProductById(id);
  return res;
});

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
    status: '',
  },
  extraReducers(builder) {
    builder.addCase(fetchProductById.pending, (state, action) => {
      return {
        ...state,
        status: 'loading',
      };
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      return {
        status: 'success',
        product: action.payload.data.product,
      };
    });
    builder.addCase(fetchProductById.rejected, (state, action) => {
      return {
        status: 'error',
        product: {},
      };
    });
  },
});

export const ProductReducer = ProductSlice.reducer;
