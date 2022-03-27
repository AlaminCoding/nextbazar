import { configureStore } from "@reduxjs/toolkit";
import productReducer from "utils/slicers/productSlice";
import cartOpenReducer from "utils/slicers/cartOpenSlice";
import favOpenReducer from "utils/slicers/favOpenSlice";
import userAuthReducer from "utils/slicers/userAuthSlice";
export const store = configureStore({
  reducer: {
    allProduct: productReducer,
    cartOpen: cartOpenReducer,
    favOpen: favOpenReducer,
    userAuth: userAuthReducer,
  },
});
