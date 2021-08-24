import React, { Component } from "react";
import "./about.css";

class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="inner">
          <h2 className="title">About</h2>
          <div className="about-1">
            <h3 className="about-2">Introduction</h3>
            <ul className="about-3">
              <li>안녕하세요! 신입 프론트엔드 개발자 나다운입니다.</li>
              <li>
                알고리즘 및 자료구조에 흥미가 있으며 JavaScript와 C++ STL통해
                꾸준히 여러 문제들을 풀어보고 효율적인 알고리즘과 그에 맞는
                자료구조를 통해 어떻게 Time Complex를 낮출지 고민하고 문제 해결
                능력을 키웠습니다.
              </li>
              <li>
                단순히 웹페이지를 완성시키는 것에 초점을 맞추기 보다는
                내부적으로 얼마나 효율적으로 동작하는지에 대해 초점을 맞추는
                개발자가 되기 위해 노력했습니다.
              </li>
            </ul>
          </div>
          <div className="award-license about-1">
            <h3 className="award-license__title about-2">Award & License</h3>
            <ul className="award-license__description about-3">
              <li>
                KAIST SDIA 주관 지능형 SoC로봇워 태권로봇 부문 은상 (2015.02 ~
                2015.08)
                <div className="award-license__description__comment">
                  AI & 영상처리 관련 부분이지만 6개월 가까이 팀원들과 협업하면서
                  파트너쉽 관련 경험
                </div>
              </li>
              <li>정보처리기사 자격증 (2019.11)</li>
            </ul>
          </div>
          <div className="about-1">
            <h3 className="about-2">Career</h3>
            <ul className="about-3 careerList">
              <li className="career">
                <img
                  src="/imgs/경기고.png"
                  alt="경기 고등학교"
                  className="career__img"
                />
                <div className="career__textBox">
                  <div className="textBox__name">
                    경기 고등학교 (High School)
                  </div>
                  <div className="textBox__period">기간 : 2008.3 ~ 2011.2</div>
                </div>
              </li>
              <li className="career">
                <img
                  src="/imgs/서경대.png"
                  alt="서경 대학교"
                  className="career__img"
                />
                <div className="career__textBox">
                  <div className="textBox__name">서경 대학교 (University)</div>
                  <div className="textBox__period">
                    기간 : 2013.3 ~ 2020.8
                    <br />
                    전공 : 컴퓨터 공학과
                    <br />
                    학점 : 3.0/4.5
                    <br />
                    전공학점 : 3.2/4.5{" "}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="about-1">
            <h3 className="about-2">Front-End</h3>
            <ul className="about-3 skillList">
              <div className="leftList">
                <li>HTML, CSS, JavaScript</li>
                <li>SCSS, PostCSS</li>
              </div>
              <div className="rightList">
                <li>React</li>
                <li>Git, GitHub, PostMan</li>
              </div>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
