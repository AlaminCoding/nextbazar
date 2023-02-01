import styled from "styled-components";
import Image from "next/image";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import ProductButton from "components/ui/ProductButton";
import { removeFromCart } from "utils/slicers/productSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import ProductImage from "./ProductImage";

const CartBoxes = (props) => {
  const { _id, onSell, sellPrice, price, count } = props.data;
  const totalPrice = count * (onSell ? sellPrice : price);
  const [fadeOut, setFadeOut] = useState(false);

  const fadeOutCartRemove = (id) => {
    setFadeOut(true);
    setTimeout(() => {
      dispatch(removeFromCart(id));
    }, 500);
  };
  const dispatch = useDispatch();
  return (
    <CartBox fadeOut={fadeOut}>
      <ProductImage data={props.data} />
      <ul className="cart-actions">
        <li>
          <ProductButton data={props.data} local={false} />
        </li>
        <li>
          <h2 className="heading quantity">Quantity : {count}</h2>
        </li>
        <li>
          <h2 className="heading">Price : {totalPrice}</h2>
        </li>
        <li>
          <BsTrash onClick={() => fadeOutCartRemove(_id)} />
        </li>
      </ul>
    </CartBox>
  );
};

export default CartBoxes;

const CartBox = styled.div`
  padding: 30px 0px 30px 30px;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation-name: ${(props) => (props.fadeOut ? "fadeOut" : null)};
  animation-duration: 0.5s;
  @media screen and (max-width: 1580px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .cart-details {
    display: flex;
    align-items: center;
  }
  .cart-img {
    height: 100px;
    width: 130px;
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
        top: -2px;
        left: 0;
        margin-right: 3px;
      }
    }
  }
  .cart-actions {
    width: 700px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    list-style-type: none;
    padding-right: 50px;
    li {
      .heading {
        font-size: 18px;
        padding-top: 5px;
      }
      svg {
        display: block;
        margin-left: auto;
        font-size: 32px;
        cursor: pointer;
      }
    }
    @media screen and (max-width: 1580px) {
      width: 100%;
      margin-top: 30px;
    }
    @media screen and (max-width: 700px) {
      grid-template-columns: auto auto;
      grid-row-gap: 20px;
      .quantity {
        text-align: right;
      }
    }
  }
`;
