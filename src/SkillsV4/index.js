import React, { Component } from 'react';
import './Skills.scss';
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
    const skills = [
      {
        img: "./book.png",
        title : "Frameworks & Libraries",
        list : ["React.js + Redux", "Vue.js + Vuex", "Node.js", "Flask", "Django", "JQuery", "Express.js", "Bootstraps"]
      },
      {
        img: "./database.png",
        title : "Database",
        list : ["MongoDB", "Firebase", "PostgreSQL", "SQLite"]
      },
      {
        img: "./idea.png",
        title : "Methodologies & Others",
        list : ["RESTful architechture", "CRUD pattern", "MVC pattern", "Responsive Design", "UX/UI"]
      },
      {
        img: "./skill.png",
        title : "Personal Skills",
        list : ["Detail-Oriented", "Problem-solving", "Teamwork", "Communication"]
      },
    ];

    return(
      <div className="skills">
        <h1>Skills.</h1>
        <div className="skills__languages mt-3 my-md-5">
          <div className="skills__languages-sets">
            <div className="skills__languages-sets-item wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./js.png" />
            </div>
            <div className="skills__languages-sets-item wow fadeInDown"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./python.png" />
            </div>
            <div className="skills__languages-sets-item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./html.png" />
            </div>
            <div className="skills__languages-sets-item wow slideInRight"
              data-wow-duration="1s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./css.png" />
            </div>
          </div>
        </div>
        <div className="skills__items mt-md-5 pt-5">
          {
            skills.map((set, idx) => {
              return (
                <div className="skills__items-sets" key={idx}>
                  <div className="skills__items-sets-img">
                    <img src={set.img} />
                  </div>
                  <div className="skills__items-sets-content">
                    <div className="skills__items-sets-title my-3 my-md-5">{set.title}</div>
                    <ul className="skills__items-sets-list">
                      {
                        set.list.map((item, idx) => {
                          return (
                            <li key={idx} className="py-1">
                              <img className="bullet mr-3" src="./bullet.png" />{item}
                            </li>
                          )
                        })
                      }
                    </ul>
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
export default Skills