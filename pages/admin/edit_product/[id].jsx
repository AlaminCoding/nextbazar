import axios from "axios";
import AdminLayout from "components/adminLayout";
import ProductForm from "components/block/ProductForm";

export async function getServerSideProps(context) {
  const id = context.params.id;
  const res = await axios.get(`http://localhost:8000/product/${id}`);
  const data = res.data;
  // Pass data to the function via props
  return { props: { data } };
}

const EditProduct = ({ data }) => {
  return (
    <>
      <h2 className="h-md">Edit Product</h2>
      <ProductForm formData={data} />
    </>
  );
};

export default EditProduct;

EditProduct.getLayout = function getLayout(EditProduct) {
  return <AdminLayout>{EditProduct}</AdminLayout>;
};
