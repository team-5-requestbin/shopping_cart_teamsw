import axios from "axios";
import { ProductEntry, ProductId } from "../types";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const createProduct = async (newProduct: ProductEntry) => {
  const { data } = await axios.post("/api/products", newProduct);
  return data;
};

export const deleteProduct = async (id: ProductId) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
};

export const updateProduct = async (id: ProductId, product: ProductEntry) => {
  const { data } = await axios.put(`/api/products/${id}`, product);
  return data;
};

export const addCartItem = async (id: ProductId) => {
  const { data } = await axios.post("/api/add-to-cart", { productId: id });
  return data;
};

export const getCartItems = async () => {
  const { data } = await axios.get(`/api/cart`);
  return data;
};

export const checkoutItems = async () => {
  const { data } = await axios.post("/api/checkout");
  return data;
};
// ## 1.5. GET /api/cart

// Get cart Items

// ### 1.5.1. Expected Payload

// None

// ### 1.5.2. Successful Response

// The cart items are returned in JSON format.

// #### 1.5.2.1. Example Response

// ```json
// [
//   {
//     "_id": "545454f72092473d55a809e1",
//     "title": "Kindle",
//     "price": 50,
//     "quantity": 1,
//     "productId": "61d754d72092473d55a809e1",
//     "createdAt": "2020-10-04T05:57:02.777Z",
//     "updatedAt": "2020-10-04T05:57:02.777Z",
//     "_v": 0
//   },
//   {
//     "_id": "51d754d72092473333a809e1",
//     "title": "Mac Mini",
//     "price": 850,
//     "quantity": 2,
//     "productId": "51d754d72092473333a809e1",
//     "createdAt": "2020-10-04T05:57:02.777Z",
//     "updatedAt": "2020-10-04T05:57:02.777Z",
//     "_v": 0
//   }
// ]
// ```

// ## 1.6. POST /api/checkout

// Removes items from the cart

// ### 1.6.1. Expected Payload

// None

// ### 1.6.2. Successful Response

// Empty json body

// #### 1.6.2.1. Example Response

// ```json

// ```
