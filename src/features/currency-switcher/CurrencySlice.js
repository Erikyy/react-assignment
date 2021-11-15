import { createSlice } from '@reduxjs/toolkit';

export const CurrencySlice = createSlice({
  name: 'currencies',
  initialState: {
    currencies: [],
    activeCurrency: 'USD',
  },
  reducers: {
    fetchCurrencies: (state, action) => {
      state.currencies.push(action.payload);
    },
    setActiveCurrency: (state, action) => {
      return {
        currencies: state.currencies,
        activeCurrency: action.payload,
      };
    },
  },
});

export const { fetchCurrencies, setActiveCurrency } = CurrencySlice.actions;
export const CurrencyReducer = CurrencySlice.reducer;
