import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ApiFetchAllCategories } from '../../common/api/StoreApi';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const res = await ApiFetchAllCategories();
  return res;
});

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
    status: '',
  },
  reducers: {
    pushCategory: (state, action) => {
      state.categories.push(action.payload);
    },

    setActiveCategory: (state, action) => {
      return {
        ...state,
        activeCategory: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, (state) => {
      return {
        ...state,
        status: 'loading',
      };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return {
        ...state,
        categories: [...state.categories, ...action.payload.data.categories],
        status: 'success',
      };
    });

    builder.addCase(fetchCategories.rejected, (state) => {
      return {
        ...state,
        status: 'error',
      };
    });
  },
});

export const { pushCategory, setActiveCategory } = CategoriesSlice.actions;
export const CategoriesReducer = CategoriesSlice.reducer;
