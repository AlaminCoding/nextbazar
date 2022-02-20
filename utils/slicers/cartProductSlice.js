import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  favouriteCart: [],
};

export const cartProductSlice = createSlice({
  name: "CartProduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let newProduct = { ...action.payload };
      let productIndex = state.value.findIndex(
        (element) => element.id === newProduct.id
      );
      let oldCartProducts = [...state.value];

      if (productIndex != -1) {
        oldCartProducts[productIndex].count++;
        state.value = [...oldCartProducts];
      } else {
        newProduct.count = 1;
        state.value = [...state.value, newProduct];
      }
    },
    removeProduct: (state, action) => {
      let newProduct = { ...action.payload };
      let productIndex = state.value.findIndex(
        (element) => element.id === newProduct.id
      );
      let oldCartProducts = [...state.value];

      if (oldCartProducts[productIndex].count > 1) {
        oldCartProducts[productIndex].count--;
        state.value = [...oldCartProducts];
      } else {
        oldCartProducts.splice(productIndex, 1);
        state.value = [...oldCartProducts];
      }
    },
    addFavourite: (state, action) => {
      let newProduct = { ...action.payload };
      newProduct.favourite = true;
      state.favouriteCart = [...state.favouriteCart, newProduct];
      console.log(state.favouriteCart);
    },
    removeFavourite: (state, action) => {
      let newProduct = { ...action.payload };
      let oldCartProducts = [...state.favouriteCart];
      let index = oldCartProducts.findIndex(
        (element) => element.id === newProduct.id
      );
      oldCartProducts[index].favourite = false;
      oldCartProducts.splice(index, 1);
      state.favouriteCart = [...oldCartProducts];
      console.log(state.favouriteCart);
    },
  },
});

export const { addProduct, removeProduct, addFavourite, removeFavourite } =
  cartProductSlice.actions;

export default cartProductSlice.reducer;
