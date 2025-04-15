import { configureStore } from "@reduxjs/toolkit";
import { userReducers } from "./redux/reducers/users";
// import {thunk} from "redux-thunk";
import { themeReducers } from "./redux/reducers/theme";

export const makeStore = () => {
  return configureStore({
    reducer: {
      users: userReducers,
      theme: themeReducers
    },
    // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk), // Or just [thunk] if not using getDefaultMiddleware
  });
};
