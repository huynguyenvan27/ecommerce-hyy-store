import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../services/user.service";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            userApi.endpoints.signin.matchFulfilled,
            (state, action) => {
                const token =
                    action.meta.baseQueryMeta.response.headers.get(
                        "Authorization"
                    );

                return {
                    ...action.payload.data,
                    token,
                };
            }
        );
    },
});

export default userSlice.reducer;

export const selectUser = (state) => state.user;
