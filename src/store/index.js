import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import auth from "./authSlice";
const middleWares = [apiSlice.middleware];
const store = configureStore({
  reducer: {
    auth,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});
export default store;
