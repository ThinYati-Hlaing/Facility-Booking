import apiSlice from "../../api/apiSlice";

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: "api/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
