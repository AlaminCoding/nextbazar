import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  showFav: Cookies.get("openFav") === "true" ? true : false,
};

const handleFavSection = createSlice({
  name: "favSectionHandle",
  initialState,
  reducers: {
    openFav: (state) => {
      Cookies.set("openFav", "true");
      state.showFav = true;
    },
    closeFav: (state) => {
      Cookies.set("openFav", "false");
      state.showFav = false;
    },
  },
});

export const { openFav, closeFav } = handleFavSection.actions;
export default handleFavSection.reducer;
