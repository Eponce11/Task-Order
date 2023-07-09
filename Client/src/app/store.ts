import { configureStore } from "@reduxjs/toolkit";
import signedInUserSlice from "./slices/signedInUserSlice";

export const store = configureStore({
  reducer: {
    signedInUserSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
