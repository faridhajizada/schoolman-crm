import { baseQuery } from "./api";

export const courseApi = baseQuery.injectEndpoints({
  tagTypes: ["Course"],
  endpoints: (builder) => ({
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
    course: builder.query({
      query: (id) => ({
        url: `/course`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Course"],
    }),
    courseLevel: builder.query({
      query: (id) => ({
        url: `/CourseLevel`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Course"],
    }),

    courseList: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: `/Group?pageNumber=${pageNumber}&pageSize=${pageSize}`,
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

export const {
  useQualificationQuery,
  useCourseQuery,
  useCourseLevelQuery,
  useCourseListQuery,
} = courseApi;
