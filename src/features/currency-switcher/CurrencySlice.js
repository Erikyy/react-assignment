import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiFetchAllCurrencies } from '../../common/api/StoreApi';

export const fetchCurrencies = createAsyncThunk('currencies/fetch_currencies', async () => {
  const res = await ApiFetchAllCurrencies();
  return res;
});

export const CurrencySlice = createSlice({
  name: 'currencies',
  initialState: {
    currencies: [],
    activeCurrency: '',
    status: '',
  },
  reducers: {
    setActiveCurrency: (state, action) => {
      return {
        ...state,
        activeCurrency: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCurrencies.pending, (state, action) => {
      return {
        ...state,
        status: 'loading',
      };
    });
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      return {
        ...state,
        currencies: action.payload.data.currencies,
        status: 'success',
      };
    });
    builder.addCase(fetchCurrencies.rejected, (state, action) => {
      return {
        ...state,
        status: 'error',
      };
    });
  },
});

export const { setActiveCurrency } = CurrencySlice.actions;
export const CurrencyReducer = CurrencySlice.reducer;
