import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  showCart: Cookies.get("openCart") === "true" ? true : false,
};

const handleCartSection = createSlice({
  name: "cartSectionHandle",
  initialState,
  reducers: {
    openCart: (state) => {
      Cookies.set("openCart", "true");
      state.showCart = true;
    },
    closeCart: (state) => {
      Cookies.set("openCart", "false");
      state.showCart = false;
    },
  },
});

export const { openCart, closeCart } = handleCartSection.actions;

export default handleCartSection.reducer;
