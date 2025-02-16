import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/authSlice";
import cartSlice from "../feature/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
