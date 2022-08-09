import React from "react";
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
          title={"On/Off Auto Backspace "}
          onClick={() => {
            dispatch(toggleAutoBackspace());
          }}
          googleIconClass="material-symbols-outlined"
          googleIconName="backspace"
          size={24}
        />
        <ButtonIcon
          title={"Show/hidden the supporting keyboard"}
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
