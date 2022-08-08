import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { getTextFromTheServer, setNextSentence } from "../../store/textReducer";
import { RootState } from "../../store/store";

import "./../../index.css";
import classes from "./Display.module.css";
import {
  setAccuracy,
  addedQuatityOfTypedWords,
  addedQuatityOfTypedChars,
  setCPM,
  setWPM,
  setTime,
  addedMisspelledWordsNumber,
} from "../../store/statsReducer";

const Dislpay = () => {
  const currentSentence = useSelector(
    (state: RootState) => state.textReducer.currentSentence
  );
  const fullTextArray = useSelector(
    (state: RootState) => state.textReducer.text
  );

  const autoBackspaceIsOn = useSelector(
    (state: RootState) => state.settingsReducer.autoBackspace
  );

  const dispatch = useAppDispatch();

  const [displaySentence, setDisplaySentence] = useState<string>("");
  const [startOfTimer, setStartOfTimer] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [isWelcomeTextShowing, setIsWelcomeTextShowing] =
    useState<boolean>(true);
  const [justMisprint, setJustMisprint] = useState(false);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const currentKey = event.key;
    console.dir(event);

    if (currentKey === "Backspace" && !event.ctrlKey) {
      setDisplaySentence((state) => {
        return typedText === ""
          ? state
          : typedText[typedText.length - 1] + state;
      });
      setTypedText((state) => {
        if (state) {
          const newState = state.split("");
          newState.pop();
          return newState.join("");
        }
        return "";
      });
    }

    if (currentKey === "Backspace" && event.ctrlKey) {
      // should be refactored later mb, looking a bit ugly and complicated
      setDisplaySentence((state) => {
        if (typedText) {
          const arrayOfTypedChars = typedText.split("");
          const indexOfSpace = arrayOfTypedChars.lastIndexOf(" ");
          if (indexOfSpace === -1) {
            return arrayOfTypedChars.slice(0).join("") + state;
          }
          if (arrayOfTypedChars[arrayOfTypedChars.length - 1] === " ") {
            return " " + state;
          }
          return arrayOfTypedChars.slice(indexOfSpace + 1).join("") + state;
          // debugger;
        }
        return state;
      });
      setTypedText((state) => {
        const secondArrayOfTypedChars = state.split("");
        const index = secondArrayOfTypedChars.lastIndexOf(" ");
        if (index === -1) {
          return "";
        }
        if (
          secondArrayOfTypedChars[secondArrayOfTypedChars.length - 1] === " "
        ) {
          return secondArrayOfTypedChars.slice(0, index).join("");
        }

        return secondArrayOfTypedChars.slice(0, index + 1).join("");
      });
    }

    if (displaySentence[0] === currentKey) {
      if (startOfTimer === 0) {
        setStartOfTimer(Date.now());
      }
      setTypedText((state) => state + currentKey);
      setDisplaySentence((state) => {
        const newSentenceArray = state.split("");
        newSentenceArray.splice(0, 1);
        return newSentenceArray.join("");
      });
      setIsWelcomeTextShowing(false);
    }

    if (
      displaySentence[0] !== currentKey &&
      currentKey.length === 1 &&
      startOfTimer !== 0
    ) {
      dispatch(addedMisspelledWordsNumber(1));
      setJustMisprint(true);
      setTimeout(() => {
        setJustMisprint(false);
      }, 200);
    }
  };

  const dispatchAllStatsInfo = () => {
    dispatch(setTime(Date.now() - startOfTimer));
    dispatch(addedQuatityOfTypedWords(7));
    dispatch(addedQuatityOfTypedChars(typedText.split("").length));
    dispatch(setAccuracy());
    dispatch(setCPM());
    dispatch(setWPM());
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDownHandler);
    return () => {
      window.removeEventListener("keydown", onKeyDownHandler);
    };
  }, [displaySentence]);

  useEffect(() => {
    dispatch(getTextFromTheServer());
  }, []);

  useEffect(() => {
    if (fullTextArray.length !== 0) {
      setDisplaySentence(fullTextArray[currentSentence]);
    }
  }, [currentSentence, fullTextArray]);

  useEffect(() => {
    if (displaySentence.length === 0 && fullTextArray.length > 0) {
      dispatchAllStatsInfo();
      dispatch(setNextSentence());
      // clean up
      setTypedText("");
    }
  }, [displaySentence]);

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={`${classes.window} ${justMisprint && classes.mistake}`}>
          <pre className={classes["typed-text"]}>{typedText}</pre>
          <span className={classes.cursor} />
          <pre className={classes.text}>{displaySentence}</pre>
        </div>
        {isWelcomeTextShowing && <p>Start typing</p>}
      </div>
    </div>
  );
};

export default Dislpay;
