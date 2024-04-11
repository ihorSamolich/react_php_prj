import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, CreateCategory } from "../types/types.ts";
import { API_URL } from "../utils/apiUrl.ts";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: (category: CreateCategory) => {
        const categoryFormData = new FormData();
        categoryFormData.append("image", category.image);
        categoryFormData.append("name", category.name);
        categoryFormData.append("description", category.description);

        return {
          url: "/categories/create",
          method: "POST",
          body: categoryFormData,
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});
export const { useGetCategoriesQuery, useAddCategoryMutation } = categoryApi;
