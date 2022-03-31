import Link from "next/link";
import styled from "styled-components";
import { MdDashboard } from "react-icons/md";
import { GiApothecary, GiBarbute } from "react-icons/gi";
import { BiSelection } from "react-icons/bi";
const SideNav = () => {
  return (
    <SideBar>
      <ul>
        <li>
          <Link href="/admin/dashboard">
            <a>
              <MdDashboard /> Dashboard
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/products">
            <a>
              <GiApothecary /> Products
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/categories">
            <a>
              <BiSelection /> Categories
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/users">
            <a>
              <GiBarbute /> Users
            </a>
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
      a {
        display: flex;
        align-items: center;
        svg {
          position: relative;
          top: -2px;
          margin-right: 5px;
        }
      }
    }
  }
`;
