import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath:"ggg",
    baseQuery: fetchBaseQuery({baseUrl:})
});
