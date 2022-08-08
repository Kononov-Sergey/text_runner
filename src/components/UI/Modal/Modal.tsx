import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

import { useAppDispatch } from "../../../store/store";
import { closeModalWindow } from "../../../store/modalReducer";
import React, { ReactNode } from "react";

const Backdrop: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(closeModalWindow());
      }}
      className={classes.backdrop}
    ></div>
  );
};

const ModalOverlay: React.FC<{
  children: ReactNode;
}> = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal: React.FC<{
  children: ReactNode;
}> = (props) => {
  const portalPlace = document.querySelector("#overlays")!;
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalPlace)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalPlace
      )}
    </>
  );
};

export default Modal;
