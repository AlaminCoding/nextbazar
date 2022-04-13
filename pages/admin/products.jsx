import AdminLayout from "components/adminLayout";
import products from "public/data/products";
import styled from "styled-components";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(async () => {
    try {
      const res = await axios.get("http://localhost:8000/product");
      setAllProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <>
      <ProductHeader>
        <Link href="/admin/add_product">
          <a className="black-btn"> Add Product</a>
        </Link>
      </ProductHeader>
      <ProductTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Sell Price</th>
            <th>Discount</th>
            <th>Sell</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((element) => (
            <tr key={element._id}>
              <td>
                <div className="product-name">
                  <div className="product-img">
                    <Image
                      src={element.image}
                      alt="product image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <b>{element.name}</b>
                </div>
              </td>
              <td>
                <b>{element.category}</b>
              </td>
              <td>
                <b>{element.price}</b>
              </td>
              <td>
                <b>{element.sellPrice ? element.sellPrice : "---"}</b>
              </td>
              <td>
                <b>
                  {element.sellPrice
                    ? ((element.price - element.sellPrice) / element.price) *
                        100 +
                      "%"
                    : "---"}
                </b>
              </td>
              <td>
                <b>{element.sellCount}</b>
              </td>
              <td>
                <div className="action-box">
                  <FaEye title="Hide" />
                  <Link href={"/admin/edit_product/" + element._id}>
                    <a>
                      <BiEdit title="Edit" />
                    </a>
                  </Link>

                  <BsTrash title="Delete" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </>
  );
};

export default Products;

Products.getLayout = function getLayout(Products) {
  return <AdminLayout>{Products}</AdminLayout>;
};

const ProductHeader = styled.div``;
const ProductTable = styled.table`
  margin-top: 30px;
  width: 100%;
  thead {
    border-bottom: 2px solid black;
  }
  tr {
    th {
      padding-bottom: 10px;
      text-transform: uppercase;
      font-size: 14px;
    }
    td {
      padding: 15px 0px;
      b {
        font-size: 14px;
      }
      .product-name {
        display: flex;
        align-items: center;
      }
      .product-img {
        position: relative;
        height: 40px;
        width: 50px;
        margin-right: 10px;
      }
      .action-box {
        display: flex;
        align-items: center;
        svg {
          font-size: 20px;
          margin-right: 10px;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            opacity: 0.5;
          }
        }
      }
    }
    &:nth-child(even) {
      background-color: #f4f4f4;
    }
  }
`;
