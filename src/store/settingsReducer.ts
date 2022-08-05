import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

export interface settingsState {
  autoBackspace: boolean;
  displayKeyboard: boolean;
}

const initialState: settingsState = {
  autoBackspace: true,
  displayKeyboard: true,
};

const settingsSlice = createSlice({
  name: "settingsState",
  initialState,
  reducers: {
    toggleAutoBackspace(state) {
      state.autoBackspace = !state.autoBackspace;
    },

    toggleKeyboardDisplay(state) {
      state.displayKeyboard = !state.displayKeyboard;
    },
  },
});

export const { toggleAutoBackspace, toggleKeyboardDisplay } =
  settingsSlice.actions;

export default settingsSlice.reducer;
