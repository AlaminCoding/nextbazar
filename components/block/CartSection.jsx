import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeCart } from "utils/slicers/cartOpenSlice";
import CartBoxes from "components/ui/CartBoxes";

const CartSection = () => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const cartProducts = useSelector((state) => state.allProduct.cart);
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
          <CartBoxes data={element} key={element.id} />
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
