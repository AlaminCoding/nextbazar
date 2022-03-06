import styled from "styled-components";
import Image from "next/image";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
import ProductButton from "components/ui/ProductButton";

const CartBoxes = (props) => {
  const { image, name, onSell, sellPrice, price, count } = props.data;
  const totalPrice = count * (onSell ? sellPrice : price);
  return (
    <CartBox>
      <div className="cart-details">
        <div className="cart-img">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="cart-price">
          <h2>{name}</h2>
          <p>
            <HiOutlineCurrencyBangladeshi />
            {onSell ? sellPrice : price}
          </p>
        </div>
      </div>
      <div className="cart-price-quantity">
        <ProductButton data={props.data} local={false} />
        <h2 className="heading">Quantity : {count}</h2>
        <h2 className="heading">Total Price : {totalPrice}</h2>
      </div>
    </CartBox>
  );
};

export default CartBoxes;

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
  .cart-price-quantity {
    display: flex;
    align-items: center;
    .heading {
      font-size: 18px;
      padding-top: 5px;
      margin-left: 50%;
    }
  }
`;
