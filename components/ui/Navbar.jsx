import styled, { css } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openCart } from "utils/slicers/cartOpenSlice";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleMenu = () => {
    if (openMenu === false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenMenu(false);
    };
    router.events.on("routeChangeStart", handleRouteChange);
  }, []);

  return (
    <MainNav className="custom-container">
      <Logo>
        <Link href="/">
          <a>NEXTBAZAR</a>
        </Link>
      </Logo>
      <Menu open={openMenu}>
        <li>
          <Link href="/">
            <a className={router.pathname == "/" ? "menu-active" : null}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/shop">
            <a className={router.pathname == "/shop" ? "menu-active" : null}>
              Shop
            </a>
          </Link>
        </li>
        <li>
          <a onClick={() => dispatch(openCart())}>Cart</a>
        </li>
        <li>
          <Link href="/">
            <a>Account</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="black-btn">Contact</a>
          </Link>
        </li>
      </Menu>
      <Toggle onClick={handleMenu} open={openMenu}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </Toggle>
    </MainNav>
  );
};

export default Navbar;

const MainNav = styled.nav`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.div`
  a {
    color: #363535;
    font-size: 26px;
    font-weight: 600;
    text-decoration: none;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  li {
    margin-left: 35px;
    a {
      color: #363535;
      font-size: 16px;
      text-decoration: none;
      font-weight: 600;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        opacity: 0.5;
      }
    }
    .menu-active {
      opacity: 0.5;
    }
    .black-btn {
      color: white;
      &:hover {
        color: #363535;
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 750px) {
    position: fixed;
    top: 80px;
    right: ${(props) => (props.open ? "0%" : "-100%")};
    opacity: ${(props) => (props.open ? 1 : 0)};
    background-color: white;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transition: 0.5s;
    li {
      margin: 30px 0px;
    }
  }
`;

const Toggle = styled.div`
  height: 24px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  display: none;
  .bar {
    border-radius: 2px;
    height: 2px;
    width: 100%;
    background-color: #363535;
    position: relative;
    transition: 0.5s;
  }
  .bar1 {
    ${(props) =>
      props.open
        ? css`
            top: 50%;
            transform: translateY(-50%) rotate(45deg);
          `
        : css`
            top: 0;
            transform: translateY(0) rotate(0deg);
          `}
    transition: 0.5s;
  }
  .bar3 {
    ${(props) =>
      props.open
        ? css`
            bottom: 50%;
            transform: translateY(50%) rotate(-45deg);
          `
        : css`
            bottom: 0;
            transform: translateY(0) rotate(0);
          `}
    transition: 0.5s;
  }
  .bar2 {
    opacity: ${(props) => (props.open ? "0" : "1")};
  }
  @media screen and (max-width: 750px) {
    display: flex;
  }
`;
