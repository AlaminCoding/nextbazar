import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || null)
      : null,
  isFetching: false,
  error: false,
};

const userAuthSlice = createSlice({
  name: "userAuthSlice",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.user = null;
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isFetching = true;
      state.error = false;
    },
    loginError: (state) => {
      state.user = null;
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      (state.user = null), (state.isFetching = false), (state.error = false);
    },
  },
});

export const { loginStart, loginSuccess, loginError, logout } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
