import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./textReducer";
import statsReducer from "./statsReducer";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: { textReducer, statsReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
