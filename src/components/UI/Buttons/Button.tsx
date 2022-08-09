import React, { ReactNode } from "react";
import classes from "./Button.module.css";

export interface Button {
  children?: string | ReactNode;
  onClick?: () => void;
  title: string;
}

const Button: React.FC<Button> = ({ onClick, title, children }) => {
  return (
    <button className={classes.btn} title={title} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
