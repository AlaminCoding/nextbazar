import Products from "public/data/products";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";

import ProductBox from "components/ui/ProductBox";
const TopSale = () => {
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
          {Products.map((element) => (
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
