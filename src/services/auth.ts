import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CreateUser, LoginResponse, User } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
      providesTags: ["Auth"],
    }),

    addUser: builder.mutation({
      query: (user: CreateUser) => {
        const userFormData = new FormData();
        userFormData.append("image", user.image);
        userFormData.append("name", user.name);
        userFormData.append("email", user.email);
        userFormData.append("phone", user.phone);
        userFormData.append("password", user.password);

        return {
          url: "/register",
          method: "POST",
          body: userFormData,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    login: builder.mutation<LoginResponse, { email: string; password: string }>({
      query: (data) => {
        return {
          url: "/login",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});
export const { useGetUsersQuery, useAddUserMutation, useLoginMutation } = authApi;