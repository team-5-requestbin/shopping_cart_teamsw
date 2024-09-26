import Product from "./product/Product";
import AddProductForm from "./addproduct/AddProductForm";

const AddProductButton = ({ setAddingNewProduct }) => {
  return (
    <button
      className="add-product-button"
      onClick={(e) => {
        e.preventDefault();
        setAddingNewProduct(true);
      }}
    >
      Add A Product
    </button>
  );
};

const ProductList = ({
  products,
  onSubmitAddProduct,
  onDeleteProduct,
  isAddFormShown,
  setIsAddFormShown,
  onSubmitEditProduct,
  // isEditFormShown,
  // setIsEditFormShown,
}) => {
  // const [addingNewProduct, setAddingNewProduct] = useState(false);

  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          // console.log(product);
          return (
            <Product
              key={product._id}
              product={product}
              onDeleteProduct={onDeleteProduct}
              onSubmitEditProduct={onSubmitEditProduct}
              // isEditFormShown={isEditFormShown}
              // setIsEditFormShown={setIsEditFormShown}
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
        <AddProductButton setAddingNewProduct={setIsAddFormShown} />
      )}
    </main>
  );
};

export default ProductList;
