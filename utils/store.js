import { configureStore } from "@reduxjs/toolkit";
import productReducer from "utils/slicers/productSlice";
import cartOpenReducer from "utils/slicers/cartOpenSlice";
export const store = configureStore({
  reducer: {
    allProduct: productReducer,
    cartOpen: cartOpenReducer,
  },
});
