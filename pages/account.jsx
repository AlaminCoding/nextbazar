import AccountLayout from "components/accountLayout";
import Form from "components/block/Form";
import Router from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Account = () => {
  const user = useSelector((state) => state.userAuth.user);
  useEffect(() => {
    if (user) {
      Router.replace("/");
    }
  });
  return <Form />;
};

export default Account;

Account.getLayout = function getLayout(Account) {
  return <AccountLayout>{Account}</AccountLayout>;
};
