import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeCart } from "utils/slicers/cartOpenSlice";
import CartBoxes from "components/ui/CartBoxes";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useEffect, useState } from "react";
const CartSection = () => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const [showCart, setShowCart] = useState(null);
  useEffect(() => {
    setShowCart(cartOpen);
  });
  const cartProducts = useSelector((state) => state.allProduct.cart);
  const dispatch = useDispatch();
  let totalPrice = 0;
  cartProducts.forEach((element) => {
    const { count, onSell, sellPrice, price } = element;
    const mainPrice = onSell ? sellPrice : price;
    const netPrice = count * mainPrice;
    totalPrice = totalPrice + netPrice;
  });

  return (
    <CartPanel open={showCart} className="custom-container">
      <div className="block-header">
        {cartProducts.length > 0 ? (
          <h2 className="h-md">Your Cart</h2>
        ) : (
          <h2 className="h-md">Your Cart is empty</h2>
        )}
        <AiOutlineClose
          onClick={() => dispatch(closeCart())}
          className="close-btn"
        />
      </div>
      <div className="block-wrapper">
        <div className="block-body">
          {cartProducts.map((element) => (
            <CartBoxes data={element} key={element._id} />
          ))}
        </div>
        <div className="block-footer">
          <h2>
            <HiOutlineCurrencyBangladeshi />
            {totalPrice} BDT
          </h2>
          {cartProducts.length > 0 ? (
            <button className="black-btn">Place Order</button>
          ) : null}
        </div>
      </div>
    </CartPanel>
  );
};

export default CartSection;

const CartPanel = styled.section`
  height: 100vh;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 35px;
  padding-bottom: 35px;
  box-sizing: border-box;
  overflow-y: hidden;
  ${(props) =>
    props.open
      ? css`
          opacity: 0.99;
          pointer-events: all;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          pointer-events: none;
          transform: translateY(100px);
        `}
  z-index: 4;
  transition: 0.5s;
  @media screen and (max-width: 765px) {
    padding-top: 10px;
  }
  .block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d1d1d1;
    padding-bottom: 15px;
    background-color: white;
    z-index: 1;
    .close-btn {
      font-size: 40px;
      cursor: pointer;
      transform: rotate(0deg);
      transition: 0.5s;
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .block-wrapper {
    display: flex;
    margin-top: 30px;
  }
  .block-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid #d1d1d1;
    height: 80vh;
    overflow-y: scroll;
    border-radius: 5px;
    @media screen and (max-width: 980px) {
      height: 77vh;
    }
    @media screen and (max-width: 400px) {
      height: 72vh;
    }
    &::-webkit-scrollbar {
      width: 0px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0);
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  .block-footer {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #d1d1d1;
    margin-left: 30px;
    border-radius: 5px;
    h2 {
      font-size: 20px;
      svg {
        position: relative;
        top: -3px;
        margin-right: 5px;
      }
    }
    button {
      margin-top: 30px;
    }
    @media screen and (max-width: 980px) {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      flex-direction: row;
      border: none;
      border-top: 1px solid #d1d1d1;
      border-radius: 0;
      padding: 10px;
      box-sizing: border-box;
      margin-left: 0;
      h2 {
        flex: 1;
        font-size: 18px;
      }
      button {
        flex: 1;
        margin: 0;
      }
    }
  }
`;
