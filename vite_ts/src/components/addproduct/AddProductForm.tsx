import { useState } from "react";

const AddProductForm = ({ onSubmitAddProduct, setIsAddFormShown }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number | string>("");
  const [productQuantity, setProductQuantity] = useState<number | string>("");

  const handleAddPrice = (e: React.SyntheticEvent) => {
    const parsedPrice = +e.target.value;
    setProductPrice(isNaN(parsedPrice) ? "" : parsedPrice);
  };
  const handleAddQuantity = (e: React.SyntheticEvent) => {
    const parsedQuantity = +e.target.value;
    setProductQuantity(isNaN(parsedQuantity) ? "" : parsedQuantity);
  };

  const reset = () => {
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitAddProduct(
          {
            title: productName,
            price: productPrice,
            quantity: productQuantity,
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
          onChange={handleAddPrice}
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
          onChange={handleAddQuantity}
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
