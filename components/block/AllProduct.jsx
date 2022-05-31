import { BsArrowRightSquareFill } from "react-icons/bs";
import ProductBox from "components/ui/ProductBox";
import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductData } from "utils/slicers/productSlice";

import { useEffect } from "react";
const AllProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProduct.products);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <section className="custom-container">
      <div className="box">
        <div className="box-header">
          <h2 className="h-md">All Products</h2>
          <span className="view-all">
            View All <BsArrowRightSquareFill />
          </span>
        </div>
        <Row>
          {products &&
            products.map((element) => (
              <Col xl={3} lg={4} md={6} key={element._id}>
                <ProductBox data={element} />
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
};

export default AllProduct;
