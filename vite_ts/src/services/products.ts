import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("/api/products");
  return data;
};

export const createProduct = async (newProduct) => {
  const { data } = await axios.post("/api/products", newProduct);
  return data;
};

export const deleteProduct = async (id: string) => {
  const { data } = await axios.delete(`/api/products/${id}`);
  return data;
};

export const updateProduct = async (id: string, product) => {
  const { data } = await axios.put(`/api/products/${id}`, product);
  return data;
};
