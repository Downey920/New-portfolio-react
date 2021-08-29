import React, { Component } from "react";
import "./skill.css";

class Skill extends Component {
  render() {
    return (
      <section className="skill">
        <div className="inner">
          <h2 className="skills__title">Skill</h2>
          <p className="skills__description"></p>
          <div className="skillSet">
            <div className="skillSet__left">
              <h3 className="skillSet__left__title">Skills</h3>

              <div className="skillSet__left__skill">
                <div className="skill__description">
                  <span>HTML</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value"></div>
                </div>
              </div>

              <div className="skillSet__left__skill">
                <div className="skill__description">
                  <span>CSS</span>
                  <span>70%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value"></div>
                </div>
              </div>

              <div className="skillSet__left__skill">
                <div className="skill__description">
                  <span>JavaScript</span>
                  <span>60%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value"></div>
                </div>
              </div>

              <div className="skillSet__left__skill">
                <div className="skill__description">
                  <span>C</span>
                  <span>50%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value"></div>
                </div>
              </div>

              <div className="skillSet__left__skill">
                <div className="skill__description">
                  <span>C++</span>
                  <span>60%</span>
                </div>
                <div className="skill__bar">
                  <div className="skill__value"></div>
                </div>
              </div>
            </div>

            <div className="skillSet__right">
              <div className="skillSet__right__tools">
                <h3 className="tools__title">Tools & Library</h3>
                <ul className="tools__list">
                  <li className="tools__list__item">Visual Studio</li>
                  <li className="tools__list__item">PostMan</li>
                  <li className="tools__list__item">React</li>
                  <li className="tools__list__item">PostCSS</li>
                </ul>
              </div>
              <div className="skillSet__right__etc">
                <h3 className="etc__title">Etc</h3>
                <ul className="etc__list">
                  <li className="etc__list__item">Git</li>
                  <li className="etc__list__item">GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skill;
