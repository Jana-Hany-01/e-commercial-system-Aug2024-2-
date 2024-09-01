import { createSlice } from "@reduxjs/toolkit";

let initialState = { id: 0, auth: false, accessToken: "" };

const AuthenticationSlice = createSlice({
  name: "authenticationState",
  initialState: initialState,
  reducers: {
    authenticateUser: (state, action) => {
      const { id, accessToken } = action.payload;
      console.log(" in the Auth slice");

      console.log(" the user's access Token ", accessToken);

      if (accessToken !== "") {
        return { ...state, id: id, auth: true, accessToken: accessToken };
      }
    },

    refreshAccessToken: (state, action) => {
      const { newAccessToken } = action.payload;

      return { ...state, accessToken: newAccessToken };
    },
  },
});
export const { authenticateUser, refreshAccessToken } =
  AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
