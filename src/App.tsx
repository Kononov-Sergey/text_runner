import Header from "./components/Header/Header";
import classes from "./App.module.css";
import Display from "./components/Display/Display";
import Adjustment from "./components/Adjustment/Adjustment";
function App() {
  return (
    <div className={classes.app}>
      <Header />
      <main className={classes.main}>
        <Display />
        <Adjustment />
      </main>
    </div>
  );
}

export default App;
