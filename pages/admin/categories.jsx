import AdminLayout from "components/adminLayout";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import EditCategory from "components/block/EditCategory";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:8000/category");
  const data = res.data;
  return {
    props: { data },
  };
}

const Categories = ({ data }) => {
  const [categories, setCategories] = useState(data);
  const [edit, setEdit] = useState(false);
  const [updateCategory, setUpdateCategory] = useState(null);
  const {
    handleSubmit,
    register,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm({ defaultValues: { name: "" } });

  const setCategory = async () => {
    const res = await axios.get("http://localhost:8000/category");
    setCategories(res.data);
  };

  useEffect(() => {
    setCategory();
  }, []);

  const AddCategory = async (data) => {
    try {
      const categoryRes = await axios.post(
        "http://localhost:8000/category/addcategory",
        data
      );
      const res = await axios.get("http://localhost:8000/category");
      setCategories(res.data);
      reset();
    } catch (err) {
      console.log("Jhamlea Ache");
    }
  };

  const DeleteCategory = async (id) => {
    try {
      const categoryDelete = await axios.delete(
        `http://localhost:8000/category/delete/${id}`
      );
      setCategory();
    } catch (err) {
      console.log("Jhamela Ache");
    }
  };

  const UpdateCategory = async (element) => {
    setEdit(true);
    setUpdateCategory(element);
  };

  return (
    <>
      {edit ? (
        <EditWrapper>
          <EditCategory
            setEdit={setEdit}
            updateCategory={updateCategory}
            setCategory={setCategory}
          />
        </EditWrapper>
      ) : null}
      <h2 className="h-md">Add Category</h2>
      <Input onSubmit={handleSubmit(AddCategory)}>
        <input
          type="text"
          {...register("name")}
          placeholder="Enter Category Name"
        />
        <button className="black-btn" type="submit">
          Add
        </button>
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
          {categories.map((element) => (
            <tr key={element._id}>
              <td>
                <b>{element.name}</b>
              </td>
              <td>
                <ActionBox>
                  <BiEdit
                    title="Edit"
                    onClick={() => UpdateCategory(element)}
                  />
                  <BsTrash
                    title="Delete"
                    onClick={() => DeleteCategory(element._id)}
                  />
                </ActionBox>
              </td>
            </tr>
          ))}
        </tbody>
      </CategoryTable>
    </>
  );
};

export default Categories;

Categories.getLayout = function getLayout(Categories) {
  return <AdminLayout>{Categories}</AdminLayout>;
};

const Input = styled.form`
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
const EditWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;
