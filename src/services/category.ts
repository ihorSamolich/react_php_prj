import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, CreateCategory, EditCategory } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/categories",
      providesTags: ["Category"],
    }),

    getCategory: builder.query<Category, number>({
      query: (id) => `/categories/${id}`,
    }),

    addCategory: builder.mutation({
      query: (category: CreateCategory) => {
        const categoryFormData = new FormData();
        categoryFormData.append("image", category.image);
        categoryFormData.append("name", category.name);
        categoryFormData.append("description", category.description);

        console.log(categoryFormData.get("image"));

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
      invalidatesTags: ["Category"],
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
} = categoryApi;
