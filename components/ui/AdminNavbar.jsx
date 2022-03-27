import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "utils/slicers/userAuthSlice";
const AdminNavbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userLogout = () => {
    router.replace("/");
    dispatch(logout());
  };
  return (
    <Navbar>
      <Link href="/">
        <a className="h-md">NEXTBAZAR</a>
      </Link>
      <button onClick={() => userLogout()} className="black-btn">
        Logout
      </button>
    </Navbar>
  );
};

export default AdminNavbar;

const Navbar = styled.nav`
  background-color: #f4f4f4;
  height: 80px;
  width: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
