import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

export interface textState {
  text: string[];
  currentSentence: number;
}

const initialState: textState = {
  text: [],
  currentSentence: 0,
};

export const textSlice = createSlice({
  name: "textState",
  initialState,
  reducers: {
    setText(state, action) {
      let arrayOfRowStings = action.payload
        .split(" ")
        .filter((string: string) => {
          if (string === "") {
            return false;
          }
          return true;
        });

      while (arrayOfRowStings.length !== 0) {
        state.text.push(arrayOfRowStings.splice(0, 7).join(" ") + " ");
      }
    },
    setNextSentence(state) {
      state.currentSentence++;
    },
  },
});

export const getTextFromTheServer = () => {
  return (dispatch: AppDispatch) => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler&format=text")
      .then((res) => res.text())
      .then((data) => {
        dispatch(setText(data));
      });
  };
};

export const { setText, setNextSentence } = textSlice.actions;

export default textSlice.reducer;
