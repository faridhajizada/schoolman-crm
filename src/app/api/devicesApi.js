import { baseQuery } from "./api";

export const authApi = baseQuery.injectEndpoints({
  tagTypes: ["Devices"],
  endpoints: (builder) => ({
    allDevices: builder.query({
      query: (page) => ({
        url: `/medical-devices?page=${page}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Devices"],
    }),
    deleteDevice: builder.mutation({
      query: (id) => ({
        url: `/medical-devices/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Devices"],
    }),
    updateDevice: builder.mutation({
      query: (device) => ({
        url: `/medical-devices/${device.id}`,
        method: "PUT",
        body: device,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Devices"],
    }),
    singleUpdateDevice: builder.mutation({
      query: (device) => ({
        url: `/medical-devices/${device.id}`,
        method: "PATCH",
        body: device,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Devices"],
    }),
    createDevice: builder.mutation({
      query: (device) => ({
        url: `/medical-devices`,
        method: "POST",
        body: device,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Devices"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useAllDevicesQuery,
  useDeleteDeviceMutation,
  useUpdateDeviceMutation,
  useSingleUpdateDeviceMutation,
  useCreateDeviceMutation,
} = authApi;
