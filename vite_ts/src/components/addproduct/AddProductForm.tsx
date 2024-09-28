import { useState } from "react";
import { ProductEntry } from "../../types";

interface AddProductFormProps {
  onSubmitAddProduct: (newProduct: ProductEntry, callback?: () => void) => void;
  setIsAddFormShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProductForm = ({
  onSubmitAddProduct,
  setIsAddFormShown,
}: AddProductFormProps) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const reset = () => {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setIsAddFormShown(false);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitAddProduct(
          {
            title: productName,
            price: +productPrice,
            quantity: +productQuantity,
          },
          reset
        );
      }}
    >
      <div className="input-group">
        <label htmlFor="product-name">Product Name:</label>
        <input
          type="text"
          id="product-name"
          name="product-name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-price">Price:</label>
        <input
          type="number"
          id="product-price"
          name="product-price"
          min="0"
          step="0.01"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="product-quantity">Quantity:</label>
        <input
          type="number"
          id="product-quantity"
          name="product-quantity"
          min="0"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          required
        />
      </div>
      <div className="actions form-actions">
        <button type="submit">Add</button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            reset();
            setIsAddFormShown(false);
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;
