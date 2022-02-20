import styled, { css } from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoBagCheckOutline } from "react-icons/io5";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
const SidePanel = (props) => {
  return (
    <SideBar cart={props.cart}>
      {props.cart ? (
        <>
          <span>
            <RiShoppingCartLine />
            <small>10</small>
          </span>
          <span>
            <AiOutlineHeart />
            <small>5</small>
          </span>
          <span>
            <IoBagCheckOutline />
          </span>
        </>
      ) : (
        <>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FiInstagram />
          </a>
          <a href="#">
            <FiTwitter />
          </a>
        </>
      )}
    </SideBar>
  );
};

export default SidePanel;

const SideBar = styled.aside`
  width: 55px;
  height: 200px;
  background-color: #363535;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  ${(props) =>
    props.cart
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `}
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  svg {
    color: white;
    font-size: 30px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  span {
    position: relative;
    small {
      position: absolute;
      width: 22px;
      height: 24px;
      padding-top: 3px;
      top: 3px;
      font-weight: 600;
      left: -23px;
      color: #363535;
      background-color: white;
      border: 2px solid #363535;
      border-radius: 3px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 150px;
    ${(props) =>
      props.cart
        ? css`
            right: 0px;
            border-radius: 5px 0px 0px 5px;
          `
        : css`
            left: 0px;
            border-radius: 0px 5px 5px 0px;
          `}
    svg {
      font-size: 20px;
    }
    span {
      small {
        top: 1px;
      }
    }
  }
`;
