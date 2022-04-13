import AdminLayout from "components/adminLayout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  return <h2>ADMIN</h2>;
};

export default Admin;

Admin.getLayout = function getLayout(Admin) {
  return <AdminLayout>{Admin}</AdminLayout>;
};
