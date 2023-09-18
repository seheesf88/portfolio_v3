import React, { Component } from 'react';
import './SkillsV4.scss';
import WOW from "wowjs";


class Skills extends Component{
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    const skills = [
      {
        img: "./book.png",
        title : "Frameworks & Libraries",
        list : ["React.js + Redux", "Vue.js + Vuex", "Node.js + Express.js", "Flask", "Django", "Axios", "Sass", "Bootstraps", "Vuetify"]
      },
      {
        img: "./database.png",
        title : "Methodologies & Database",
        list : ["RESTful architechture", "CRUD pattern", "MVC pattern", "Responsive Design", "MongoDB", "Firebase", "PostgreSQL", "SQLite"]
      },
      {
        img: "./idea.png",
        title : "Management & Tools",
        list : ["Agile scrum methodology", "Jira", "Notion", "Figma", "Github(Git controls)", "Bitbucket", "Jenkins(ci/cd)", "Graylog"]
      },
      {
        img: "./skill.png",
        title : "Personal Skills",
        list : ["Detail-Oriented", "Problem-solving", "Teamwork and Collaboration", "Communication", "Adaptability"]
      },
    ];

    return(
      <div className="skills pt-5">
        <div className="h1 text-center">Skills.</div>
        <div className="skills__languages mt-3 my-md-5">
          <div className="skills__languages-sets">
            <div className="skills__languages-sets-item wow slideInLeft"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./js.png" alt="js"/>
            </div>
            <div className="skills__languages-sets-item wow fadeInDown"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./python.png" alt="python" />
            </div>
            <div className="skills__languages-sets-item wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./html.png" alt="html" />
            </div>
            <div className="skills__languages-sets-item wow slideInRight"
              data-wow-duration="2s"
              data-wow-delay="1s"
              data-wow-offset="10"
              data-wow-iteration="1"
            >
              <img src="./css.png" alt="css" />
            </div>
          </div>
        </div>
        <div className="skills__items mt-3 mt-md-0">
          {
            skills.map((set, idx) => {
              return (
                <div className="skills__items-sets" key={idx}>
                  <div className="skills__items-sets-img">
                    <img src={set.img} alt="skill sets" />
                  </div>
                  <div className="skills__items-sets-title mt-2">{set.title}</div>
                  <ul className="skills__items-sets-content">
                    {
                      set.list.map((item, idx) => {
                        return (
                          <li key={idx} className="py-1">
                            <img className="bullet mr-3" src="./bullet.png" alt="bullet point"/>{item}
                          </li>
                        )
                      })
                    }
                  </ul>
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