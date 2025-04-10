// import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../constant/constant.ts";
import { RootState } from "../store.ts"

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        const token = state.auth.userInfo.user.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlices = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: () => ({}),
})