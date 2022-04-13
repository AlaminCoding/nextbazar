import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userAuth.user);
  // useEffect(() => {
  //   if (!user) {
  //     router.replace("/account/?redirect=/profile/edit_profile");
  //   }
  // });
  return <h2>EditProfile</h2>;
};

export default EditProfile;
