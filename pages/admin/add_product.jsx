import AdminLayout from "components/adminLayout";
import { useState } from "react";
import styled from "styled-components";
const AddProduct = () => {
  const [discount, setDiscount] = useState(false);
  const checkInput = (event) => {
    setDiscount(event.target.checked);
  };
  return (
    <>
      <h2 className="h-md">Add Product</h2>
      <ProductForm>
        <div className="form-group">
          <label htmlFor="product_name">Name</label>
          <input type="text" name="product_name" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" name="description"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" />
          <span>BDT</span>
        </div>
        <div className="form-group form-flex">
          <label htmlFor="discount">Discount</label>
          <input type="checkbox" name="discount" id="" onChange={checkInput} />
        </div>
        {discount ? (
          <div className="form-group">
            <label htmlFor="sell_price">Discount Price</label>
            <input type="number" name="sell_price" />
            <span>BDT</span>
          </div>
        ) : null}
      </ProductForm>
    </>
  );
};

export default AddProduct;

AddProduct.getLayout = function getLayout(AddProduct) {
  return <AdminLayout>{AddProduct}</AdminLayout>;
};

const ProductForm = styled.form`
  max-width: 600px;
  .form-group {
    margin-top: 30px;
    position: relative;
    label,
    input,
    textarea {
      display: block;
      width: 100%;
      font-weight: 600;
    }
    label {
      font-size: 20px;
    }
    input,
    textarea {
      height: 45px;
      border: 2px solid #363535;
      margin-top: 10px;
      border-radius: 3px;
      padding-left: 10px;
    }
    span {
      position: absolute;
      bottom: 10px;
      right: 2px;
      padding-right: 10px;
      background-color: white;
    }
    textarea {
      height: 100px;
    }
  }
  .form-flex {
    display: flex;
    align-items: center;
    label,
    input {
      width: auto;
    }
    input {
      height: 20px;
      width: 20px;
      margin-top: 0;
      margin-left: 15px;
    }
  }
`;
