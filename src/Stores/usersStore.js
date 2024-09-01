import { configureStore } from "@reduxjs/toolkit";
import usersStateReducer from "../Features/UsersSlice";
import authenticationReducer from "../Features/AuthenticationSlice";

export const usersStore = configureStore({
  reducer: {
    usersState: usersStateReducer,
    authenticationState: authenticationReducer,
  },
});
