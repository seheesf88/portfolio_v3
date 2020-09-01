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
        <h1 className="">About Me.</h1>
        <div className="aboutme">
          <p className="aboutme-item">
            Highly analytical, creative and enthusiastic web developer with a powerful blend of exceptional insights and high-level performance in building and optimizing the performance of user-centric, high-impact websites for start-ups and established companies. An articulate developer with verifiable strengths to leverage technical, analytical and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive advantage and revenue growth. Well-equipped individual possessing an acute awareness of practical issues and trends, particularly accessibility, usability and emerging technologies. Able to provide rapid, robust and client-acclaimed front- and back-end web development optimizing user experience, sales, search engine ranking, brand positioning and related metrics, whilst demonstrating excellent communication skills.
          </p>
        </div>
      </div>
    )
  }
}

export default AboutMe
