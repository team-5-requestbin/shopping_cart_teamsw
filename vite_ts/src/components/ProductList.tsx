import { useState } from "react";
import Product from "./product/Product";
import AddProductForm from "./addproduct/AddProductForm";

const AddProductButton = ({ setAddingNewProduct, addingNewProduct }) => {
  return (
    <button
      className="add-product-button"
      onClick={(e) => {
        e.preventDefault();
        setAddingNewProduct(!addingNewProduct);
      }}
    >
      Add A Product
    </button>
  );
};

const ProductList = ({ products }) => {
  const [addingNewProduct, setAddingNewProduct] = useState(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          // console.log(product);
          return <Product key={product._id} product={product} />;
        })}
      </div>
      {addingNewProduct ? (
        <AddProductForm />
      ) : (
        <AddProductButton
          setAddingNewProduct={setAddingNewProduct}
          addingNewProduct={addingNewProduct}
        />
      )}
    </main>
  );
};

export default ProductList;
