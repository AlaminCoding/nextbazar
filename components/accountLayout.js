import Navbar from "./ui/Navbar";
import CartSection from "components/block/CartSection";
const AccountLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CartSection />
      <main>{children}</main>
    </>
  );
};

export default AccountLayout;
