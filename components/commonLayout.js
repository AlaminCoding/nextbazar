import Navbar from "./ui/Navbar";
import SidePanel from "components/ui/SidePanel";
import CartSection from "components/block/CartSection";
import FavSection from "components/block/FavSection";

export default function CommonLayout({ children }) {
  return (
    <>
      <Navbar />
      <CartSection />
      <FavSection />
      <SidePanel cart={true} />
      <SidePanel cart={false} />
      <main>{children}</main>
    </>
  );
}
