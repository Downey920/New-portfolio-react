import React, { Component } from "react";
import "./app.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Project from "./components/project/project";
import Skill from "./components/skill/skill";

class App extends Component {
  state = {
    sectionClass: [".home", ".about", ".skill", ".project"],
  };

  componentDidMount() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".item");
    const skillValues = document.querySelectorAll(".skill__value");
    const valuePercent = [70, 70, 60, 50, 60];
    let selectedNavItem = navItems[0];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = this.state.sectionClass.indexOf(
            `.${entry.target.className}`
          );

          selectedNavItem.classList.remove("active");
          selectedNavItem = navItems[index];
          selectedNavItem.classList.add("active");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    document.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        selectedNavItem.classList.remove("active");
        selectedNavItem = navItems[0];
        selectedNavItem.classList.add("active");
      } else if (selectedNavItem === navItems[2]) {
        skillValues.forEach((val, index) => {
          val.style.width = `${valuePercent[index]}%`;
        });
      } else {
        skillValues.forEach((val, index) => {
          val.style.width = `0%`;
        });
      }
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <div className="container">
          <About />
          <Skill />
          <Project />
        </div>
      </>
    );
  }
}

export default App;
