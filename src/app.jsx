import React, { Component } from "react";
import "./app.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Project from "./components/project/project";
import Skill from "./components/skill/skill";

class App extends Component {
  state = {};

  componentDidMount() {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
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
