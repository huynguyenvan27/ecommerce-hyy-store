import { createApi } from "@reduxjs/toolkit/query/react";
import { userBaseQuery } from "./baseUrl.service";

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: userBaseQuery,
    endpoints: (builder) => ({
        signin: builder.mutation({
            query: (user) => {
                return {
                    url: "signin",
                    method: "POST",
                    body: user,
                };
            },
        }),
    }),
});

export default userApi;
export const { useSigninMutation } = userApi;
