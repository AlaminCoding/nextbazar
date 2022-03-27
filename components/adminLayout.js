import AdminNavbar from "components/ui/AdminNavbar";
import SideNav from "components/ui/SideNav";
import styled from "styled-components";
const AdminLayout = ({ children }) => {
  return (
    <>
      <AdminNavbar />

      <Main>
        <SideNav />
        <MainPanel>{children}</MainPanel>
      </Main>
    </>
  );
};

export default AdminLayout;

const Main = styled.section`
  height: 91vh;
  display: flex;
`;
const MainPanel = styled.div`
  height: 100%;
  flex: 1;
  overflow-y: scroll;
  padding: 30px;
`;
