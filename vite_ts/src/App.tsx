import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  addCartItem,
  getCartItems,
  checkoutItems,
} from "./services/products";
import { ProductListing, ProductEntry, ProductId } from "./types";

const App = () => {
  const [products, setProducts] = useState<ProductListing[]>([]);
  const [cartItems, setCartItems] = useState<ProductListing[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchCartItems = async () => {
      try {
        const data = await getCartItems();
        setCartItems(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
    fetchCartItems();
  }, []);

  const handleSubmitAddProduct = async (
    newProduct: ProductEntry,
    callback?: () => void
  ) => {
    try {
      const data = await createProduct(newProduct);
      setProducts((prevState) => prevState.concat(data));
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitEditProduct = async (
    productId: ProductId,
    updatedProduct: ProductEntry,
    callback?: () => void
  ) => {
    try {
      const data = await updateProduct(productId, updatedProduct);
      setProducts((prevState) =>
        prevState.map((product) => (product._id === data._id ? data : product))
      );
      if (callback) {
        callback();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteProduct = async (productId: ProductId) => {
    try {
      await deleteProduct(productId);
      setProducts((prevState) =>
        prevState.filter((product) => product._id !== productId)
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmitAddCart = async (productId: ProductId) => {
    try {
      const data = await addCartItem(productId);
      setProducts((prevState) =>
        prevState.map((product) => {
          return product._id === data.product._id ? data.product : product;
        })
      );

      if (cartItems.filter((item) => item._id === data.item._id).length) {
        setCartItems((prevState) =>
          prevState.map((item) =>
            item._id === data.item._id ? data.item : item
          )
        );
      } else {
        console.log("I'm adding a new item to cart");
        setCartItems((prevState) => prevState.concat(data.item));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCheckout = async () => {
    try {
      await checkoutItems();
      setCartItems([]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div id="app">
      <Header cartItems={cartItems} onCheckout={handleCheckout} />
      <ProductList
        products={products}
        onSubmitAddProduct={handleSubmitAddProduct}
        onDeleteProduct={handleDeleteProduct}
        onSubmitEditProduct={handleSubmitEditProduct}
        onSubmitAddCart={handleSubmitAddCart}
      />
    </div>
  );
};

export default App;
