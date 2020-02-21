import React, { Component } from "react";
import "../styles/header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Logo</h1>
        <ul>
          <li>PROFILE</li>
          <li>SKILL</li>
          <li>WORK</li>
          <li>ETC</li>
        </ul>

        <button className="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    );
  }
}

export default Header;
