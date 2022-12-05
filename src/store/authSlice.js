import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authSlice",
  initialState: { isLoggedIn: false, name: ".Mazen A" },
  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
