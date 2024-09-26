import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./services/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAddFormShown, setIsAddFormShown] = useState(false);
  // const [isEditFormShown, setIsEditFormShown] = useState(false);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmitAddProduct = async (newProduct, callback?) => {
    try {
      const data = await createProduct(newProduct);
      setProducts((prevState) => prevState.concat(data));
      if (callback) {
        callback();
      }
      setIsAddFormShown(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitEditProduct = async (
    productId,
    updatedProduct,
    callback?
  ) => {
    try {
      const data = await updateProduct(productId, updatedProduct);
      fetchProducts();
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await deleteProduct(productId);
      fetchProducts();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header />
      <ProductList
        products={products}
        onSubmitAddProduct={handleSubmitAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onSubmitEditProduct={handleSubmitEditProduct}
        isAddFormShown={isAddFormShown}
        setIsAddFormShown={setIsAddFormShown}
        // isEditFormShown={isEditFormShown}
        // setIsEditFormShown={setIsEditFormShown}
      />
    </div>
  );
};

export default App;
