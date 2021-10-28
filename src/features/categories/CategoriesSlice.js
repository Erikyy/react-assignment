import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    fetchCategories: (state, action) => {
      state.categories.push(action.payload);
    },
  },
});

export const { fetchCategories } = CategoriesSlice.actions;
export const CategoriesReducer = CategoriesSlice.reducer;
