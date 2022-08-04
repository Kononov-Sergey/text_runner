import { stat } from "fs";
import React, { useState, useEffect } from "react";
import "./../../index.css";
import classes from "./Display.module.css";

const dummydata = {
  text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
};

const Dislpay = () => {
  const [sentence, setSentence] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");

  const onKeyDownHandler = (event: KeyboardEvent) => {
    const currentKey = event.key;
    console.log(sentence);
    console.log(currentKey);

    if (sentence[0] === currentKey) {
      setTypedText((state) => state + currentKey);
      setSentence((state) => {
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
  }, [sentence]);

  useEffect(() => {
    setSentence(dummydata.text);
  }, []);
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.window}>
          <pre className={classes["typed-text"]}>{typedText}</pre>
          <span className={classes.cursor} />
          <pre className={classes.text}>
            {sentence}
            {/* max 55 symbols */}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Dislpay;
