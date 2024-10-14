import { baseQuery } from "./api";

export const courseApi = baseQuery.injectEndpoints({
  tagTypes: ["Course"],
  endpoints: (builder) => ({
    course: builder.query({
      query: () => ({
        url: `/course`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Course"],
    }),
    qualification: builder.query({
      query: () => ({
        url: `/Qualification`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Course"],
    }),
  }),
  overrideExisting: false,
});

export const { useCourseQuery, useQualificationQuery } = courseApi;
