import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav'
import WOW from "wowjs";
// import { Link } from 'react-router-dom'


class Projects extends Component{
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
        <h1 id="project">Prjoects</h1>
        <div className="container">
          <div className="panel">
            <div className="frame pro-one wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./flighttracker.png" /></div>
            <div className="frame pro-two wow bounceInDown"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./mytripplanner.png" /></div>
            <div className="frame pro-three wow slideInRight"
            data-wow-duration="1s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./seestar.png" /></div>
            <div className="frame pro-four wow slideInLeft"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./seestar.png" /></div>
            <div className="frame pro-five wow bounceInUp"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./seestar.png" /></div>
            <div className="frame pro-six wow slideInRight"
            data-wow-duration="2s"
            data-wow-delay="1s"
            data-wow-offset="10"
            data-wow-iteration="1"
                ><img src="./seestar.png" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
