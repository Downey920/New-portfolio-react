import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <img src="/imgs/logo.png" alt="Logo" className="logo__img" />
          <h1 className="logo__title">Downey</h1>
        </div>
        <ul className="menu">
          <li className="item">Home</li>
          <li className="item">About</li>
          <li className="item">Skill</li>
          <li className="item">Project</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
