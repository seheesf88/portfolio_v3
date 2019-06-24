import React, { Component } from 'react';
import './AboutMe.css';
import Nav from '../Nav'
// import { Link } from 'react-router-dom'


class AboutMe extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div>
        <Nav />
        <h1>About Me</h1>

      </div>
    )
  }
}

export default AboutMe
