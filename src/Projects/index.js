import React, { Component } from 'react';
import './Projects.css';
import Nav from '../Nav'
import Footer from '../Footer'
import WOW from "wowjs";
import { Link } from 'react-router-dom'


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
        <div className="project-container">
        <h1 id="project">Projects</h1>
        <div className="project-one">
          <div className="panel">
            <div className="wow slideInRight project-items"
            data-wow-duration="2s"
            data-wow-iteration="1"
            data-wow-offset="10"
            >
              <div className="frame"><img className="project-pic" src="./mytripplanner.png" /></div>
              <div className="project-item-one">
                <div className="project-title">My Trip Planner</div>
                <div className="project-tech-stack">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React</span> + <span className="tech-stack">Node.js</span>
                </div>
                <div className="project-description">
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                </div>
                <div className="links">
                  <span><Link to="/">Github(Front-End)</Link></span> |
                  <span><Link to="/"> Github(Back-End)</Link></span> |
                  <span><Link to="/"> Heroku</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-two">
          <div className="panel">
            <div className="wow slideInLeft project-items"
            data-wow-duration="2s"
            data-wow-iteration="1"
            data-wow-offset="10"
            >
              <div className="project-item-two">
                <div className="project-title-two">Seestar</div>
                <div className="project-tech-stack-two">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React.js</span> + <span className="tech-stack">Python</span> + <span className="tech-stack">Flask</span>
                </div>
                <div className="project-description-two">
                  <ul>
                    <li>Recreated Instagram as a <span className="hightlight">React</span> application and <span className="hightlight">Flask</span> <span className="hightlight">RESTful API</span> with <span className="hightlight">CRUD</span> functionality, Image Upload, User Register/Login Authentication with password encryption, and Facebook <span className="hightlight">OAuth.</span></li>
                    <li>Organized relational data and models with the use of <span className="hightlight">PostgreSQL/SQLite</span> and carefully planned out database tables for User accounts, Following, Posts, Comments, Likes, and Images.</li>
                    <li>Improved proficiency in the efficient connection of front end / back end components, log in features and open authorization.</li>
                  </ul>
                  <div className="links">
                    <span><Link to="/">Github(Front-End)</Link></span> |
                    <span><Link to="/"> Github(Back-End)</Link></span> |
                    <span><Link to="/"> Heroku</Link></span>
                  </div>
                </div>
              </div>
              <div className="frame"><img className="project-pic" src="./seestar.png" /></div>
            </div>
          </div>
        </div>
        <div className="project-three">
          <div className="panel">
            <div className="wow slideInRight project-items"
            data-wow-duration="2s"
            data-wow-iteration="1"
            data-wow-offset="10"
            >
              <div className="frame"><img className="project-pic" src="./flighttracker.png" /></div>
              <div className="project-item-one">
                <div className="project-title">Flight Tracker</div>
                <div className="project-tech-stack">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React</span> + <span className="tech-stack">Node.js</span></div>
                <div className="project-description">
                  this app is kjdkfjkajlfjdkjaljdkjfkas
                </div>
                <div className="links">
                  <span><Link to="/">Github(Front-End)</Link></span> |
                  <span><Link to="/"> Github(Back-End)</Link></span> |
                  <span><Link to="/"> Heroku</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Projects
