import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://mrbookingv2.innovixdigital.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  // endpoints: (builder) => ({
  //   login: builder.mutation({
  //     query: (credentials) => ({
  //       url: "api/login",
  //       method: "POST",
  //       body: credentials,
  //       headers: { "Content-Type": "application/json" },
  //     }),
  //   }),
  // }),
  // endpoints: (builder) => ({
  //   getCategories: builder.query({
  //     query: () => ({
  //       url: "/api/categories",
  //       method: "GET",
  //     }),
  //   }),
  // }),
});

export default apiSlice;
