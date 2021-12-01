import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createFilter from 'redux-persist-transform-filter';
import storage from 'redux-persist/lib/storage';
import createMigrate from 'redux-persist/es/createMigrate';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import { CategoriesReducer } from '../features/categories/CategoriesSlice';
import { CurrencyReducer } from '../features/currency-switcher/CurrencySlice';
import { ProductsReducer } from '../features/products/ProductsSlice';
import { ProductReducer } from '../features/products/ProductSlice';
import { CartReducer } from '../features/cart/CartSlice';
import migrations from './migrations';

const rootReducer = combineReducers({
  CategoriesReducer,
  CurrencyReducer,
  ProductsReducer,
  ProductReducer,
  CartReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage,
    version: 0,
    blacklist: ['ProductsReducer', 'ProductReducer'],
    transforms: [
      createFilter('CurrencyReducer', ['activeCurrency', 'currencies']),
      createFilter('CurrencyReducer', null, ['activeCurrency', 'currencies']),
      createFilter('CategoriesReducer', ['activeCategory', 'categories']),
      createFilter('CategoriesReducer', null, ['activeCategory', 'categories']),
    ],
    migrate: createMigrate(migrations, { debug: false }),
    stateReconciler: autoMergeLevel2,
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
