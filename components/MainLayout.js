import { useSelector } from "react-redux";
import "react-loading-skeleton/dist/skeleton.css";
import GlobalStyle from "styles/GlobalStyle";
import { useEffect } from "react";
import { RouteGuard } from "./RouteGuard";
const MainLayout = ({ children }) => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const favOpen = useSelector((state) => state.favOpen.showFav);
  const loggedUser = useSelector((state) => state.userAuth.user);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
  });
  return (
    <>
      <GlobalStyle cartOpen={cartOpen} favOpen={favOpen} />
      <RouteGuard>{children}</RouteGuard>
    </>
  );
};

export default MainLayout;
