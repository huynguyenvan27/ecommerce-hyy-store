import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../services/user.service";


const initialState = {
    user: null,
  };
  
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      logout: (state) => {
        state.user = null;
        localStorage.removeItem("token")
      },
    },
    extraReducers: (builder) => {
      builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem("token",action.payload.token)
      });
    },
});

export default userSlice.reducer;
export const { logout  } = userSlice.actions;
export const selectUser = (state) => state.user.user;
