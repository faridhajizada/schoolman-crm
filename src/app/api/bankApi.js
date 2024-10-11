import { baseQuery } from "./api";

export const bankApi = baseQuery.injectEndpoints({
  tagTypes: ["Bank"],
  endpoints: (builder) => ({
    allBank: builder.query({
      query: (page) => ({
        url: `/bank?page=${page}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Bank"],
    }),
    deleteBank: builder.mutation({
      query: (id) => ({
        url: `/bank/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Bank"],
    }),
    updateBank: builder.mutation({
      query: (bank) => ({
        url: `/bank/${bank.id}`,
        method: "PUT",
        body: bank,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Bank"],
    }),
    singleUpdateBank: builder.mutation({
      query: (bank) => ({
        url: `/bank/${bank.id}`,
        method: "PATCH",
        body: bank,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Bank"],
    }),
    createBank: builder.mutation({
      query: (bank) => ({
        url: `/bank`,
        method: "POST",
        body: bank,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Bank"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAllBankQuery,
  useDeleteBankMutation,
  useUpdateBankMutation,
  useSingleUpdateBankMutation,
  useCreateBankMutation,
} = bankApi;
