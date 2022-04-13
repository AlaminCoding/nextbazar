import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

const ProductForm = (props) => {
  const [productObj, setProductObj] = useState(props.formData);
  const [discount, setDiscount] = useState(productObj?.onSell || false);
  const [imageChange, setImageChange] = useState(false);
  const [preview, setPreview] = useState(
    productObj?.image ||
      "https://i.ibb.co/HPjXndZ/istockphoto-1133851396-612x612.jpg"
  );
  const [category, setCategory] = useState(productObj?.category);
  const checkInput = (event) => {
    setDiscount(event.target.checked);
  };
  const handleImage = (event) => {
    if (event.target.files[0]) {
      const objectUrl = URL.createObjectURL(event.target.files[0]);
      setPreview(objectUrl);
      setImageChange(true);
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Form>
      <div className="form-left">
        <div className="form-group">
          <label htmlFor="product_name">Name</label>
          <input
            type="text"
            name="product_name"
            defaultValue={productObj?.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            defaultValue={productObj?.description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" defaultValue={productObj?.price} />
          <span>BDT</span>
        </div>
        <div className="form-group form-flex">
          <label htmlFor="discount">Discount</label>
          <input
            type="checkbox"
            name="discount"
            id=""
            onChange={checkInput}
            defaultChecked={productObj?.onSell}
          />
        </div>
        {discount ? (
          <div className="form-group">
            <label htmlFor="sell_price">Discount Price</label>
            <input
              type="number"
              name="sell_price"
              defaultValue={productObj?.sellPrice}
            />
            <span>BDT</span>
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" value={category} onChange={handleCategory}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Vehicles">Vehicels</option>
          </select>
        </div>
        {productObj ? (
          <button className="black-btn">Update</button>
        ) : (
          <button className="black-btn">ADD +</button>
        )}
      </div>
      <div className="form-right">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <div className="image-input">
            <input type="file" onChange={handleImage} accept="image/*" />
            <h2>{imageChange ? "Change Image" : "Choose Image"}</h2>
            <div className="image-panel">
              <div className="image-wrapper">
                <Image
                  src={preview}
                  alt="Product Pic"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ProductForm;

const Form = styled.form`
  display: flex;
  .form-left {
    width: 600px;
    margin-right: 50px;
  }
  .form-right {
  }
  .form-group {
    margin-top: 30px;
    position: relative;
    label,
    input,
    textarea,
    select {
      display: block;
      width: 100%;
      font-weight: 600;
    }
    label {
      font-size: 20px;
    }
    input,
    textarea,
    select {
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
    .image-input {
      position: relative;
      border: 2px solid #363535;
      height: 300px;
      margin-top: 10px;
      border-radius: 3px;
      background-color: #f4f4f4;
      z-index: 1;
      input {
        height: 100%;
        margin: 0;
        opacity: 0;
        cursor: pointer;
      }
      h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: white;
        padding: 10px;
        transform: translate(-50%, -50%);
        font-size: 16px;
        z-index: -1;
        border-radius: 3px;
      }
      .image-panel {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        z-index: -2;
        .image-wrapper {
          position: relative;
          height: 100%;
          width: 100%;
        }
      }
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
  button {
    margin-top: 30px;
  }
`;
