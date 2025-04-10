import { AUTH_URL } from "../constant/userConstant.ts";
import { apiSlices } from "./api.ts";

export const userApiSlices = apiSlices.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/login`,
                method: "POST",
                body: data
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/register`,
                method: "POST",
                body: data
            })
        })
    })
});

export const { useLoginMutation, useRegisterMutation } = userApiSlices;