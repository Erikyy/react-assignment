import { createSlice, current } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItemQuantity: 0,
    products: [],
    cartMenuOpen: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const products = state.products.map((item) => {
        if (item.id === action.payload.product.data.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      if (state.products.find((item) => item.id === action.payload.product.data.id)) {
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
          { id: action.payload.product.data.id, product: action.payload.product, quantity: 1 },
        ],
        totalItemQuantity: state.totalItemQuantity + 1,
      };
    },
    removeItemFromCart: (state, action) => {
      const products = state.products.map((item) => {
        if (item.id === action.payload.product.data.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      if (state.products.find((item) => item.id === action.payload.product.data.id)) {
        if (state.products.find((item) => item.quantity === 1)) {
          return {
            ...state,
            products: state.products.filter(
              (product) => product.id !== action.payload.product.data.id,
            ),
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

    setCartMenuOpen: (state, action) => {
      return {
        ...state,
        cartMenuOpen: action.payload,
      };
    },

    setNewAttributeSelectedIndex: (state, action) => {
      const newProducts = state.products.map((item) => {
        const newAttributeData = item.product.attributeData.map((attrItem) => {
          if (attrItem.name === action.payload.name) {
            return {
              name: attrItem.name,
              selectedIndex: action.payload.idx,
            };
          }
          return current(attrItem);
        });
        return {
          ...item,
          product: {
            ...item.product,
            attributeData: newAttributeData,
          },
        };
      });
      return {
        ...state,
        products: newProducts,
      };
    },
  },
});

export const { addItemToCart, removeItemFromCart, setCartMenuOpen, setNewAttributeSelectedIndex } =
  CartSlice.actions;
export const CartReducer = CartSlice.reducer;
