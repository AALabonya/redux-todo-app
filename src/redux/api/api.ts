import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["todo"],
  endpoints: (builder) => ({
    //query holo get korar jonno
    //post korar jonno muation
    getTodos: builder.query({
      query: (priority) => ({
        url: `/tasks?priority=${priority}`,
        method: "GET",
        //better approach
        // params:{priority}
      }),
      providesTags: ["todo"],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log("inside", data);

        return { url: "/task", method: "POST", body: data };
      },
      invalidatesTags: ["todo"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation } = baseApi;
