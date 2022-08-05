import React from "react";
import Board from "../Board/Board";
import classes from "./Adjustment.module.css";
import "./../../index.css";
import ButtonIcon from "../UI/Buttons/ButtonIcon";
import { useAppDispatch } from "../../store/store";
import {
  toggleAutoBackspace,
  toggleKeyboardDisplay,
} from "../../store/settingsReducer";

const Adjustment = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <ButtonIcon
          onClick={() => {
            dispatch(toggleAutoBackspace());
          }}
          googleIconClass="material-symbols-outlined"
          googleIconName="backspace"
          size={24}
        />
        <ButtonIcon
          onClick={() => {
            dispatch(toggleKeyboardDisplay());
          }}
          googleIconClass="material-symbols-outlined"
          googleIconName="visibility"
          size={24}
        />
      </div>
    </div>
  );
};

export default Adjustment;
