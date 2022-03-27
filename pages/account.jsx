import AccountLayout from "components/accountLayout";
import Form from "components/block/Form";

const Account = () => {
  return <Form />;
};

export default Account;

Account.getLayout = function getLayout(Account) {
  return <AccountLayout>{Account}</AccountLayout>;
};
