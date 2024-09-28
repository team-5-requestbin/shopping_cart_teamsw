import { useState } from "react";
import Product from "./product/Product";
import AddProductForm from "./addproduct/AddProductForm";
import { ProductListing, ProductEntry, ProductId } from "../types";

interface ProductListProps {
  products: ProductListing[];
  onSubmitAddProduct: (newProduct: ProductEntry, callback?: () => void) => void;
  onSubmitEditProduct: (
    productId: ProductId,
    updatedProduct: ProductEntry,
    callback?: () => void
  ) => void;
  onDeleteProduct: (productId: ProductId) => void;
  onSubmitAddCart: (productId: ProductId) => void;
}

interface AddProductButtonProps {
  setIsAddFormShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProductButton = ({ setIsAddFormShown }: AddProductButtonProps) => {
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
  onSubmitAddCart,
}: ProductListProps) => {
  const [isAddFormShown, setIsAddFormShown] = useState(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          // console.log(product._id);
          return (
            <Product
              key={product._id}
              product={product}
              onSubmitEditProduct={onSubmitEditProduct}
              onDeleteProduct={onDeleteProduct}
              onSubmitAddCart={onSubmitAddCart}
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
