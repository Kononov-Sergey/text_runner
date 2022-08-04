import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Stats = () => {
  const wpm = useSelector((state: RootState) => state.statsReducer.wpm);
  const cpm = useSelector((state: RootState) => state.statsReducer.cpm);
  const accuracy = useSelector(
    (state: RootState) => state.statsReducer.accuracy
  );
  return (
    <div className="container">
      <div>{wpm}wpm</div>
      <div>{cpm}cpm</div>
      <div>{accuracy}%</div>
    </div>
  );
};

export default Stats;
