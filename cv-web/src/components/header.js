import React, { Component, Fragment } from "react";
import Circle from "./circle";
import "../styles/header.scss";

class Header extends Component {
  state = {
    opacity: 1
  };
  fadeOutCircle = () => {
    this.setState({
      opacity: 0.3
    });
  };

  fadeInCircle = () => {
    this.setState({
      opacity: 1
    });
  };
  render() {
    return (
      <Fragment>
        <Circle opacity={this.state.opacity} />

        <header onMouseOver={this.fadeOutCircle} onMouseOut={this.fadeInCircle}>
          <h1>ANONYMENT</h1>
          <ul className="gnb">
            <li>PROFILE</li>
            <li>WORKS</li>
            <li>PORTFOLIO</li>
            <li>BLOG</li>
            <li>ETC</li>
          </ul>
          <hr id="line"></hr>
        </header>
      </Fragment>
    );
  }
}

export default Header;
