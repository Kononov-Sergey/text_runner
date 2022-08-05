import React, { useEffect, useState } from "react";
import classes from "./ButtonIcon.module.css";

interface ButtonIconProps {
  onClick?: () => void;
  googleIconClass: string;
  googleIconName: string;
  size: number;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  onClick,
  googleIconName,
  size,
  googleIconClass,
}) => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const [animated, setIsAnimated] = useState<boolean>(false);
  const btnStyle = {
    fontSize: size,
  };

  useEffect(() => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 200);
  }, [isHidden]);

  return (
    <button
      onClick={() => {
        setIsHidden((state) => !state);
        if (onClick) {
          onClick();
        }
      }}
      className={`${classes.btn} ${isHidden && classes["turn-off"]} ${
        animated && classes.bump
      }`}
      style={btnStyle}
    >
      <span className={googleIconClass}>{googleIconName}</span>
    </button>
  );
};

export default ButtonIcon;
