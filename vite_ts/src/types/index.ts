export interface ProductListing {
  _id: string;
  title: string;
  price: number;
  quantity: number;
}

export type ProductEntry = Omit<ProductListing, "_id">;

export type ProductId = ProductListing["_id"];

export type CartAdd = { product: ProductListing, item: ProductListing };