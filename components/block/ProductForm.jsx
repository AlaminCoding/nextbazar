import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

const ProductForm = (props) => {
  const [productObj, setProductObj] = useState(props.formData);
  const [discount, setDiscount] = useState(productObj?.onSell || false);
  const [imageChange, setImageChange] = useState(false);
  const [allCategories, setAllCategories] = useState(null);

  useEffect(async () => {
    let isSubscribed = true; //For clean useEffect after Unmounte
    try {
      const res = await axios.get("http://localhost:8000/category");
      const data = res.data;
      if (isSubscribed) {
        setAllCategories(data);
      }
    } catch (err) {
      console.log("Something Wrong");
    }
    return () => {
      isSubscribed = false;
    };
  });

  const [preview, setPreview] = useState(
    productObj?.image ||
      "https://i.ibb.co/HPjXndZ/istockphoto-1133851396-612x612.jpg"
  );

  const [imgData, setImgData] = useState(null);
  const [category, setCategory] = useState(productObj?.category);
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const checkInput = (event) => {
    setDiscount(event.target.checked);
  };

  const handleImage = (event) => {
    if (event.target.files[0]) {
      setImgData(event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        setPreview(reader.result);
        setImageChange(true);
      };
    }
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const getModelProduct = (data) => {
    const productData = { ...data };
    productData.image = preview;
    productData.rating = 0;
    productData.count = 0;
    productData.sellCount = 0;
    productData.favourite = false;
    productData.active = true;
    productData.sellPrice = discount ? parseInt(productData.sellPrice) : 0;
    productData.price = parseInt(productData.price);

    return productData;
  };

  const AddProductSubmit = async (data) => {
    try {
      console.log(getModelProduct(data));
      const addProductRes = await axios.post(
        "http://localhost:8000/product/addproduct",
        getModelProduct(data)
      );
      router.replace("/admin/products");
    } catch (err) {
      console.log("Somethings Wrong");
    }
  };

  const UpdateProductSubmit = async (data) => {
    try {
      const updateRes = await axios.put(
        `http://localhost:8000/product/update/${productObj._id}`,
        getModelProduct(data)
      );
      router.replace("/admin/products");
    } catch (err) {
      console.log("Somethings Wrong");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(
        productObj ? UpdateProductSubmit : AddProductSubmit
      )}
    >
      <div className="form-left">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            defaultValue={productObj?.name}
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            {...register("description", { required: true })}
            defaultValue={productObj?.description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            defaultValue={productObj?.price}
          />
          <span>BDT</span>
        </div>
        <div className="form-group form-flex">
          <label htmlFor="discount">Discount</label>
          <input
            type="checkbox"
            {...register("onSell")}
            onChange={checkInput}
            defaultChecked={productObj ? productObj.onSell : false}
          />
        </div>
        {discount ? (
          <div className="form-group">
            <label htmlFor="sell_price">Discount Price</label>
            <input
              type="number"
              {...register("sellPrice", { required: discount })}
              defaultValue={productObj?.sellPrice}
            />
            <span>BDT</span>
          </div>
        ) : null}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            {...register("category")}
            value={category}
            onChange={handleCategory}
          >
            <option value="">Select Category</option>
            {allCategories &&
              allCategories.map((element) => (
                <option value={element.name} key={element._id}>
                  {element.name}
                </option>
              ))}
          </select>
        </div>
        {productObj ? (
          <button className="black-btn" type="submit">
            Update
          </button>
        ) : (
          <button className="black-btn" type="submit">
            ADD +
          </button>
        )}
      </div>
      <div className="form-right">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <div className="image-input">
            <input
              type="file"
              {...register("image")}
              onChange={handleImage}
              accept="image/*"
            />
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
