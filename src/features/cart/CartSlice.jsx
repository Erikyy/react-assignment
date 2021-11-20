import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItemQuantity: 0,
    products: [],
    totalAmount: 0,
    cartMenuOpen: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const products = state.products.map((item) => {
        if (item.id === action.payload.product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      if (state.products.find((item) => item.id === action.payload.product.id)) {
        return {
          ...state,
          products: [...products],
          totalItemQuantity: state.totalItemQuantity + 1,
        };
      }

      return {
        ...state,
        products: [
          ...state.products,
          { id: action.payload.product.id, product: action.payload.product, quantity: 1 },
        ],
        totalItemQuantity: state.totalItemQuantity + 1,
      };
    },
    removeItemFromCart: (state, action) => {
      const products = state.products.map((item) => {
        if (item.id === action.payload.product.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      if (state.products.find((item) => item.id === action.payload.product.id)) {
        if (state.products.find((item) => item.quantity === 1)) {
          return {
            ...state,
            products: state.products.filter((product) => product.id !== action.payload.product.id),
            totalItemQuantity: state.totalItemQuantity - 1,
          };
        }
        return {
          ...state,
          products: [...products],
          totalItemQuantity: state.totalItemQuantity - 1,
        };
      }

      return {
        ...state,
      };
    },
    addTotalAmount: (state, action) => {
      return {
        ...state,
        totalAmount: state.totalAmount + action.payload,
      };
    },
    subtractTotalAmount: (state, action) => {
      return {
        ...state,
        totalAmount: state.totalAmount - action.payload,
      };
    },
    setCartMenuOpen: (state, action) => {
      return {
        ...state,
        cartMenuOpen: action.payload,
      };
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  addTotalAmount,
  subtractTotalAmount,
  setCartMenuOpen,
} = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
