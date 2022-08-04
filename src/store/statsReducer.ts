import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

export interface statsState {
  quatityOfTypedWords: number;
  quatityOfTypedChars: number;
  misspelledWordsNumber: number;
  seconds: number;
  accuracy: number;
  wpm: number;
  cpm: number;
}

const initialState: statsState = {
  quatityOfTypedWords: 0,
  quatityOfTypedChars: 0,
  misspelledWordsNumber: 0,
  seconds: 0,
  accuracy: 0,
  wpm: 0,
  cpm: 0,
};

export const statsSlice = createSlice({
  name: "statsState",
  initialState,
  reducers: {
    addedQuatityOfTypedWords(state, action: PayloadAction<number>) {
      state.quatityOfTypedWords += action.payload;
    },
    addedQuatityOfTypedChars(state, action: PayloadAction<number>) {
      state.quatityOfTypedChars += action.payload;
    },
    setTime(state, action) {
      state.seconds = action.payload / 1000;
    },
    setAccuracy(state, action: PayloadAction<number>) {
      state.accuracy = Math.round(
        100 -
          ((state.accuracy + action.payload) / state.quatityOfTypedChars) * 100
      );
    },
    setCPM(state) {
      state.cpm = +(state.quatityOfTypedChars / (state.seconds / 60)).toFixed(
        0
      );
    },
    setWPM(state) {
      state.wpm = +(state.quatityOfTypedWords / (state.seconds / 60)).toFixed(
        0
      );
    },
  },
});

export const {
  addedQuatityOfTypedWords,
  addedQuatityOfTypedChars,
  setTime,
  setAccuracy,
  setCPM,
  setWPM,
} = statsSlice.actions;

export default statsSlice.reducer;
