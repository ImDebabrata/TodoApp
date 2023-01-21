import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthReducer/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
