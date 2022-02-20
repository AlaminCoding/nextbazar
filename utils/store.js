import { configureStore } from "@reduxjs/toolkit";
import cartProductReducer from "utils/slicers/cartProductSlice";
import cartOpenReducer from "utils/slicers/cartOpenSlice";
export const store = configureStore({
  reducer: {
    cartProduct: cartProductReducer,
    cartOpen: cartOpenReducer,
  },
});
