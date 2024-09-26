import { useState } from "react";

const EditProductForm = ({
  _id,
  title,
  price,
  quantity,
  onSubmitEditProduct,
  setIsEditFormShown,
}) => {
  const [productName, setProductName] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const hideEditForm = () => {
    setIsEditFormShown(false);
  };

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitEditProduct(
            _id,
            {
              title: productName,
              price: productPrice,
              quantity: productQuantity,
            },
            hideEditForm
          );
        }}
      >
        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            aria-label="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            aria-label="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={productQuantity}
            aria-label="Product Quantity"
            onChange={(e) => setProductQuantity(e.target.value)}
          />
        </div>

        <div className="actions form-actions">
          <button type="submit">Update</button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditFormShown(false);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const EditProductButton = ({ setIsEditFormShown }) => {
  return (
    <button
      className="edit"
      onClick={(e) => {
        e.preventDefault();
        setIsEditFormShown(true);
      }}
    >
      Edit
    </button>
  );
};

const Product = ({
  product,
  onDeleteProduct,
  onSubmitEditProduct,
  // isEditFormShown,
}) => {
  const { _id, title, price, quantity } = product;
  const [isEditFormShown, setIsEditFormShown] = useState(false);

  return (
    <ul className="product-list">
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">${price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            {isEditFormShown ? null : (
              <EditProductButton setIsEditFormShown={setIsEditFormShown} />
            )}
          </div>
          <button
            className="delete-button"
            onClick={(e) => {
              e.preventDefault();
              console.log(_id);
              onDeleteProduct(_id);
            }}
          >
            <span>X</span>
          </button>
          {isEditFormShown ? (
            <EditProductForm
              {...product}
              onSubmitEditProduct={onSubmitEditProduct}
              setIsEditFormShown={setIsEditFormShown}
            />
          ) : null}
        </div>
      </li>
    </ul>
  );
};

export default Product;
