import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classes from "./Stats.module.css";

const Stats = () => {
  const wpm = useSelector((state: RootState) => state.statsReducer.wpm);
  const cpm = useSelector((state: RootState) => state.statsReducer.cpm);
  const accuracy = useSelector(
    (state: RootState) => state.statsReducer.accuracy
  );
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <div>wpm: {wpm}</div>
        <div>cpm: {cpm}</div>
        <div>Accuracy: {accuracy}%</div>
      </div>
    </div>
  );
};

export default Stats;
