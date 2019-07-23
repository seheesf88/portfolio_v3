import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav'
import Footer from '../Footer'
import WOW from "wowjs";
// import { Link } from 'react-router-dom'


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
      <div>
        <Nav />
        <h1>Skills</h1>
        <div className="container-skills">
          <div className="skill-panel">
            <div className="skill-items wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./js.png" /></div>
            <div className="skill-items wow fadeInDown"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./python.png" /></div>
            <div className="skill-items wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./html.png" /></div>
            <div className="skill-items wow slideInRight"
            data-wow-duration="1s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./css.png" /></div>
          </div>
        </div>
        <div className="skills-sets">
          <div className="skills-sets-items frameworks">
            <div className="title-sub">Frameworks & Library</div>
            <ul className="skill-list">
              <li>React.js + Redux</li>
              <li>Flask</li>
              <li>JQuery</li>
              <li>Vanila.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skills-sets-items databases">
            <div className="title-sub">Database</div>
            <ul className="skill-list">
              <li>NoSQL - MongoDB</li>
              <li>SQL - SQLite, PostgreSQL</li>
              <li>Firebase</li>
              <li>MongoDB atlas</li>
            </ul>
          </div>
        </div>

        <div className="skills-sets">
          <div className="skills-sets-items methodologies">
            <div className="title-sub">Methodologies & Others</div>
              <ul className="skill-list">
                <li>RESTful architechture</li>
                <li>CRUD pattern</li>
                <li>MVC pattern</li>
                <li>Responsive Desigin</li>
                <li>Debugging</li>
                <li>Troulbleshooting</li>
              </ul>
          </div>
          <div className="skills-sets-items personal">
            <div className="title-sub">Personal Skills</div>
              <ul className="skill-list">
                <li>Detail-Oriented</li>
                <li>Problem-Solving</li>
                <li>Teamwork</li>
                <li>Strong Communication</li>
                <li>Customer Service</li>
              </ul>
          </div>
        </div>
    </div>
    )
  }
}

export default Skills
