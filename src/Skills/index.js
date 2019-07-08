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

          <div className="skills-sets">
            <div className="skills-sets-items frameworks">
              <div className="title-sub">Frameworks & Library</div>
            </div>
            <div className="skills-sets-items databases">
              <div className="title-sub">Database</div>
            </div>
            <div className="skills-sets-items keywords">
              <div className="title-sub">Keywords</div>
                <ul>
                  <li>Debugging</li>
                  <li></li>
                </ul>
            </div>
            <div className="skills-sets-items personal">
              <div className="title-sub">Personal Skills</div>
                <ul>
                  <li>Detail-Oriented</li>
                  <li>Patient</li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills
