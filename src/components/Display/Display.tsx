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
import FinalWindow from "../FinalWindow/FinalWindow";
import { openModalWindow } from "../../store/modalReducer";
import compareTypedAndDesiredText, {
  typedTextOjectToDisplayInterface,
  typeOfText,
} from "../../utils/compareTypedAndDesiredText";

const Dislpay = () => {
  const numOfCurrentSentence = useSelector(
    (state: RootState) => state.textReducer.numOfCurrentSentence
  );
  const fullTextArray = useSelector(
    (state: RootState) => state.textReducer.text
  );

  const autoBackspaceIsOn = useSelector(
    (state: RootState) => state.settingsReducer.autoBackspace
  );
  const modalStatus = useSelector(
    (state: RootState) => state.modalReducer.isOpen
  );

  const dispatch = useAppDispatch();

  const [displaySentence, setDisplaySentence] = useState<string>("");
  const [startOfTimer, setStartOfTimer] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>("");
  const [renderedTypedText, setRenderedTypedText] = useState<
    typedTextOjectToDisplayInterface[]
  >([]);
  const [isWelcomeTextShowing, setIsWelcomeTextShowing] =
    useState<boolean>(true);
  const [justMisprint, setJustMisprint] = useState(false);

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const currentKey = event.key;
    const currentSentence = fullTextArray[numOfCurrentSentence];

    if (!autoBackspaceIsOn) {
      if (currentKey === "Backspace" && !event.ctrlKey) {
        setDisplaySentence((state) => {
          return typedText === ""
            ? state
            : currentSentence[typedText.length - 1] + state;
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
        const arrayOfTypedChars = typedText.split("");
        const indexOfSpace = arrayOfTypedChars.lastIndexOf(" ");

        setDisplaySentence((state) => {
          if (typedText !== "") {
            if (indexOfSpace === -1) {
              return (
                currentSentence
                  .split("")
                  .slice(0, arrayOfTypedChars.length)
                  .join("") + state
              );
            }
            if (arrayOfTypedChars[arrayOfTypedChars.length - 1] === " ") {
              return " " + state;
            }
            return (
              currentSentence
                .split("")
                .slice(indexOfSpace + 1, typedText.length)
                .join("") + state
            );
          }
          return state;
        });

        setTypedText(() => {
          if (indexOfSpace === -1) {
            return "";
          }
          if (arrayOfTypedChars[arrayOfTypedChars.length - 1] === " ") {
            return arrayOfTypedChars.slice(0, indexOfSpace).join("");
          }
          return arrayOfTypedChars.slice(0, indexOfSpace + 1).join("");
        });
      }
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
      if (!autoBackspaceIsOn) {
        setTypedText((state) => state + currentKey);
        setDisplaySentence((state) => {
          const newSentenceArray = state.split("");
          newSentenceArray.splice(0, 1);
          return newSentenceArray.join("");
        });
      }
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
  }, [displaySentence, autoBackspaceIsOn]);

  useEffect(() => {
    dispatch(getTextFromTheServer());
  }, []);

  useEffect(() => {
    if (fullTextArray.length !== 0) {
      setDisplaySentence(fullTextArray[numOfCurrentSentence] || "");
    }
    if (
      numOfCurrentSentence > fullTextArray.length - 1 &&
      fullTextArray.length !== 0
    ) {
      setTypedText("");
      dispatch(openModalWindow());
    }
  }, [numOfCurrentSentence, fullTextArray]);

  useEffect(() => {
    if (displaySentence.length === 0 && fullTextArray.length > 0) {
      dispatchAllStatsInfo();
      dispatch(setNextSentence());

      setTypedText("");
    }
  }, [displaySentence]);

  useEffect(() => {
    const newState = compareTypedAndDesiredText(
      typedText,
      fullTextArray,
      numOfCurrentSentence
    );
    setRenderedTypedText(newState);
  }, [typedText, fullTextArray, numOfCurrentSentence]);

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={`${classes.window} ${justMisprint && classes.mistake}`}>
          <pre className={classes["typed-text"]}>
            {renderedTypedText.map(
              (object: typedTextOjectToDisplayInterface) => {
                if (object.type === typeOfText.MISSPELED) {
                  return (
                    <span key={Math.random()} className={classes.misspelled}>
                      {object.value}
                    </span>
                  ); // not a good practice to use Math.random() as id, but I'd hope you will forgive me
                }
                return object.value;
              }
            )}
          </pre>
          <span className={classes.cursor} />
          <pre className={classes.text}>{displaySentence}</pre>
        </div>
        {isWelcomeTextShowing && <p>Start typing</p>}
      </div>

      {modalStatus && <FinalWindow />}
    </div>
  );
};

export default Dislpay;
