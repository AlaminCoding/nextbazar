import AdminLayout from "components/adminLayout";

const Dashboard = () => {
  return <h2>DashBoard</h2>;
};

export default Dashboard;

Dashboard.getLayout = function getLayout(Dashboard) {
  return <AdminLayout>{Dashboard}</AdminLayout>;
};
