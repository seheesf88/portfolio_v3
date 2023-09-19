import React, { Component } from 'react';
import './Projects.scss';
import WOW from "wowjs";

class Projects extends Component{
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    const projectData = [
      {
        title: "Tom Riddle's Diary Chat App",
        img: "./img/magicDiary.png",
        githubLink: "https://github.com/seheesf88/magic-diary-chat",
        deployURl: "https://seheesf88.github.io/magic-diary-chat/",
        techStack: ["JavaScript", "Vue.js", "Sass", "bootstrap", "Node.js", "Express.js", "openai - fine-tunning"], 
        description: [
          "Tom Riddle's Diary is a unique and immersive chat application inspired by the character Tom Riddle from the Harry Potter series, specifically from Harry Potter and the Chamber of Secrets.",
          "This chat app features a chatbot named Tom Riddle, who is known for his cold and arrogant demeanor.",
          "Tom is trained to respond using magical world vocabularies and may show little interest in the non-magical world (also known as the muggle world)."
        ]
      },
      {
        title: "The Stock Chart app",
        img: "./img/chartApp.png",
        githubLink: "https://github.com/seheesf88/the-chart-app",
        deployURl: "https://seheesf88.github.io/the-chart-app/",
        techStack: ["JavaScript", "React.js", "chart.js"], 
        description: [
          "The Stock Price Visualization App is a user-friendly tool for visualizing daily stock prices of various companies.",
          "Input a stock symbol and specify the desired number of days to generate a historical price chart.",
          "Ideal for investors, curious individuals, and those interested in tracking stock trends, offering an easy and informative way to explore stock market data."
        ]
      }

    ]
    return(
      <div class="projects">
        <div className="h1 text-center pt-5">Projects.</div>
        <div className="projects__project-container mt-5">
          { 
            projectData.map((project, idx) => {
              return (
              <div 
                className="projects__project-panel mx-2 px-4"
              >
                <div className="projects__project-img-container">
                  <img src={project.img} alt="project image" className="projects__project-img"/>
                </div>
                <div className="projects__project-content py-5">
                  <div className="projects__project-title text-center">{project.title}</div>
                  <div className="projects__project-tech text-center mt-3">
                    {
                      project.techStack.map((tech, idx) => {
                        if (idx !== project.techStack.length - 1) {
                          return (
                            <span className="my-2"><span className="projects__project-tech-stack">{tech}</span><span className="mx-2">+</span></span>
                          )
                        } else {
                          return (
                            <span className="my-2"><span className="projects__project-tech-stack">{tech}</span></span>
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
