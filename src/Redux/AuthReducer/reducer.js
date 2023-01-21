import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Authentication",
  initialState: {
    isLoading: false,
    isError: false,
    token: null,
  },
  reducers: {
    signupProcess(state, action) {
      console.log(state);
    },
  },
});
export default authSlice.reducer;
