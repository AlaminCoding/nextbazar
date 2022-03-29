import AdminLayout from "components/adminLayout";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
const Categories = () => {
  return (
    <>
      <h2 className="h-md">Add Category</h2>
      <Input>
        <input type="text" placeholder="Enter Category Name" />
        <button className="black-btn">Add</button>
      </Input>
      <CategoryTable>
        <thead>
          <tr>
            <th>
              <b>Name</b>
            </th>
            <th>
              <b>Actions</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <b>Electronics</b>
            </td>
            <td>
              <ActionBox>
                <FaEye title="Hide" />
                <BiEdit title="Edit" />
                <BsTrash title="Delete" />
              </ActionBox>
            </td>
          </tr>
          <tr>
            <td>
              <b>Vehicel</b>
            </td>
            <td>
              <ActionBox>
                <FaEye title="Hide" />
                <BiEdit title="Edit" />
                <BsTrash title="Delete" />
              </ActionBox>
            </td>
          </tr>
        </tbody>
      </CategoryTable>
    </>
  );
};

export default Categories;

Categories.getLayout = function getLayout(Categories) {
  return <AdminLayout>{Categories}</AdminLayout>;
};

const Input = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  input {
    width: 500px;
    height: 43px;
    border: 1px solid #d1d1d1;
    border-radius: 3px;
    margin-right: 20px;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
  }
`;

const CategoryTable = styled.table`
  font-size: 16px;
  margin-top: 30px;
  thead {
    border-bottom: 2px solid black;
  }
  th {
    text-transform: uppercase;
    padding-bottom: 10px;
    &:nth-child(odd) {
      width: 300px;
    }
  }
  td {
    padding: 10px 0px;
  }
  tr {
    &:nth-child(even) {
      background-color: #f4f4f4;
    }
  }
`;

const ActionBox = styled.div`
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
`;
