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
} from "../../store/statsReducer";

const Dislpay = () => {
  const currentSentence = useSelector(
    (state: RootState) => state.textReducer.currentSentence
  );
  const fullTextArray = useSelector(
    (state: RootState) => state.textReducer.text
  );

  const [displaySentence, setDisplaySentence] = useState<string>("");
  const [startOfTimer, setStartOfTimer] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [misspelled, setNumberOfMisspelled] = useState<number>(0);
  const dispatch = useAppDispatch();

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const currentKey = event.key;
    console.log(currentKey);

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
    }
    if (displaySentence[0] !== currentKey && currentKey.length === 1)
      setNumberOfMisspelled((state) => ++state);
  };

  const dispatchAllStatsInfo = () => {
    dispatch(setTime(Date.now() - startOfTimer));
    dispatch(addedQuatityOfTypedWords(7));
    dispatch(addedQuatityOfTypedChars(typedText.split("").length));
    dispatch(setAccuracy(misspelled));
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
      setNumberOfMisspelled(0);
    }
  }, [displaySentence]);

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.window}>
          <pre className={classes["typed-text"]}>{typedText}</pre>
          <span className={classes.cursor} />
          <pre className={classes.text}>
            {displaySentence}
            {/* max 55 symbols */}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Dislpay;
