import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Display from "./components/Display/Display";
import Adjustment from "./components/Adjustment/Adjustment";
import Stats from "./components/Stats/Stats";
function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <Stats />
        <Display />
        <Adjustment />
      </main>
    </div>
  );
}

export default App;
