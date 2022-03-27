import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userLogin: false,
};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.userLogin = true;
    },
    logout: (state) => {
      state.userLogin = false;
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
