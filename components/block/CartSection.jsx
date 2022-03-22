import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { closeCart } from "utils/slicers/cartOpenSlice";
import CartBoxes from "components/ui/CartBoxes";

const CartSection = () => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
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
        <div className="box-body">
          <div className="box-wrapper">
            {cartProducts.map((element) => (
              <CartBoxes data={element} key={element.id} />
            ))}
          </div>
          <div className="box-footer">
            <h2>Total Price : {totalPrice} BDT</h2>
            <button className="black-btn">Place Order</button>
          </div>
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
  padding-top: 80px;
  padding-bottom: 80px;
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
  .close-btn {
    font-size: 40px;
    position: fixed;
    top: 30px;
    right: 30px;
    cursor: pointer;
    transform: rotate(0deg);
    transition: 0.5s;
    &:hover {
      transform: rotate(180deg);
    }
  }
  .box-body {
    display: flex;
  }
  .box-wrapper {
    overflow-y: scroll;
    height: 74.5vh;
    flex: 1;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
    }

    &::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
  .box-footer {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      font-size: 20px;
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
      border-top: 1px solid gray;
      padding: 10px;
      h2 {
        flex: 1;
      }
      button {
        flex: 1;
        margin: 0;
      }
    }
  }
`;
