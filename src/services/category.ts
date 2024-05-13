import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, CategoryNames, CategoryResponse, CreateCategory, EditCategory } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  // baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
        return headers;
      }
    },
  }),

  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryResponse, { page: number; search: string }>({
      query: ({ page, search }) => `/categories?page=${page}&search=${search}`,
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query: (id) => `/categories/${id}`,
      providesTags: (_result, _error, arg) => [{ type: "Category", id: arg }],
    }),

    getCategoryNames: builder.query<CategoryNames[], void>({
      query: () => `/categories/names`,
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

    editCategory: builder.mutation({
      query: ({ id, category }: { id: number; category: EditCategory }) => {
        const categoryFormData = new FormData();
        if (category.image) {
          categoryFormData.append("image", category.image);
        }
        categoryFormData.append("name", category.name);
        categoryFormData.append("description", category.description);

        return {
          url: `/categories/edit/${id}`,
          method: "POST",
          body: categoryFormData,
        };
      },
      invalidatesTags: (_result, _error, arg) => [{ type: "Category", id: arg.id }, "Category"],
    }),

    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});
export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoryNamesQuery,
} = categoryApi;
