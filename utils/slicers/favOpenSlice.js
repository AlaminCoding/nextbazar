import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showFav: false,
};

const handleFavSection = createSlice({
  name: "favSectionHandle",
  initialState,
  reducers: {
    openFav: (state) => {
      state.showFav = true;
    },
    closeFav: (state) => {
      state.showFav = false;
    },
  },
});

export const { openFav, closeFav } = handleFavSection.actions;
export default handleFavSection.reducer;
