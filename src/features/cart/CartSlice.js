import { createSlice, current } from '@reduxjs/toolkit';

// Compares arrays and returns true when all elements are same
const compareArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every(
      (value, index) =>
        value.name === arr2[index].name && value.selectedIndex === arr2[index].selectedIndex,
    )
  );
};

const IdBuilder = () => {
  let finalId = '';

  return {
    addId(id) {
      finalId += id;
      return this;
    },
    build() {
      return finalId;
    },
  };
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalItemQuantity: 0,
    products: [],
    cartMenuOpen: false,
  },
  reducers: {
    addItemToCart: (state, action) => {
      const id = IdBuilder().addId(action.payload.product.data.id);
      action.payload.product.attributeData.forEach((item) => {
        id.addId(`-${item.name.replace(/ /g, '-')}-${item.selectedIndex}`);
      });
      const products = state.products.map((item) => {
        if (item.id === id.build()) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      if (state.products.find((item) => item.id === id.build())) {
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
          { id: id.build(), product: action.payload.product, quantity: 1 },
        ],
        totalItemQuantity: state.totalItemQuantity + 1,
      };
    },
    removeItemFromCart: (state, action) => {
      if (state.products.find((item) => item.id === action.payload.id)) {
        if (state.products.find((item) => item.quantity === 1 && item.id === action.payload.id)) {
          return {
            ...state,
            products: state.products.filter((product) => {
              return product.id !== action.payload.id;
            }),
            totalItemQuantity: state.totalItemQuantity - 1,
          };
        }
        const products = state.products.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
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

    setNewAttributeSelectedIndex: (state, action) => {
      const newProducts = state.products.map((item) => {
        const newAttributeData = item.product.attributeData.map((attrItem) => {
          if (attrItem.name === action.payload.name && item.id === action.payload.id) {
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

export const { addItemToCart, removeItemFromCart, setNewAttributeSelectedIndex } =
  CartSlice.actions;
export const CartReducer = CartSlice.reducer;
