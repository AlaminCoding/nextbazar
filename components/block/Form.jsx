import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
const Form = () => {
  const [loginActive, setLoginActive] = useState(true);
  return (
    <FormWrapper className="custom-container" loginActive={loginActive}>
      <div className="form-box">
        <div className="image-panel">
          <h2>HELLO !</h2>
          <h3>{loginActive ? "Member not yet ?" : "Already a memebr ?"}</h3>
          <button onClick={() => setLoginActive(!loginActive)}>
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
            <form action="">
              <h2>Login</h2>
              <div className="form-group">
                <label htmlFor="username_email">Username or Email</label>
                <input type="text" name="username_email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />
              </div>

              <button type="submit" className="black-btn">
                Login
              </button>
              <small>
                Forget Password ? <a href="#">Click Here</a>
              </small>
            </form>
          ) : (
            <form action="">
              <h2>Sign In</h2>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password1">Password</label>
                <input type="password" name="password1" id="" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" id="" />
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
        left: 0;
        height: 200px;
        width: 100%;
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
      right: ${(props) => (props.loginActive ? "0" : "40%")};
      transition: 0.5s;
      @media screen and (min-width: 700px) {
        right: ${(props) => (props.loginActive ? "0" : "40%")};
      }
      @media screen and (max-width: 700px) {
        top: 200px;
        left: 0;
        height: auto;
        width: 100%;
      }
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
    }
  }
`;
