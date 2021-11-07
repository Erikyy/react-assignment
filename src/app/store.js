import { configureStore } from '@reduxjs/toolkit';
import { CategoriesReducer } from '../features/categories/CategoriesSlice';
import { CurrencyReducer } from '../features/currency-switcher/CurrencySlice';
import { ProductsReducer } from '../features/products/ProductsSlice';
import { ProductReducer } from '../features/products/ProductSlice';

export default configureStore({
  reducer: {
    CategoriesReducer,
    CurrencyReducer,
    ProductsReducer,
    ProductReducer,
  },
});
