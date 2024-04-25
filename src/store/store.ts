import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "services/auth.ts";
import { categoryApi } from "services/category.ts";
import { offersApi } from "services/offers.ts";
import { productApi } from "services/products.ts";

export const store = configureStore({
  reducer: {
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [offersApi.reducerPath]: offersApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoryApi.middleware,
      productApi.middleware,
      offersApi.middleware,
      authApi.middleware,
    ),
});

setupListeners(store.dispatch);
