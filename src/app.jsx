import React, { Component } from "react";
import "./app.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Project from "./components/project/project";
import Skill from "./components/skill/skill";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <Home />
        <About />
        <Skill />
        <Project />
      </>
    );
  }
}

export default App;
