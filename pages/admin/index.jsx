import AdminLayout from "components/adminLayout";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Admin = () => {
  const login = useSelector((state) => state.userAuth.userLogin);
  const router = useRouter();
  if (!login) {
    router.replace("/admin_login");
  }
  return <h2>ADMIN</h2>;
};

export default Admin;

Admin.getLayout = function getLayout(Admin) {
  return <AdminLayout>{Admin}</AdminLayout>;
};
