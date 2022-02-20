import { configureStore } from "@reduxjs/toolkit";
import cartProductReducer from "utils/slicers/cartProductSlice";
export const store = configureStore({
  reducer: {
    cartProduct: cartProductReducer,
  },
});
