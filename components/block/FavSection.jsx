import styled, { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { closeFav } from "utils/slicers/favOpenSlice";
import { openCart } from "utils/slicers/cartOpenSlice";
import { AiOutlineClose } from "react-icons/ai";
import FavBoxes from "components/ui/FavBoxes";

const FavSection = () => {
  const cartProducts = useSelector((state) => state.allProduct.cart);
  const favProducts = useSelector((state) => state.allProduct.favouriteCart);
  const favOpen = useSelector((state) => state.favOpen.showFav);
  const dispatch = useDispatch();

  const closeFavOpencart = () => {
    dispatch(closeFav());
    dispatch(openCart());
  };

  return (
    <FavBlock open={favOpen}>
      <div className="block-header">
        <h2 className="h-md">
          {favProducts.length > 0
            ? "Favourite Products"
            : "You have no favourite product"}
        </h2>
        <AiOutlineClose
          onClick={() => dispatch(closeFav())}
          className="close-btn"
        />
      </div>
      <div className="fav-block">
        {favProducts.map((element) => (
          <FavBoxes data={element} />
        ))}
      </div>
      <div className="block-footer">
        {cartProducts.length > 0 ? (
          <button className="black-btn" onClick={() => closeFavOpencart()}>
            Cart {cartProducts.length} | Go To Cart
          </button>
        ) : null}
      </div>
    </FavBlock>
  );
};

export default FavSection;

const FavBlock = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.98);
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
  transition: 0.5s;
  .fav-block {
    height: 80vh;
    width: 60%;
    background-color: white;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    overflow-y: scroll;
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
  .block-header {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  .block-footer {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }
  @media screen and (max-width: 1045px) {
    .fav-block {
      width: 90%;
    }
    .block-header {
      width: 90%;
    }
    .block-footer {
      width: 90%;
    }
  }
`;
