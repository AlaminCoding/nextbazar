import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeCart } from "utils/slicers/cartOpenSlice";

const CartSection = () => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const cartProducts = useSelector((state) => state.cartProduct.value);
  const dispatch = useDispatch();
  return (
    <CartPanel open={cartOpen}>
      <AiOutlineClose onClick={() => dispatch(closeCart())} />
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
  ${(props) =>
    props.open
      ? css`
          opacity: 0.98;
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
  svg {
    font-size: 40px;
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.5s;
  }
  svg:hover {
    transform: rotate(180deg);
  }
`;
