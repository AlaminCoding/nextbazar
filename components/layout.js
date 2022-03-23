import { useSelector } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";
export default function Layout({ children }) {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  const favOpen = useSelector((state) => state.favOpen.showFav);
  return (
    <main>
      <GlobalStyle cartOpen={cartOpen} favOpen={favOpen} />
      {children}
    </main>
  );
}
