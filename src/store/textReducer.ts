import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "./store";

export interface textState {
  text: string[];
  numOfCurrentSentence: number;
}

const initialState: textState = {
  text: [],
  numOfCurrentSentence: 0,
};

export const textSlice = createSlice({
  name: "textState",
  initialState,
  reducers: {
    setText(state, action) {
      const arrayOfRowStrings = action.payload
        .split(" ")
        .filter((string: string) => {
          if (string === "") {
            return false;
          }
          return true;
        });

      while (arrayOfRowStrings.length !== 0) {
        state.text.push(arrayOfRowStrings.splice(0, 7).join(" ") + " ");
      }
    },
    setNextSentence(state) {
      state.numOfCurrentSentence++;
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
