import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Display from "./components/Display/Display";
import Adjustment from "./components/Adjustment/Adjustment";
import Stats from "./components/Stats/Stats";
import Board from "./components/Board/Board";

import { RootState } from "./store/store";
import { useSelector } from "react-redux";

function App() {
  const showBoard = useSelector((state: RootState) => {
    return state.settingsReducer.displayKeyboard;
  });

  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <Stats />
        <Display />
        <Adjustment />
        {showBoard && <Board />}
      </main>
    </div>
  );
}

export default App;
