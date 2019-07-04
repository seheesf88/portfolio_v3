import React, { Component } from 'react';
import './Skills.css';
import Nav from '../Nav'
// import { Link } from 'react-router-dom'


class Skills extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div>
        <Nav />
        <h1>Skills</h1>
        <div className="skills">
          <h3>Techincal Skills</h3>
            <div>Language - Javascript, Python, HTML & CSS</div>
            <div>Frameworks - React.js, </div>
          <h3>Personal Skills</h3>

        </div>
      </div>
    )
  }
}

export default Skills
