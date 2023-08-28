import React, { Component } from 'react';
import './Skills.css';
import WOW from "wowjs";


class Skills extends Component{
  constructor(){
    super()

  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    return(
      <div className="container">
        <h1>Skills.</h1>
        <div className="container-skills">
          <div className="skill-panel">
            <div className="skill-items wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./js.png" />
            </div>
            <div className="skill-items wow fadeInDown"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./python.png" />
            </div>
            <div className="skill-items wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./html.png" />
            </div>
            <div className="skill-items wow slideInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./css.png" />
            </div>
          </div>
        </div>
        <div className="skills-sets">
          <div className="skillbox">
            <div className="title-img"><img className="skill-img" src="./book.png" /></div>
            <div className="skills-sets-items frameworks">
              <div className="title-sub line">Frameworks & Libraries</div>
              <ul className="skill-list">
                <li><img className="bullet" src="./bullet.png" />React.js + Redux</li>
                <li><img className="bullet" src="./bullet.png" />Vue.js + Vuex</li>
                <li><img className="bullet" src="./bullet.png" />Node.js</li>
                <li><img className="bullet" src="./bullet.png" />Flask</li>
                <li><img className="bullet" src="./bullet.png" />Django</li>
                <li><img className="bullet" src="./bullet.png" />JQuery / Vanila.js</li>
                <li><img className="bullet" src="./bullet.png" />Express.js</li>
                <li><img className="bullet" src="./bullet.png" />Bootstrap</li>
              </ul>
            </div>
          </div>
          <div className="skillbox">
            <div className="title-img"><img className="skill-img" src="./database.png" /></div>
              <div className="skills-sets-items databases">
                <div className="title-sub oneline">Database</div>
                <ul className="skill-list">
                  <li><img className="bullet" src="./bullet.png" />NoSQL</li>
                  <li className="space">- MongoDB</li>
                  <li><img className="bullet" src="./bullet.png" />SQL - SQLite, </li>
                  <li className="space">- PostgreSQL</li>
                  <li><img className="bullet" src="./bullet.png" />Firebase</li>
                  <li><img className="bullet" src="./bullet.png" />MongoDB atlas</li>
                </ul>
              </div>
          </div>
          <div className="skillbox">
            <div className="title-img"><img className="skill-img" src="./idea.png" /></div>
              <div className="skills-sets-items methodologies">
                <div className="title-sub line">Methodologies & Others</div>
                <ul className="skill-list">
                  <li><img className="bullet" src="./bullet.png" />RESTful architechture</li>
                  <li><img className="bullet" src="./bullet.png" />CRUD pattern</li>
                  <li><img className="bullet" src="./bullet.png" />MVC pattern</li>
                  <li><img className="bullet" src="./bullet.png" />Responsive Desigin</li>
                  <li><img className="bullet" src="./bullet.png" />UX/UI</li>
                  <li><img className="bullet" src="./bullet.png" />Debugging / Testing</li>
                  <li><img className="bullet" src="./bullet.png" />Troubleshooting</li>
                </ul>
            </div>
          </div>
          <div className="skillbox">
            <div className="title-img"><img className="skill-img" src="./skill.png" /></div>
              <div className="skills-sets-items personal">
                <div className="title-sub oneline">Personal Skills</div>
                <ul className="skill-list">
                  <li><img className="bullet" src="./bullet.png" />Detail-Oriented</li>
                  <li><img className="bullet" src="./bullet.png" />Problem-Solving</li>
                  <li><img className="bullet" src="./bullet.png" />Teamwork</li>
                  <li><img className="bullet" src="./bullet.png" />Communication</li>
                  <li><img className="bullet" src="./bullet.png" />Customer Service</li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Skills