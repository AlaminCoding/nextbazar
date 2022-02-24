import styled from "styled-components";
import Image from "next/image";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPlusSquareFill, BsDashSquareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addProduct,
  removeProduct,
  addFavourite,
  removeFavourite,
} from "utils/slicers/cartProductSlice";
import ProductButton from "./ProductButton";
const ProductBox = (props) => {
  const dispatch = useDispatch();

  const { favourite, name, price, onSell, sellPrice, image } = props.data;
  const [inCart, setInCart] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [inFavourite, setInFavourite] = useState(favourite);

  const sellPercentage = () => {
    return ((price - sellPrice) / price) * 100;
  };

  const handleFavourite = (data) => {
    if (inFavourite === false) {
      setInFavourite(true);
      dispatch(addFavourite(data));
    } else {
      setInFavourite(false);
      dispatch(removeFavourite(data));
    }
  };

  const addCartHandler = (data) => {
    setProductCount(productCount + 1);
    setInCart(true);
    dispatch(addProduct(data));
  };

  const increaseCart = (data) => {
    setProductCount(productCount + 1);
    dispatch(addProduct(data));
  };

  const decreaseCart = (data) => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    } else {
      setProductCount(productCount - 1);
      setInCart(false);
    }
    dispatch(removeProduct(data));
  };

  return (
    <Box onsell={onSell}>
      <Favourite onClick={() => handleFavourite(props.data)}>
        {inFavourite ? (
          <>
            <AiFillHeart /> <span>Click to remove favourite</span>
          </>
        ) : (
          <>
            <AiOutlineHeart /> <span>Click to add favourite</span>
          </>
        )}
      </Favourite>
      {onSell ? (
        <Sale>
          <h2>-{sellPercentage()}%</h2>
        </Sale>
      ) : null}
      <ImageBox>
        <Image src={image} alt="Product_img" layout="fill" objectFit="cover" />
      </ImageBox>
      <h2 className="p-name">{name}</h2>
      <div className="price-btn">
        <h2 className="p-price">
          <HiOutlineCurrencyBangladeshi />
          {onSell ? (
            <>
              {sellPrice} <br />
              <del>
                <HiOutlineCurrencyBangladeshi />
                {price}
              </del>
            </>
          ) : (
            price
          )}
        </h2>
        {inCart ? (
          <CartBtnGroup>
            <button onClick={() => decreaseCart(props.data)}>
              <BsDashSquareFill />
            </button>
            <h2>{productCount}</h2>
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
        {/* <ProductButton /> */}
      </div>
    </Box>
  );
};

export default ProductBox;

const Box = styled.div`
  margin-top: 30px;
  border: 1px solid #d1d1d1;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  .p-name {
    font-size: 22px;
    font-weight: 600;
    color: #363535;
    margin-top: 24px;
  }
  .price-btn {
    margin-top: ${(props) => (props.onsell ? "15px" : "22px")};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .p-price {
    font-size: 18px;
    font-weight: 600;
    padding-top: 8px;
    color: #ff3667;
    svg {
      position: relative;
      top: -3px;
      margin-right: 3px;
    }
    del {
      font-size: 14px;
    }
  }
`;

const Favourite = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
  height: 35px;
  width: 35px;
  background-color: white;
  border-radius: 3px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: #363535;
    font-size: 25px;
  }
  span {
    height: 100%;
    width: 250px;
    background-color: white;
    color: #363535;
    padding: 4px 10px;
    border-radius: 3px;
    position: absolute;
    top: 0px;
    left: 32px;
    opacity: 0;
    pointer-events: none;
    transition: 0.5s;
    padding-top: 7px;
  }
  &:hover span {
    opacity: 1;
  }
`;

const ImageBox = styled.div`
  position: relative;
  height: 300px;
  img {
    border-radius: 5px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

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
const Sale = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #ff3667;
  z-index: 1;
  padding: 2px 5px;
  border-radius: 5px;
  height: 35px;
  h2 {
    color: white;
    font-size: 18px;
    padding-top: 8px;
  }
`;
