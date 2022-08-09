import { useSelector } from "react-redux";
import { classicNameResolver } from "typescript";
import { closeModalWindow } from "../../store/modalReducer";
import { resetAllStats } from "../../store/statsReducer";
import { RootState, useAppDispatch } from "../../store/store";
import { getTextFromTheServer } from "../../store/textReducer";
import Button from "../UI/Buttons/Button";
import Modal from "../UI/Modal/Modal";
import classes from "./FinalWindow.module.css";

const FinalWindow = () => {
  const dispatch = useAppDispatch();
  const accuracy = useSelector(
    (state: RootState) => state.statsReducer.accuracy
  );
  const cpm = useSelector((state: RootState) => state.statsReducer.cpm);
  const misspelledWordsNumber = useSelector(
    (state: RootState) => state.statsReducer.misspelledWordsNumber
  );
  const wpm = useSelector((state: RootState) => state.statsReducer.wpm);
  const quatityOfTypedWords = useSelector(
    (state: RootState) => state.statsReducer.quatityOfTypedWords
  );

  const restartTheDisplay = () => {
    dispatch(getTextFromTheServer());
    dispatch(resetAllStats());
  };
  return (
    <Modal onClick={restartTheDisplay}>
      <div className={classes.wrapper}>
        <h1>Congratulation!</h1>
        <h3>You typed: {quatityOfTypedWords} words</h3>
        <h3>Accuracy: {accuracy}%</h3>
        <h3>WPM: {wpm}</h3>
        <h3>CPM: {cpm}</h3>
        <h3>Number of misspelled chars: {misspelledWordsNumber}</h3>
        <Button
          onClick={() => {
            dispatch(closeModalWindow());
            restartTheDisplay();
          }}
          title="Confirm and close"
        >
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default FinalWindow;
