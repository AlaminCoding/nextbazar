import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "utils/slicers/userAuthSlice";
import { useEffect, useState } from "react";
const AdminNavbar = () => {
  const [user, setUser] = useState(null);
  const loggedUser = useSelector((state) => state.userAuth.user);

  useEffect(() => {
    setUser(loggedUser);
  });

  const router = useRouter();
  const dispatch = useDispatch();
  const userLogout = () => {
    router.push("/");
    dispatch(logout());
  };
  return (
    <Navbar>
      <Link href="/">
        <a className="h-md">NEXTBAZAR</a>
      </Link>
      <nav className="d-flex align-items-center">
        <p className="me-3">Logged in as {user && user.username}</p>
        <button onClick={() => userLogout()} className="black-btn">
          Logout
        </button>
      </nav>
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
