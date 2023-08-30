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
        list : ["React.js + Redux", "Vue.js + Vuex", "Node.js", "Flask", "Django", "Axios", "Express.js", "Bootstraps", "Vuetify"]
      },
      {
        img: "./database.png",
        title : "Methodologies & Database",
        list : ["RESTful architechture", "CRUD pattern", "MVC pattern", "Responsive Design", "MongoDB", "Firebase", "PostgreSQL", "SQLite"]
      },
      {
        img: "./idea.png",
        title : "Management & Tools",
        list : ["Agile scrum methodology", "Jira", "Notion", "Figma", "Github(Git controls)", "Jenkins(ci/cd)"]
      },
      {
        img: "./skill.png",
        title : "Personal Skills",
        list : ["Detail-Oriented", "Problem-solving", "Teamwork and Collaboration", "Communication", "Adaptability"]
      },
    ];

    return(
      <div className="skills">
        <div className="h1 text-center my-5">Skills.</div>
        <div className="skills__languages mt-3 my-md-5">
          <div className="skills__languages-sets">
            <div className="skills__languages-sets-item wow slideInLeft"
              data-wow-duration="4s"
              data-wow-delay="3s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./js.png" />
            </div>
            <div className="skills__languages-sets-item wow fadeInDown"
              data-wow-duration="4s"
              data-wow-delay="3s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./python.png" />
            </div>
            <div className="skills__languages-sets-item wow fadeInUp"
              data-wow-duration="4s"
              data-wow-delay="3s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./html.png" />
            </div>
            <div className="skills__languages-sets-item wow slideInRight"
              data-wow-duration="4s"
              data-wow-delay="3s"
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
                  <div className="skills__items-sets-content w-100">
                    <div className="skills__items-sets-title mt-5">{set.title}</div>
                    <ul className="skills__items-sets-list mt-md-5">
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