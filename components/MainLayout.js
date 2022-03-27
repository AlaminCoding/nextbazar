import { useSelector } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";
const MainLayout = ({ children }) => {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const favOpen = useSelector((state) => state.favOpen.showFav);
  return (
    <>
      <GlobalStyle cartOpen={cartOpen} favOpen={favOpen} />
      {children}
    </>
  );
};

export default MainLayout;
