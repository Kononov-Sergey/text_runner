import React from "react";
import classes from "./Board.module.css";
import "./../../index.css";

const Board = () => {
  return (
    <div className="container">
      <div className={classes.wrapper}>
        <div className={`${classes.row} ${classes["row-1"]}`}>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>~</p>
            <p>`</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>!</p>
            <p>1</p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>@</p>
            <p>2</p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>#</p>
            <p>3</p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>$</p>
            <p>4</p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>%</p>
            <p>5</p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>^</p>
            <p>6</p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>&</p>
            <p>7</p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>*</p>
            <p>8</p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>(</p>
            <p>9</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>)</p>
            <p>0</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>_</p>
            <p>-</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>+</p>
            <p>=</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Backspace</p>
            <p></p>
          </div>
        </div>
        <div className={`${classes.row} ${classes["row-2"]}`}>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Tab</p>
            <p>
              <span className="material-symbols-outlined">keyboard_tab</span>
            </p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Q</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>W</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>E</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>R</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>T</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>Y</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>U</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>I</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>O</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>P</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>{"{"}</p>
            <p>[</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>{"}"}</p>
            <p>]</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>|</p>
            <p>\</p>
          </div>
        </div>
        <div className={`${classes.row} ${classes["row-3"]}`}>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Caps Lock</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>A</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>S</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>D</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>F</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>G</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>H</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>J</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>K</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>L</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>:</p>
            <p>;</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>"</p>
            <p>'</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Enter</p>
            <p></p>
          </div>
        </div>
        <div className={`${classes.row} ${classes["row-4"]}`}>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Shift</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Z</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>X</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>C</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>V</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>B</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>N</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.purple}`}>
            <p>M</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.blue}`}>
            <p>{"<"}</p>
            <p>,</p>
          </div>
          <div className={`${classes.key} ${classes.green}`}>
            <p>{">"}</p>
            <p>.</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>?</p>
            <p>/</p>
          </div>
          <div className={`${classes.key} ${classes.brown}`}>
            <p>Shift</p>
            <p></p>
          </div>
        </div>
        <div className={`${classes.row} ${classes["row-5"]}`}>
          <div className={classes.key}>
            <p>Ctrl</p>
            <p></p>
          </div>
          <div className={classes.key}>
            <p></p>
            <p></p>
          </div>
          <div className={classes.key}>
            <p>Alt</p>
            <p></p>
          </div>
          <div className={`${classes.key} ${classes.dirty}`}>
            <p></p>
            <p></p>
          </div>
          <div className={classes.key}>
            <p>Alt</p>
            <p></p>
          </div>
          <div className={classes.key}>
            <p>
              <span className="material-symbols-outlined">article</span>
            </p>
            <p></p>
          </div>
          <div className={classes.key}>
            <p>Ctrl</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
