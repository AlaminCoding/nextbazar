import styled from "styled-components";
const EditCategory = (props) => {
  return (
    <Edit>
      <h2 className="h-md">CATEGORY EDIT</h2>
      <Form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="username" />
        </div>
        <button className="black-btn">Update</button>
        <button className="black-btn ms-4" onClick={() => props.setEdit(false)}>
          Cancel
        </button>
      </Form>
    </Edit>
  );
};

export default EditCategory;

const Edit = styled.div`
  height: auto;
  width: 400px;
  background-color: white;
  box-shadow: 0px 0px 5px gray;
  padding: 30px 20px;
  border-radius: 5px;
`;
const Form = styled.form`
  .form-group {
    margin-top: 30px;
    position: relative;
    label,
    input {
      display: block;
      width: 100%;
      font-weight: 600;
    }
    label {
      font-size: 16px;
    }
    input {
      height: 45px;
      border: 2px solid #363535;
      margin-top: 10px;
      border-radius: 3px;
      padding-left: 10px;
    }
  }
  button {
    margin-top: 30px;
  }
`;
