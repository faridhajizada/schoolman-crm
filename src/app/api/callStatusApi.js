import { baseQuery } from "./api";

export const callStatusApi = baseQuery.injectEndpoints({
  tagTypes: ["callStatus"],
  endpoints: (builder) => ({
    allCallStatus: builder.query({
      query: (page) => ({
        url: `/call-status?page=${page}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["callStatus"],
    }),

  }),
  overrideExisting: false,
});

export const {
  useAllCallStatusQuery,

} = callStatusApi;
