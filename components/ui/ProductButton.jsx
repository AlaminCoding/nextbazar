import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "utils/slicers/productSlice";
import { BsFillPlusSquareFill, BsDashSquareFill } from "react-icons/bs";

const ProductButton = (props) => {
  const dispatch = useDispatch();
  const addCartHandler = async (data) => {
    dispatch(addProduct(data));
  };

  const increaseCart = (data) => {
    dispatch(addProduct(data));
  };

  const decreaseCart = (data) => {
    dispatch(removeProduct(data));
  };
  return (
    <>
      {props.data.count > 0 ? (
        <CartBtnGroup>
          <button onClick={() => decreaseCart(props.data)}>
            <BsDashSquareFill />
          </button>
          <h2>{props.data.count}</h2>
          <button onClick={() => increaseCart(props.data)}>
            <BsFillPlusSquareFill />
          </button>
        </CartBtnGroup>
      ) : (
        <button
          className="black-btn"
          onClick={() => addCartHandler(props.data)}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default ProductButton;

const CartBtnGroup = styled.div`
  display: flex;
  align-items: center;
  h2 {
    width: 40px;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    padding-top: 7px;
    pointer-events: none;
  }
  button {
    border: none;
    outline: none;
    padding: 0;
    background-color: transparent;
    height: 44px;
  }
  svg {
    font-size: 36px;
    cursor: pointer;
    border-radius: 3px;
    color: #363535;
  }
`;
