import { configureStore } from '@reduxjs/toolkit';
import { CategoriesReducer } from '../features/categories/CategoriesSlice';

export default configureStore({
  reducer: {
    CategoriesReducer,
  },
});
