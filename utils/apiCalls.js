import axios from "axios";

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
