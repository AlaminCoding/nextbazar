import products from "public/data/products";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favouriteCart: [],
  products: [...products],
};

export const productSlice = createSlice({
  name: "CartProduct",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let newProduct = { ...action.payload };
      // Local Product Addition
      let localProducts = [...state.products];
      let productIndex = state.products.findIndex(
        (element) => element.id === newProduct.id
      );
      localProducts[productIndex].count++;
      state.products = [...localProducts];

      // Cart Product Addion
      let productCartIndex = state.cart.findIndex(
        (element) => element.id === newProduct.id
      );
      let oldCartProducts = [...state.cart];
      if (productCartIndex != -1) {
        oldCartProducts[productCartIndex].count++;
        state.cart = [...oldCartProducts];
      } else {
        newProduct.count = 1;
        state.cart = [...state.cart, newProduct];
      }
    },
    removeProduct: (state, action) => {
      let newProduct = { ...action.payload };
      // Local Product Reduction
      let localProducts = [...state.products];
      let productIndex = state.products.findIndex(
        (element) => element.id === newProduct.id
      );
      localProducts[productIndex].count--;
      state.products = [...localProducts];
      // Cart Product Reduction
      let productCartIndex = state.cart.findIndex(
        (element) => element.id === newProduct.id
      );
      let oldCartProducts = [...state.cart];

      if (oldCartProducts[productCartIndex].count > 1) {
        oldCartProducts[productCartIndex].count--;
        state.cart = [...oldCartProducts];
      } else {
        oldCartProducts.splice(productCartIndex, 1);
        state.cart = [...oldCartProducts];
      }
    },
    addFavourite: (state, action) => {
      let newProduct = { ...action.payload };
      newProduct.favourite = true;
      state.favouriteCart = [...state.favouriteCart, newProduct];
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
    },
  },
});

export const { addProduct, removeProduct, addFavourite, removeFavourite } =
  productSlice.actions;

export default productSlice.reducer;
