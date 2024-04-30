import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse, ProductWithDiscount } from "types/types.ts";
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
    getProductsDiscounts: builder.query<ProductWithDiscount[], void>({
      query: () => "/products/discounts",
    }),
    getProductsByCategory: builder.query<ProductResponse, { id: string | undefined; page: number }>({
      query: ({ id, page }) => `/products/${id}?page=${page}`,
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductsQuery, useGetProductsDiscountsQuery, useGetProductsByCategoryQuery } =
  productApi;
