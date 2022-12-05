import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "apiSlice", //1
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3009",
  }),
  tagTypes: ["Books"],
  endpoints: ({ mutation, query }) => ({
    getBooks: query({ query: () => "/books", providesTags: ["Books"] }),
    addBook: mutation({
      query: (body) => ({
        url: `/books`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: `DELETE`,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});
export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useReadBookMutation,
} = apiSlice;
