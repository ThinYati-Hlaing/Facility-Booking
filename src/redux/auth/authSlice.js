import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../services/endpoints/auth.api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    isAuthenticated: false,
  },
  reducers: {
    // login: (state, action) => {
    //   state.accessToken = action?.payload?.data?.token;
    //   state.isAuthenticated = !!action?.payload?.data?.token;
    // },
    // login: (state, action) => {
    //   state.accessToken = action.payload.accessToken;
    //   state.isAuthenticated = true;
    // },
    // logout: (state) => {
    //   state.accessToken = null;
    //   state.isAuthenticated = false;
    // },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action) => {
        if (action.payload) {
          state.accessToken = action?.payload?.data?.token;
          state.isAuthenticated = !!action?.payload?.data?.token;
        }
      }
    );
  },
});

export default authSlice.reducer;
