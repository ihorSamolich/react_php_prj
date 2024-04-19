import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SpecialOffer } from "types/types.ts";
import { API_URL } from "utils/apiUrl.ts";

export const offersApi = createApi({
  reducerPath: "offersApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api` }),
  tagTypes: ["Offers"],
  endpoints: (builder) => ({
    getSpecialOffers: builder.query<SpecialOffer[], void>({
      query: () => "/specialOffers",
      providesTags: ["Offers"],
    }),
  }),
});
export const { useGetSpecialOffersQuery } = offersApi;
