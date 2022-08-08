import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType {
  isOpen: boolean;
}

const initialState: initialStateType = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modalState",
  initialState,
  reducers: {
    openModalWindow(state) {
      state.isOpen = true;
    },
    closeModalWindow(state) {
      state.isOpen = false;
    },
  },
});

export const { openModalWindow, closeModalWindow } = modalSlice.actions;

export default modalSlice.reducer;
