import styled from "styled-components";
import ProductImage from "./ProductImage";
import { addProduct } from "utils/slicers/productSlice";
import { removeFavourite } from "utils/slicers/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
const FavBoxes = (props) => {
  const products = useSelector((state) => state.allProduct.products);
  const count = () => {
    let index = products.findIndex((element) => element.id === props.data.id);
    return products[index].count;
  };
  const dispatch = useDispatch();
  return (
    <FavBox>
      <ProductImage data={props.data} />
      <div className="action">
        {count() > 0 ? (
          <h2>Added</h2>
        ) : (
          <button
            className="black-btn"
            onClick={() => dispatch(addProduct(props.data))}
          >
            Add To Cart
          </button>
        )}
        <BsTrash onClick={() => dispatch(removeFavourite(props.data))} />
      </div>
    </FavBox>
  );
};

export default FavBoxes;

const FavBox = styled.div`
  padding: 30px 30px 30px 30px;
  border-bottom: 1px solid #d1d1d1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .action {
    display: flex;
    align-items: center;
    h2 {
      font-size: 18px;
      margin-top: 3px;
    }
    svg {
      font-size: 25px;
      margin-left: 50px;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    .action {
      margin-top: 30px;
    }
  }
`;
