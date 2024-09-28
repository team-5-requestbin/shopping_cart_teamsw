import { useState } from "react";
import { ProductListing, ProductEntry, ProductId } from "../../types";

interface EditProductFormProps {
  product: ProductListing;
  onSubmitEditProduct: (
    productId: ProductId,
    updatedProduct: ProductEntry,
    callback?: () => void
  ) => void;
  setIsEditFormShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProductForm = ({
  product,
  onSubmitEditProduct,
  setIsEditFormShown,
}: EditProductFormProps) => {
  const { _id, title, price, quantity } = product;
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
          <label htmlFor="product-name">Product Name</label>
          <input
            type="text"
            id="product-name"
            value={productName}
            aria-label="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            id="product-price"
            value={productPrice}
            aria-label="Product Price"
            onChange={(e) => setProductPrice(+e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="number"
            id="product-quantity"
            value={productQuantity}
            aria-label="Product Quantity"
            onChange={(e) => setProductQuantity(+e.target.value)}
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

interface EditProductButtonProp {
  setIsEditFormShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditProductButton = ({ setIsEditFormShown }: EditProductButtonProp) => {
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

interface ProductProps {
  product: ProductListing;
  onSubmitEditProduct: (
    productId: ProductId,
    updatedProduct: ProductEntry,
    callback?: () => void
  ) => void;
  onDeleteProduct: (productId: ProductId) => void;
  onSubmitAddCart: (productId: ProductId) => void;
}

const Product = ({
  product,
  onSubmitEditProduct,
  onDeleteProduct,
  onSubmitAddCart,
}: ProductProps) => {
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
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.preventDefault();
                onSubmitAddCart(_id);
              }}
            >
              Add to Cart
            </button>
            {isEditFormShown ? null : (
              <EditProductButton setIsEditFormShown={setIsEditFormShown} />
            )}
          </div>
          <button
            className="delete-button"
            onClick={(e) => {
              e.preventDefault();
              onDeleteProduct(_id);
            }}
          >
            <span>X</span>
          </button>
          {isEditFormShown ? (
            <EditProductForm
              product={product}
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
