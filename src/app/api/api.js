import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const ulr = import.meta.env.VITE_APP_MAIN_URL;
export const baseQuery = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${ulr}` }),
  endpoints: () => ({}),
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${localStorage.getItem("token")}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
