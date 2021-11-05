import { configureStore } from '@reduxjs/toolkit';
import { CategoriesReducer } from '../features/categories/CategoriesSlice';
import { CurrencyReducer } from '../features/currency-switcher/CurrencySlice';
import { ProductsReducer } from '../features/products/ProductsSlice';

export default configureStore({
  reducer: {
    CategoriesReducer,
    CurrencyReducer,
    ProductsReducer,
  },
});
