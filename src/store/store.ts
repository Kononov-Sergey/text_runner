import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import textReducer from "./textReducer";
import statsReducer from "./statsReducer";
import settingsReducer from "./settingsReducer";
import modalReducer from "./modalReducer";

export const store = configureStore({
  reducer: { textReducer, statsReducer, settingsReducer, modalReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
