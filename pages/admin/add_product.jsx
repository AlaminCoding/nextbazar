import AdminLayout from "components/adminLayout";
import ProductForm from "components/block/ProductForm";
const AddProduct = () => {
  return (
    <>
      <h2 className="h-md">Add Product</h2>
      <ProductForm formData={null} />
    </>
  );
};

export default AddProduct;

AddProduct.getLayout = function getLayout(AddProduct) {
  return <AdminLayout>{AddProduct}</AdminLayout>;
};
