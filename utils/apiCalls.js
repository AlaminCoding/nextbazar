import axios from "axios";

import {
  loginStart,
  loginSuccess,
  loginError,
} from "utils/slicers/userAuthSlice";

export const login = async (user, dispatch, router) => {
  dispatch(loginStart());
  const { redirect } = router.query; //account?redirect=/profile
  console.log(redirect);
  try {
    const res = await axios.post("http://localhost:8000/auth/login", user);
    dispatch(loginSuccess(res.data));
    router.replace(redirect || "/");
  } catch (err) {
    dispatch(loginError());
  }
};

export const signup = async (user, dispatch, router) => {
  try {
    const registerData = {
      username: user.username,
      email: user.email1,
      password: user.password2,
    };
    const registerRes = await axios.post(
      "http://localhost:8000/auth/register",
      registerData
    );
    const loginData = {
      email: user.email1,
      password: user.password1,
    };
    login(loginData, dispatch, router);
  } catch (err) {
    console.log(err);
  }
};
