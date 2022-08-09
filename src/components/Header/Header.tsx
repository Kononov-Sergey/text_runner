import React from "react";
import "./../../index.css";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="container">
        <h1>
          text_<span>runner</span>
        </h1>
        <h2>
          by <a href="https://t.me/sergo4829">Kononov Sergey</a>
        </h2>
      </div>
    </header>
  );
};

export default Header;
