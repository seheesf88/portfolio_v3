import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav'
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
        <div className="title-tech">part 1. Techincal Skills</div>
          <div className="skill-panel">
            <div className="skill-items wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./js.png" /></div>
            <div className="skill-items wow bounceInDown"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./python.png" /></div>
            <div className="skill-items wow bounceInUp"
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

          <div className="box-container">
            <div className="box-items">
            </div>
            <div className="box-items">
            </div>
          </div>



        <div className="title-personal">part 2. Personal Skills</div>
        </div>
      </div>
    )
  }
}

export default Skills
