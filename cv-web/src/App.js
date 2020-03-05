import React, { Component } from "react";
import "./styles/App.scss";
import "./styles/reset.scss";
import Header from "./components/header";
import MainBanner from "./components/mainBanner";

class App extends Component {
  render() {
    return (
      <div id="wrap">
        <div className="innerWrapper">
          <Header />
          <MainBanner />
        </div>
      </div>
    );
  }
}
export default App;
