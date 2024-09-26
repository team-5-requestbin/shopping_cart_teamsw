import { useState } from "react";
import Product from "./product/Product";
import AddProductForm from "./addproduct/AddProductForm";

const AddProductButton = ({ setIsAddFormShown }) => {
  return (
    <button
      className="add-product-button"
      onClick={(e) => {
        e.preventDefault();
        setIsAddFormShown(true);
      }}
    >
      Add A Product
    </button>
  );
};

const ProductList = ({
  products,
  onSubmitAddProduct,
  onSubmitEditProduct,
  onDeleteProduct,
}) => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          return (
            <Product
              key={product._id}
              product={product}
              onSubmitEditProduct={onSubmitEditProduct}
              onDeleteProduct={onDeleteProduct}
            />
          );
        })}
      </div>
      {isAddFormShown ? (
        <AddProductForm
          onSubmitAddProduct={onSubmitAddProduct}
          setIsAddFormShown={setIsAddFormShown}
        />
      ) : (
        <AddProductButton setIsAddFormShown={setIsAddFormShown} />
      )}
    </main>
  );
};

export default ProductList;
