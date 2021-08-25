import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  homeRef = React.createRef();
  componentDidMount() {
    setTimeout(() => this.homeRef.current.classList.add("show"), 300);
    this.makeOpacity();
  }

  // make HomeScreen Transparent By Scrolling
  makeOpacity = () => {
    const homeHeight = this.homeRef.current.getBoundingClientRect().height;
    document.addEventListener("scroll", () => {
      this.homeRef.current.style.opacity = 1.1 - window.scrollY / homeHeight;
    });
  };

  render() {
    return (
      <section ref={this.homeRef} className="home">
        <div className="left">
          <img
            src="/imgs/avatar.png"
            alt="Avatar"
            className="home__avatar  back-to-position to-right delay-3"
          />
        </div>
        <div className="right">
          <h2 className="text back-to-position to-left delay-0">
            기본이 튼튼한 개발자, 나다운입니다.
          </h2>
          <ul>
            <li className="phone back-to-position to-left delay-1">
              <i className="fas fa-phone-square-alt"></i> : 010-9458-5953
            </li>
            <li className="email back-to-position to-left delay-2">
              Email : skekfl12@naver.com
            </li>
            <li className="github back-to-position to-left delay-4">
              Github :{" "}
              <a href="https://github.com/Downey920">
                https://github.com/Downey920
              </a>
            </li>
            <li className="blog back-to-position to-left delay-5">
              Blog :{" "}
              <a href="https://blog.naver.com/skekfl12">
                https://blog.naver.com/skekfl12
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Home;
