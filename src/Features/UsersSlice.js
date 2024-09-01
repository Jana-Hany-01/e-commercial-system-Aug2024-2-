import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  username: "",
  email: "",
  password: "",
  isLoggedIn: false,
  id: 0,
  accessToken: "",
};
const usersSlice = createSlice({
  name: "usersState",
  initialState: initialState,
  reducers: {
    register: (state, action) => {
      const { username, email, password } = action.payload;

      return {
        ...state,
        ["username"]: username,
        ["email"]: email,
        ["password"]: password,
        ["isLoggedIn"]: false,
        ["id"]: 0,
        ["accessToken"]: "",
      };
    },
    login: (state, action) => {
      const { password, email, id, accessToken } = action.payload;

      console.log(" entered the Login reducer  fun in the #slice");
      console.log(" Tracking !!");
      console.log("password ", password);
      console.log("email ", email);
      console.log("id", id);
      console.log("accessToken ", accessToken);

      return {
        ...state,

        ["password"]: password,
        ["email"]: email,
        ["isLoggedIn"]: true,
        ["id"]: id,
        ["accessToken"]: accessToken,
      };
    },
    logOut: () => {
      return initialState;
    },
  },
});
export const { register, login, logOut } = usersSlice.actions;
export default usersSlice.reducer;
