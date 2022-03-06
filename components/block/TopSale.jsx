import { BsArrowRightSquareFill } from "react-icons/bs";
import ProductBox from "components/ui/ProductBox";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
const TopSale = () => {
  const products = useSelector((state) => state.allProduct.products);
  return (
    <section className="custom-container">
      <div className="block">
        <div className="block-header">
          <h2 className="h-md">Top Sale</h2>
          <span className="view-all">
            View All <BsArrowRightSquareFill />
          </span>
        </div>
        <Row>
          {products.map((element) => (
            <Col xl={3} lg={4} md={6} key={element.id}>
              <ProductBox data={element} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default TopSale;
