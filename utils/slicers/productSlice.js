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
    removeFromCart: (state, action) => {
      let productId = action.payload;
      let cartProducts = [...state.cart];
      let localProducts = [...state.products];
      let cartIndex = cartProducts.findIndex(
        (element) => element.id === productId
      );
      let localIndex = localProducts.findIndex(
        (element) => element.id === productId
      );
      cartProducts.splice(cartIndex, 1);
      localProducts[localIndex].count = 0;
      state.cart = [...cartProducts];
      state.products = [...localProducts];
    },
    addFavourite: (state, action) => {
      let newProduct = { ...action.payload };
      let localProducts = [...state.products];
      let productIndex = localProducts.findIndex(
        (element) => element.id === newProduct.id
      );
      localProducts[productIndex].favourite = true;
      newProduct.favourite = true;

      state.favouriteCart = [...state.favouriteCart, newProduct];
      state.products = [...localProducts];
    },
    removeFavourite: (state, action) => {
      let newProduct = { ...action.payload };

      let localProducts = [...state.products];
      let productIndex = localProducts.findIndex(
        (element) => element.id === newProduct.id
      );
      localProducts[productIndex].favourite = false;

      let oldCartProducts = [...state.favouriteCart];
      let index = oldCartProducts.findIndex(
        (element) => element.id === newProduct.id
      );
      oldCartProducts[index].favourite = false;
      oldCartProducts.splice(index, 1);
      state.favouriteCart = [...oldCartProducts];
      state.products = [...localProducts];
    },
  },
});

export const {
  addProduct,
  removeProduct,
  addFavourite,
  removeFavourite,
  removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;
