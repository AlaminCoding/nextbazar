import { useSelector } from "react-redux";
import GlobalStyle from "styles/GlobalStyle";
export default function Layout({ children }) {
  const cartOpen = useSelector((state) => state.cartOpen.showCart);
  return (
    <main>
      <GlobalStyle cartOpen={cartOpen} />
      {children}
    </main>
  );
}
