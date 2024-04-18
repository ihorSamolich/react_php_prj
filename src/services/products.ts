import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => "/products",
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductsQuery } = productApi;
