import HeaderBar from "./components/Layout/HeaderBar";
import "./App.css";
import MainBackground from "./components/Layout/MainBackground";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <HeaderBar />
      <main>
        <MainBackground />
      </main>
    </Fragment>
  );
};

export default App;
