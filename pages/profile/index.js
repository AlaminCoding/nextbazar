import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Profile = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userAuth.user);
  // useEffect(() => {
  //   if (!user) {
  //     router.replace("/account/?redirect=/profile");
  //   }
  // });
  return (
    <ProfileDiv>
      {user ? (
        <div className="custom-container">
          <p>Name : {user.username}</p>
          <p>Email : {user.email}</p>
        </div>
      ) : (
        <h2 className="text-center mt-5 h-md">Redirecting.....</h2>
      )}
    </ProfileDiv>
  );
};

export default Profile;

const ProfileDiv = styled.section`
  p {
    font-size: 20px;
    margin-top: 10px;
  }
`;
