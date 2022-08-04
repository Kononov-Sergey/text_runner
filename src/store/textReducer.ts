import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  text: string;
  typedText: string;
}

const initialState: CounterState = {
  text: "",
  typedText: "",
};

export const textSlice = createSlice({
  name: "textState",
  initialState,
  reducers: {},
});

export const {} = textSlice.actions;

export default textSlice.reducer;
