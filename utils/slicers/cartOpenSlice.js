import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
};

const handleCartSection = createSlice({
  name: "cartSectionHandle",
  initialState,
  reducers: {
    openCart: (state) => {
      state.showCart = true;
      console.log(state.showCart);
    },
    closeCart: (state) => {
      state.showCart = false;
    },
  },
});

export const { openCart, closeCart } = handleCartSection.actions;

export default handleCartSection.reducer;
