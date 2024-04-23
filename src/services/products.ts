import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse } from "types/types.ts";
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
    getProductsByCategory: builder.query<ProductResponse, { id: string | undefined; page: number }>({
      query: ({ id, page }) => `/products/${id}?page=${page}`,
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductsQuery, useGetProductsByCategoryQuery } = productApi;
