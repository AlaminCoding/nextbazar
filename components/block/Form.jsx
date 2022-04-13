import styled from "styled-components";
import Image from "next/image";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { login, signup } from "utils/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
const Form = () => {
  const loginError = useSelector((state) => state.userAuth.error);

  const [loginActive, setLoginActive] = useState(true);
  const formRef = useRef(null);

  const changeState = () => {
    setLoginActive(!loginActive);
    formRef.current.reset();
  };

  const [passError, setPassError] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LoginSubmit = async (data) => {
    await login(data, dispatch, router);
  };
  const RegisterSubmit = async (data) => {
    if (data.password1 === data.password2) {
      setPassError(false);
      signup(data, dispatch, router);
    } else {
      setPassError(true);
    }
  };
  return (
    <FormWrapper className="custom-container" loginActive={loginActive}>
      <div className="form-box">
        <div className="image-panel">
          <h2>HELLO !</h2>
          <h3>{loginActive ? "Member not yet ?" : "Already a memebr ?"}</h3>
          <button onClick={() => changeState()}>
            {loginActive ? "Sign In" : "Login"}
          </button>
          <Image
            src="https://i.ibb.co/qJ5Ppm4/form.jpg"
            alt="Form Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="form-panel">
          {loginActive ? (
            <form onSubmit={handleSubmit(LoginSubmit)} ref={formRef}>
              <h2>Login</h2>
              {loginError ? <b>Wrong Email or Password</b> : null}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                />
                <b>{errors.email && "Email is required"}</b>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
                <b>{errors.password && "Password is required"}</b>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <button type="submit" className="black-btn">
                  Login
                </button>
                <small>
                  <a href="#">Forget Password ? </a>
                </small>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit(RegisterSubmit)} ref={formRef}>
              <h2>Sign In</h2>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                />
                <b>{errors.username && "Username is required"}</b>
              </div>
              <div className="form-group">
                <label htmlFor="email1">Email</label>
                <input
                  type="email"
                  {...register("email1", {
                    required: true,
                  })}
                />
                <b>{errors.email1 && "Email is required"}</b>
              </div>
              <div className="form-group">
                <label htmlFor="password1">Password</label>
                <input
                  type="password"
                  {...register("password1", { required: true })}
                />
                <b>{errors.password1 && "Password is required"}</b>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                  type="password"
                  {...register("password2", { required: true })}
                />
                <b>{errors.password2 && "Password is required"}</b>
                {passError && <b>Password Mismatch</b>}
              </div>
              <button type="submit" className="black-btn">
                Sign In
              </button>
              <small>
                By clicking signin, you agree to our terms and conditions.
              </small>
            </form>
          )}
        </div>
        <div className="mobile-ques">
          {loginActive ? <p>Member Not Yet ?</p> : <p>Already A Memebr ?</p>}
          <b onClick={() => changeState()}>
            {loginActive ? "REGISTER" : "LOGIN"}
          </b>
        </div>
      </div>
    </FormWrapper>
  );
};

export default Form;

const FormWrapper = styled.section`
  width: 100%;
  .form-box {
    max-width: 800px;
    height: 600px;
    border-radius: 5px;
    margin: 100px auto;
    border: 1px solid #d1d1d1;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 850px) {
      margin-top: 30px;
    }
    @media screen and (max-width: 700px) {
      height: auto;
      padding: 30px;
    }
    .image-panel {
      width: 40%;
      height: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      transition: 0.5s;
      z-index: 0;
      @media screen and (min-width: 700px) {
        left: ${(props) => (props.loginActive ? "0" : "60%")};
      }
      @media screen and (max-width: 700px) {
        display: none;
      }
      img {
        z-index: -1;
      }
      h2 {
        color: white;
        font-size: 42px;
        text-shadow: 0px 0px 2px black;
      }
      h3 {
        color: white;
        margin-top: 10px;
        font-size: 20px;
        text-shadow: 0px 0px 2px black;
        font-weight: 600;
      }
      button {
        border: none;
        background-color: white;
        border-radius: 3px;
        padding: 7px 30px;
        margin-top: 10px;
        cursor: pointer;
        z-index: 1;
      }
    }
    .form-panel {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      background-color: white;
      top: 0;
      transition: 0.5s;

      form {
        width: 350px;
        h2 {
          font-size: 26px;
          text-transform: uppercase;
        }
        .form-group {
          position: relative;
          width: 100%;
          margin-top: 30px;
          input {
            width: 100%;
            height: 35px;
            border: none;
            border-bottom: 2px solid #363535;
            &:focus {
              outline: none;
            }
          }
          label {
            font-size: 14px;
            font-weight: 600;
            pointer-events: none;
            /* border-bottom: 2px solid #363535; */
          }
        }
        b {
          font-size: 12px;
          margin-top: 5px;
          color: crimson;
        }
        button {
          margin-top: 30px;
          padding-top: 5px;
          padding-bottom: 5px;
        }
        small {
          display: block;
          margin-top: 30px;
          a {
            font-weight: 600;
          }
        }
      }
      @media screen and (min-width: 700px) {
        right: ${(props) => (props.loginActive ? "0" : "40%")};
      }
      @media screen and (max-width: 700px) {
        position: static;
        width: 100%;
        form {
          width: 100%;
        }
      }
    }
    .mobile-ques {
      display: none;
      margin-top: 40px;
      padding: 10px;
      b {
        cursor: pointer;
      }
      @media screen and (max-width: 700px) {
        display: flex;
        justify-content: space-evenly;
        background-color: #f4f4f4;
      }
    }
  }
`;
