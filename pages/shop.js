import { useSelector } from "react-redux";
export default function Shop() {
  const user = useSelector((state) => state.userAuth.user);
  return <>{user ? <h2>SHOP</h2> : null}</>;
}
