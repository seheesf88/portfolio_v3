import React, { Component } from 'react';
import './Projects.css';
import WOW from "wowjs";

class Projects extends Component{
  constructor(){
    super();
  };

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    return(
      <div className="project-container container">
      <h1>Projects.</h1>

        <div className="project-one">
          <div className="panel">
            <div className="wow slideInRight project-items"
            data-wow-duration="3s"
            data-wow-iteration="1"
            data-wow-offset="10"
            >
              <div className="frame">
                <a href="https://react-flight-front.herokuapp.com/">
                  <img className="project-pic" src="./flighttracker.png" />
                </a>
              </div>
              <div className="project-item-one">
                <div className="project-title">The Chart app</div>
                <div className="project-tech-stack">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React</span> + <span className="tech-stack">Chart.js</span></div>
                <div className="project-description">
                  <ul>
                    <li>The Stock Price Visualization App is a user-friendly tool for visualizing daily stock prices of various companies.</li>
                    <li>Input a stock symbol and specify the desired number of days to generate a historical price chart.</li>
                    <li>Ideal for investors, curious individuals, and those interested in tracking stock trends, offering an easy and informative way to explore stock market data.</li>
                  </ul>
                </div>
                <div className="links">
                  <span><a href="https://github.com/seheesf88/the-chart-app"> Github</a></span> |
                  <span><a href="https://seheesf88.github.io/the-chart-app/">Try it</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-two">
          <div className="panel">
            <div className="wow slideInLeft project-items"
              data-wow-duration="3s"
              data-wow-iteration="1"
              data-wow-offset="10"
            >
              <div className="project-item-two">
                <div className="project-title-two">SeeStar</div>
                <div className="project-tech-stack-two">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React.js</span> + <span className="tech-stack">Python</span> + <span className="tech-stack">Flask</span>
                </div>
                <div className="project-description-two">
                  <ul className="project-description-ul">
                    <li>Recreated Instagram as a <span className="hightlight">React</span> application and <span className="hightlight">Flask</span> <span className="hightlight">RESTful API</span> with <span className="hightlight">CRUD</span> functionality, Image Upload, User Register/Login Authentication with password encryption, and Facebook <span className="hightlight">OAuth.</span></li>
                    <li>Organized relational data and models with the use of <span className="hightlight">PostgreSQL/SQLite</span> and carefully planned out database tables for User accounts, Following, Posts, Comments, Likes, and Images.</li>
                    <li>Improved proficiency in the efficient connection of front end / back end components, log in features and open authorization.</li>
                  </ul>
                  <div className="links">
                    <span><a href="https://git.generalassemb.ly/seheesf88/project4">Github(Front-End) </a></span> |
                    <span><a href="https://git.generalassemb.ly/seheesf88/project4-backend"> Github(Back-End) </a></span> |
                    <span><a href="https://star-frontend.herokuapp.com/"> Heroku</a></span>
                  </div>
                </div>
              </div>
              <div className="frame">
                <a href="https://star-frontend.herokuapp.com/">
                  <img className="project-pic" src="./seestar.png" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-three">
          <div className="panel">
            <div className="wow slideInRight project-items"
              data-wow-duration="3s"
              data-wow-iteration="1"
              data-wow-offset="10"
            >
              <div className="frame">
                <a href="https://react-tripplanner.herokuapp.com/">
                  <img className="project-pic" src="./mytripplanner.png" />
                </a>
              </div>
              <div className="project-item-one">
                <div className="project-title">My Trip Planner</div>
                <div className="project-tech-stack">
                  <span className="tech-stack">JavaScript</span> + <span className="tech-stack">React</span> + <span className="tech-stack">Node.js</span>
                </div>
                <div className="project-description">
                  <ul>
                    <li>This application is what a user can use to plan and manage a trip budget and itinerary. The user can share this information with other users.</li>
                    <li>This app includes a calendar and budget calculator.</li>
                  </ul>
                </div>
                <div className="links">
                  <span><a href="https://git.generalassemb.ly/seheesf88/react-project5">Github(Front-End) </a></span> |
                  <span><a href="https://git.generalassemb.ly/seheesf88/project5-back-end"> Github(Back-End) </a></span> |
                  <span><a href="https://react-tripplanner.herokuapp.com/"> Heroku</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
