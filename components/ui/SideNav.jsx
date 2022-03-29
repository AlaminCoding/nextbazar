import Link from "next/link";
import styled from "styled-components";
const SideNav = () => {
  return (
    <SideBar>
      <ul>
        <li>
          <Link href="/admin/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/categories">
            <a>Categories</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </SideBar>
  );
};

export default SideNav;
const SideBar = styled.div`
  height: 100%;
  width: 300px;
  padding-left: 50px;
  background-color: #f4f4f4;
  ul {
    list-style-type: none;
    li {
      margin-bottom: 20px;
    }
  }
`;
