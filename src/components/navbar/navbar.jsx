import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  navRef = React.createRef();

  componentDidMount() {
    this.makeNavbarDark();
  }

  makeNavbarDark = () => {
    const homeHeight = document
      .querySelector(".home")
      .getBoundingClientRect().height;
    const navbarHeight = this.navRef.current.getBoundingClientRect().height;

    document.addEventListener("scroll", () => {
      if (homeHeight - navbarHeight < window.scrollY) {
        this.navRef.current.classList.add("navbar--dark");
      } else {
        this.navRef.current.classList.remove("navbar--dark");
      }
    });
  };

  handleScroll = e => {
    const target = e.target.dataset.link;
    if (target === ".home") {
      window.scrollTo({ behavior: "smooth", top: 0 });
    } else {
      document.querySelector(target).scrollIntoView({ behavior: "smooth" });
    }
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
          <li
            className="item active"
            data-link=".home"
            onClick={this.handleScroll}
          >
            Home
          </li>
          <li className="item" data-link=".about" onClick={this.handleScroll}>
            About
          </li>
          <li className="item" data-link=".skill" onClick={this.handleScroll}>
            Skill
          </li>
          <li className="item" data-link=".project" onClick={this.handleScroll}>
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
