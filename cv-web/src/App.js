import React, { Fragment } from "react";
import "./styles/App.css";
import "./styles/reset.css";
import Header from "./components/header";
import MainBanner from "./components/mainBanner";

function App() {
  return (
    <Fragment>
      <Header />
      <MainBanner />
    </Fragment>
  ); //return
} //app

export default App;
