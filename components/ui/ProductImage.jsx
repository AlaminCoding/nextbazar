import styled from "styled-components";
import Image from "next/image";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";
const ProductImage = (props) => {
  const { image, name, onSell, sellPrice, price } = props.data;
  return (
    <CartDetails>
      <div className="cart-img">
        <Image
          src={image}
          layout="fill"
          objectFit="cover"
          alt="Product Image"
        />
      </div>
      <div className="cart-price">
        <h2>{name}</h2>
        <p>
          <HiOutlineCurrencyBangladeshi />
          {onSell ? sellPrice : price}
        </p>
      </div>
    </CartDetails>
  );
};

export default ProductImage;

const CartDetails = styled.div`
  display: flex;
  align-items: center;
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
`;
