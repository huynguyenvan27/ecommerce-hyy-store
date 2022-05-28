import { createApi } from "@reduxjs/toolkit/query/react";
import { userBaseQuery } from "./baseUrl.service";

const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: userBaseQuery,
    endpoints: (builder) => ({
        login : builder.mutation({
            query : (user) => {
                return {
                    url : "login",
                    method : "POST",
                    body : user,
                }
            }
        }),       
        logup : builder.mutation({
            query : (user) => {
                return {
                    url : "register",
                    method : "POST",
                    body : user,
                }
            }
        }),
        getUser: builder.query({
            query: () => `me`,
          }),
    }),
});

export default userApi;
export const {useLoginMutation,useLogupMutation,useGetUserQuery} = userApi;
