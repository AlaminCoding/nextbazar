import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeCart } from "utils/slicers/cartOpenSlice";
import Image from "next/image";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import ProductButton from "components/ui/ProductButton";
import { useState } from "react";

const CartSection = () => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const cartProducts = useSelector((state) => state.cartProduct.value);

  const dispatch = useDispatch();
  return (
    <CartPanel open={cartOpen} className="custom-container">
      <AiOutlineClose
        onClick={() => dispatch(closeCart())}
        className="close-btn"
      />
      <div className="block">
        <div className="block-header">
          {cartProducts.length > 0 ? (
            <h2 className="h-md">Your Cart</h2>
          ) : (
            <h2 className="h-md">Your Cart is empty</h2>
          )}
        </div>
        {cartProducts.map((element) => (
          <CartBox key={element.id}>
            <div className="cart-details">
              <div className="cart-img">
                <Image src={element.image} layout="fill" objectFit="cover" />
              </div>
              <div className="cart-price">
                <h2>{element.name}</h2>
                <p>
                  <HiOutlineCurrencyBangladeshi />
                  {element.onSell ? element.sellPrice : element.price}
                </p>
              </div>
            </div>
            <ProductButton data={element} local={false} />
            <div className="cart-quantity">
              <h2>Quantity : {element.count}</h2>
            </div>
          </CartBox>
        ))}
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
  padding-top: 80px;
  padding-bottom: 80px;
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
  .close-btn {
    font-size: 40px;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.5s;
    &:hover {
      transform: rotate(180deg);
    }
  }
`;

const CartBox = styled.div`
  padding: 30px 0px;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cart-details {
    display: flex;
    align-items: center;
  }
  .cart-img {
    height: 150px;
    width: 200px;
    position: relative;
    img {
      border-radius: 5px;
    }
  }
  .cart-price {
    margin-left: 10px;
    h2 {
      font-size: 20px;
    }
    p {
      font-weight: 600;
      color: #ff3667;
      margin-top: 15px;
      svg {
        position: relative;
        font-size: 16px;
        top: -3px;
        left: 0;
        margin-right: 3px;
      }
    }
  }
  .cart-quantity {
    h2 {
      font-size: 20px;
    }
  }
`;
