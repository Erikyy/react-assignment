import { configureStore } from '@reduxjs/toolkit';
import { CategoriesReducer } from '../features/categories/CategoriesSlice';
import { CurrencyReducer } from '../features/currency-switcher/CurrencySlice';

export default configureStore({
  reducer: {
    CategoriesReducer,
    CurrencyReducer,
  },
});
