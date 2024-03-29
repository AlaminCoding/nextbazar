import styled, { css } from "styled-components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { openCart } from "utils/slicers/cartOpenSlice";
import { BiSearchAlt2 } from "react-icons/bi";
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
  const handleRouteChange = () => {
    setOpenMenu(false);
  };
  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });
  return (
    <MainNav className="custom-container">
      <Logo>
        <Link href="/">
          <a>NEXTBAZAR</a>
        </Link>
      </Logo>
      <Search>
        <div className="input-group">
          <input type="text" placeholder="Search Product" />
          <BiSearchAlt2 />
        </div>
      </Search>
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
          <Link href="/account">
            <a>Account</a>
          </Link>
        </li>
        <li>
          <Link href="/admin">
            <a className="black-btn">Admin</a>
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
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  @media screen and (max-width: 530px) {
    height: 80px;
    top: 40px;
    &:after {
      content: "";
      position: absolute;
      height: 40px;
      width: 100%;
      background-color: white;
      top: -40px;
      left: 0px;
    }
  }
`;

const Logo = styled.div`
  padding-top: 7px;
  a {
    color: #363535;
    font-size: 26px;
    font-weight: 600;
    text-decoration: none;
  }
`;
const Search = styled.div`
  width: 30%;
  .input-group {
    border: 2px solid #363535;
    display: flex;
    align-items: center;
    border-radius: 3px;
    input {
      height: 35px;
      flex: 1;
      border: none;
      width: 50%;
      padding-left: 10px;
      &:focus {
        outline: none;
      }
    }
    svg {
      width: 50px;
      background-color: #363535;
      color: white;
      height: 35px;
      padding: 5px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1180px) {
    width: 50%;
  }
  @media screen and (max-width: 530px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    .input-group {
      border: none;
      input {
        height: 40px;
      }
      svg {
        height: 40px;
        padding: 7px;
      }
    }
  }
`;
const Menu = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  li {
    margin-left: 35px;
    &:nth-child(1) {
      margin-left: 0px;
    }
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
  @media screen and (max-width: 1180px) {
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
  @media screen and (max-width: 530px) {
    top: 120px;
    height: 88vh;
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
  @media screen and (max-width: 1180px) {
    display: flex;
  }
`;
