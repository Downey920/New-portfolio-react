import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  navRef = React.createRef();

  handleScroll = e => {
    const target = e.target.className.replace(/_ item/g, "");
    document.querySelector(`.${target}`).scrollIntoView({ behavior: "smooth" });
    this.navRef.current.classList.remove("open");
  };

  handleMenubar = e => {
    this.navRef.current.classList.toggle("open");
  };

  render() {
    return (
      <nav ref={this.navRef} className="navbar">
        <div className="logo">
          <img src="/imgs/logo.png" alt="Logo" className="logo__img" />
          <h1 className="logo__title">Downey</h1>
        </div>
        <ul className="menu">
          <li className="home_ item" onClick={this.handleScroll}>
            Home
          </li>
          <li className="about_ item" onClick={this.handleScroll}>
            About
          </li>
          <li className="skill_ item" onClick={this.handleScroll}>
            Skill
          </li>
          <li className="project_ item" onClick={this.handleScroll}>
            Project
          </li>
        </ul>

        <div className="menubar" onClick={this.handleMenubar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
