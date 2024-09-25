import { useState } from "react";

const EditProductForm = ({ title, price, quantity }) => {
  const [productName, setProductName] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(quantity);

  return (
    <div className="edit-form">
      <h3>Edit Product</h3>
      <form>
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
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

const EditProductButton = ({ setEditingProduct, editingProduct }) => {
  return (
    <button
      className="edit"
      onClick={(e) => {
        e.preventDefault();
        setEditingProduct(!editingProduct);
      }}
    >
      Edit
    </button>
  );
};

const Product = ({ product }) => {
  const { title, price, quantity } = product;
  const [editingProduct, setEditingProduct] = useState(false);

  return (
    <ul className="product-list">
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            {editingProduct ? null : (
              <EditProductButton
                setEditingProduct={setEditingProduct}
                editingProduct={editingProduct}
              />
            )}
          </div>
          <button className="delete-button">
            <span>X</span>
          </button>
          {editingProduct ? <EditProductForm {...product} /> : null}
        </div>
      </li>
    </ul>
  );
};

export default Product;
