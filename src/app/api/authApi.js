import { baseQuery } from "./api";

export const authApi = baseQuery.injectEndpoints({
  tagTypes: ["User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        user,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: user,
        invalidatesTags: ["User"],
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = authApi;
