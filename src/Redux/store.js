import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthReducer/reducer";
import todoReducer from "./TodoReducer/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
  },
});
