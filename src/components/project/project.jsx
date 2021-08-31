import React, { Component } from "react";
import "./project.css";

class Project extends Component {
  handdleClassification = e => {
    const target = e.target.classList.contains("cnt")
      ? e.target.parentNode
      : e.target;
    if (target.classList.contains("categories")) return;

    const categories = document.querySelectorAll(".category");
    const items = document.querySelectorAll(".items .item");
    const itemContainer = document.querySelector(".items");

    categories.forEach(category => {
      if (category.classList.contains("active")) {
        category.classList.remove("active");
      }
    });
    target.classList.add("active");

    itemContainer.style.opacity = 0;
    itemContainer.style.transform = `scale(0.96) translateY(40px)`;

    setTimeout(() => {
      items.forEach(item => {
        if (!item.classList.contains(`${target.dataset.link}`)) {
          item.style.display = "none";
        } else {
          item.style.display = "flex";
        }
      });

      itemContainer.style.opacity = 1;
      itemContainer.style.transform = `scale(1) translateY(0)`;
    }, 300);
  };

  render() {
    return (
      <section className="project">
        <div className="inner">
          <h2 className="title">Project</h2>

          <ul className="categories" onClick={this.handdleClassification}>
            <li className="category active" data-link="all">
              All <span className="cnt">3</span>
            </li>
            <li className="category" data-link="js">
              VanilaJS <span className="cnt">2</span>
            </li>
            <li className="category" data-link="react">
              React <span className="cnt">1</span>
            </li>
          </ul>

          <ul className="items">
            <li className="item youtube react all">
              <a
                href="https://youtube-react-na.netlify.app/"
                className="item__left"
              ></a>
              <div className="item__right">
                <h4 className="right__title">유튜브 클론코딩</h4>
                <div className="right__description">
                  <h4 className="description__title">
                    Purpose of this project
                  </h4>
                  <ul>
                    <li>Implementing app using react</li>
                    <li>Learning about Public APIs</li>
                  </ul>
                  <h4 className="description__title">About Project</h4>
                  <ul>
                    <li>모든 화면 반응형으로 구현</li>
                    <li>SPA(Single Page Application)</li>
                    <li>PostCSS 사용</li>
                    <li>ClassComponent로 구현</li>
                  </ul>
                  <h4 className="description__title">Skills</h4>
                  <ul>
                    <li>#HTML #CSS(PostCSS) #JavaScript</li>
                    <li>#React(ClassComponent)</li>
                  </ul>
                  <h4 className="description__title">메인화면</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/129156321-5308e47b-2a66-4a21-b25d-0a104e73c136.gif"
                    alt=""
                  />
                  <h4 className="description__title">
                    Detail화면 (Video & Comments)
                  </h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/129161320-84fe619b-57ce-4e7b-9ab3-d0b5794c6564.gif"
                    alt=""
                  />
                  <h4 className="description__title">검색</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/129162256-417a226d-4170-4630-bf5d-fd000d7d8c96.gif"
                    alt=""
                  />
                  <h4 className="description__title">Link</h4> <br />
                  <a
                    className="demo"
                    href="https://youtube-react-na.netlify.app/"
                  >
                    <i className="fas fa-home"></i>
                  </a>
                  <a
                    className="github"
                    href="https://github.com/Downey920/Youtube_React_ClassComponent"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="item starbucks js all">
              <a
                href="https://starbucks-na.netlify.app"
                className="item__left"
              ></a>
              <div className="item__right">
                <h4 className="right__title">스타벅스 메인페이지</h4>
                <div className="right__description">
                  <h4 className="description__title">
                    Purpose of this project
                  </h4>
                  <ul>
                    <li>HTML & CSS 능숙도 향상</li>
                    <li>다양한 에니메이션 구현</li>
                  </ul>
                  <h4 className="description__title">About Project</h4>
                  <ul>
                    <li>스타벅스 메인페이지 클론코딩</li>
                    <li>최대한 실제페이지와 가깝게 구현</li>
                  </ul>
                  <h4 className="description__title">Skills</h4>
                  <ul>
                    <li>#HTML #CSS #JavaScript</li>
                  </ul>
                  <h4 className="description__title">Link</h4> <br />
                  <a className="demo" href="https://starbucks-na.netlify.app">
                    <i className="fas fa-home"></i>
                  </a>
                  <a
                    className="github"
                    href="https://github.com/Downey920/starbucks"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="item carrotGame js all">
              <a
                href="https://downey920.github.io/CarrotGame/"
                className="item__left"
              ></a>
              <div className="item__right">
                <h4 className="right__title">Carrot Game</h4>
                <div className="right__description">
                  <h4 className="description__title">
                    Purpose of this project
                  </h4>
                  <ul>
                    <li>JavaScript DOM요소 조작하기</li>
                    <li>사운드 요소 다뤄보기</li>
                  </ul>
                  <h4 className="description__title">About Project</h4>
                  <ul>
                    <li>
                      기본적으로 게임 시작 버튼을 누르면 벌레와 당근이 랜덤한
                      위치에 뿌려진다. 시간 내에 벌레를 피하여 당근을 모두 클릭
                      하면 이긴다.
                    </li>
                  </ul>
                  <h4 className="description__title">Skills</h4>
                  <ul>
                    <li>#HTML #CSS #JavaScript</li>
                  </ul>
                  <h4 className="description__title">기본화면</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109944402-8a20ec80-7d19-11eb-8848-0ec74d61a41f.png"
                    alt=""
                  />
                  <h4 className="description__title">플레이화면</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109945357-7d50c880-7d1a-11eb-9313-9462dc36191f.png"
                    alt=""
                  />
                  <h4 className="description__title">TimeOut 될 경우</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109945988-20094700-7d1b-11eb-852f-d79c10532659.png"
                    alt=""
                  />
                  <h4 className="description__title">이겼을 경우</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109946132-4202c980-7d1b-11eb-999b-4474575576db.png"
                    alt=""
                  />
                  <h4 className="description__title">벌레를 클릭 시</h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109946225-58108a00-7d1b-11eb-840f-111643f6f317.png"
                    alt=""
                  />
                  <h4 className="description__title">
                    게임 진행중에 정지 버튼을 클릭 시
                  </h4>
                  <img
                    className="description__video"
                    src="https://user-images.githubusercontent.com/71444930/109946329-75455880-7d1b-11eb-994c-e0f6671ce9cc.png"
                    alt=""
                  />
                  <h4 className="description__title">Link</h4> <br />
                  <a
                    className="demo"
                    href="https://downey920.github.io/CarrotGame/"
                  >
                    <i className="fas fa-home"></i>
                  </a>
                  <a
                    className="github"
                    href="https://github.com/Downey920/CarrotGame"
                  >
                    <i className="fab fa-github-square"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Project;
