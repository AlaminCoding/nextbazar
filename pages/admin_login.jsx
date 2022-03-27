import BlankLayout from "components/blankLayout";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { login } from "utils/slicers/userAuthSlice";
import { useRouter } from "next/router";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleUserAuth = () => {
    dispatch(login());
    router.replace("/admin");
  };
  return (
    <FormWrapper>
      <form>
        <h2 className="h-md">Admin Login</h2>
        <div className="input-group">
          <input type="text" placeholder="Username / Email" />
          <FaUserAlt />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
          <RiLockPasswordFill />
        </div>
        <button className="black-btn" onClick={() => handleUserAuth()}>
          Login
        </button>
      </form>
    </FormWrapper>
  );
};

export default AdminLogin;

AdminLogin.getLayout = function getLayout(AdminLogin) {
  return <BlankLayout>{AdminLogin}</BlankLayout>;
};

const FormWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 350px;
    border: 1px solid #d1d1d1;
    padding: 30px 20px;
    border-radius: 5px;
    .input-group {
      position: relative;
      margin-top: 30px;
      input {
        padding-left: 25px;
        width: 100%;
        border: none;
        border-bottom: 2px solid #363535;
        &:focus {
          outline: none;
        }
      }
      svg {
        position: absolute;
        top: 3px;
        left: 0;
      }
    }
    button {
      margin-top: 30px;
    }
  }
`;
