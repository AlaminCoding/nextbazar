import AdminLayout from "components/adminLayout";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";
import EditUser from "components/block/EditUser";
const Users = () => {
  const [edit, setEdit] = useState(false);
  return (
    <>
      {edit ? (
        <EditWrapper>
          <EditUser setEdit={setEdit} />
        </EditWrapper>
      ) : null}
      <h2 className="h-md">USERS</h2>
      <UserTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purchase</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sabbir</td>
            <td>3000 BDT</td>
            <td>
              <ActionBox>
                <BiEdit title="Edit" onClick={() => setEdit(true)} />
                <BsTrash title="Delete" />
              </ActionBox>
            </td>
          </tr>
          <tr>
            <td>Alamin</td>
            <td>18000 BDT</td>
            <td>
              <ActionBox>
                <BiEdit title="Edit" onClick={() => setEdit(true)} />
                <BsTrash title="Delete" />
              </ActionBox>
            </td>
          </tr>
        </tbody>
      </UserTable>
    </>
  );
};

export default Users;

Users.getLayout = function getLayout(Users) {
  return <AdminLayout>{Users}</AdminLayout>;
};

const UserTable = styled.table`
  width: 600px;
  margin-top: 30px;
  thead {
    border-bottom: 2px solid black;
  }
  th,
  td {
    font-size: 14px;
  }
  th {
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  td {
    padding: 15px 0px;
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
