import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { getTextFromTheServer, setNextSentence } from "../../store/textReducer";
import { RootState } from "../../store/store";

import "./../../index.css";
import classes from "./Display.module.css";

const Dislpay = () => {
  const currentSentence = useSelector(
    (state: RootState) => state.textReducer.currentSentence
  );
  const fullTextArray = useSelector(
    (state: RootState) => state.textReducer.text
  );

  const [displaySentence, setDisplaySentence] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const dispatch = useAppDispatch();

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const currentKey = event.key;

    if (displaySentence[0] === currentKey) {
      setTypedText((state) => state + currentKey);
      setDisplaySentence((state) => {
        const newSentenceArray = state.split("");
        newSentenceArray.splice(0, 1);
        return newSentenceArray.join("");
      });
    }
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
      setTypedText("");
      dispatch(setNextSentence());
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
