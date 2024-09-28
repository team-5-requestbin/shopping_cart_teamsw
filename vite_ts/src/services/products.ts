import axios from "axios";
import { CartAdd, ProductEntry, ProductId, ProductListing } from "../types";
// import { z } from "zod";

// const productSchema = z.object({
//   _id: z.string(),
//   title: z.string(),
//   price: z.number(),
//   quantity: z.number(),
//   createdAt: z.string(),
//   updatedAt: z.string(),
//   __v: z.number()
// });



export const getProducts = async () => {
  const { data } = await axios.get<ProductListing[]>("/api/products");
  return data;
};

export const createProduct = async (newProduct: ProductEntry) => {
  const { data } = await axios.post<ProductListing>("/api/products", newProduct);
  return data;
};

export const deleteProduct = async (id: ProductId) => {
  await axios.delete<void>(`/api/products/${id}`);
  // return data;
};

export const updateProduct = async (id: ProductId, product: ProductEntry) => {
  const { data } = await axios.put<ProductListing>(`/api/products/${id}`, product);
  return data;
};

export const addCartItem = async (id: ProductId) => {
  const { data } = await axios.post<CartAdd>("/api/add-to-cart", { productId: id });
  return data;
};

export const getCartItems = async () => {
  const { data } = await axios.get<ProductListing[]>(`/api/cart`);
  return data;
};

export const checkoutItems = async () => {
  await axios.post<void>("/api/checkout");
  // return data;
};