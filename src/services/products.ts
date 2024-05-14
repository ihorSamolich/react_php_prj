import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateProduct, Product, ProductResponse, ProductWithDiscount } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),

    getProduct: builder.query<Product, number>({
      query: (id) => `/product/${id}`,
    }),

    getProductsDiscounts: builder.query<ProductWithDiscount[], void>({
      query: () => "/products/discounts",
    }),

    getProductsByCategory: builder.query<ProductResponse, { id: string | undefined; page: number }>({
      query: ({ id, page }) => `/products/${id}?page=${page}`,
      providesTags: ["Product"],
    }),

    addProduct: builder.mutation({
      query: (product: CreateProduct) => {
        const productFormData = new FormData();
        productFormData.append("name", product.name);
        productFormData.append("description", product.description);
        productFormData.append("price", product.price);
        productFormData.append("category_id", product.category_id.toString());

        if (product.product_images) {
          Array.from(product.product_images).forEach((image) =>
            productFormData.append("product_images[]", image),
          );
        }

        return {
          url: "/products/create",
          method: "POST",
          body: productFormData,
        };
      },
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetProductQuery,
  useAddProductMutation,
  useGetProductsDiscountsQuery,
  useGetProductsByCategoryQuery,
} = productApi;
