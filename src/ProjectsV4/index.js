import React, { Component } from 'react';
import './Projects.scss';
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
    const projectData = [
      {
        title: "The Chart app",
        img: "./img/chartApp.png",
        githubLink: "https://github.com/seheesf88/the-chart-app",
        deployURl: "https://seheesf88.github.io/the-chart-app/",
        techStack: ["JavaScript", "React.js", "chart.js"], 
        description: [
          "The Stock Price Visualization App is a user-friendly tool for visualizing daily stock prices of various companies.",
          "Input a stock symbol and specify the desired number of days to generate a historical price chart.",
          "Ideal for investors, curious individuals, and those interested in tracking stock trends, offering an easy and informative way to explore stock market data."
        ]
      },
    ]
    return(
      <div class="projects">
        <h1 className="text-center my-5">Projects.</h1>
        <div className="projects__project-container my-5">
          { 
            projectData.map((project, idx) => {
              return (
                <div 
                  className="projects__project-panel mx-2 px-4"
                >
                <div className="projects__project-img-container">
                  <a href={project.githubLink}>
                    <img src={project.img} className="projects__project-img"/>
                  </a>
                </div>
                <div className="projects__project-content py-5">
                  <div className="projects__project-title text-center mb-3">{project.title}</div>
                  <div className="projects__project-tech text-center">
                    {
                      project.techStack.map((tech, idx) => {
                        if (idx !== project.techStack.length - 1) {
                          return (
                            <span><span className="projects__project-tech-stack">{tech}</span><span className="mx-2">+</span></span>
                          )
                        } else {
                          return (
                            <span><span className="projects__project-tech-stack">{tech}</span></span>
                          )
                        }
                      })
                    }
                  </div>
                  <div className="projects__project-description my-2">
                    <ul>
                      {
                        project.description.map((li, idx) => {
                          return (
                            <li key={idx}>{li}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
    
                  <div className="projects__project-links text-center">
                    <a href={project.githubLink}> Github</a>
                    <span className="mx-3"> | </span>
                    <a href={project.deployURl}>Try it</a>
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Projects
