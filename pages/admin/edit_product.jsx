import AdminLayout from "components/adminLayout";

import ProductForm from "components/block/ProductForm";
const EditProduct = () => {
  return (
    <>
      <h2 className="h-md">Edit Product</h2>
      <ProductForm formData={null} />
    </>
  );
};

export default EditProduct;

EditProduct.getLayout = function getLayout(EditProduct) {
  return <AdminLayout>{EditProduct}</AdminLayout>;
};
