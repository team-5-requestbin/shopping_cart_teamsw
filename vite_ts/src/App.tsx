import { useState, useEffect } from "react";
import { mockProducts } from "./mockData/data";

const Header = () => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>
          Checkout
        </button>
      </div>
    </header>
  );
};

const Product = ({ product }) => {
  const { title, price, quantity } = product;

  return (
    <ul className="product-list">
      <li className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <div className="actions product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="edit">Edit</button>
          </div>
          <button className="delete-button">
            <span>X</span>
          </button>
        </div>
      </li>
    </ul>
  );
};

const Products = ({ products }) => {
  return (
    <main>
      <div className="product-listing">
        <h2>Products</h2>
        {products.map((product) => {
          // console.log(product);
          return <Product key={product._id} product={product} />;
        })}
      </div>
      <p>
        <button className="add-product-button">Add A Product</button>
      </p>
    </main>
  );
};

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  console.log(products);

  return (
    <div id="app">
      <Header />
      <Products products={products} />
    </div>
  );
};

export default App;
