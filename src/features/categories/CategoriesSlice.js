import { createSlice } from '@reduxjs/toolkit';

export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    activeCategory: '',
  },
  reducers: {
    fetchCategories: (state, action) => {
      state.categories.push(action.payload);
    },

    setActiveCategory: (state, action) => {
      return {
        categories: state.categories,
        activeCategory: action.payload,
      };
    },
  },
});

export const { fetchCategories, setActiveCategory } = CategoriesSlice.actions;
export const CategoriesReducer = CategoriesSlice.reducer;
