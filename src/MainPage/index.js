import React, { Component } from 'react';
import './MainPage.css';
import WOW from "wowjs";
import { Link } from 'react-router-dom'


class MainPage extends Component{
  constructor(){
    super()

  }


  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    return(
    <div className="main">
      <div className="intro">
          <p className="intro-item">Hi, I am SeHee</p>
          <p className="intro-item">I am Web Developer</p>
          <div className="keywords">
            <span>#Web development </span>
            <span>#Passion </span>
            <span>#Javascript </span>
            <span>#Python </span>
            <span>#Debugging </span>
            <span>#Customer Service </span>
            <span>#Hackathon </span>
            <span>#React </span>
          </div>
      </div>

      <div className="part-one">
        <div className="wow slideInRight"
        data-wow-duration="2s"
        data-wow-iteration="1"
        data-wow-offset="10"
        >
          <p className="part-one-item">I am an engineer</p>
          <p className="part-one-item">dfnkdnfkndknfk</p>
        </div>
      </div>
      <div className="part-two">

        <div className="wow slideInLeft"
        data-wow-duration="2s"
        data-wow-iteration="1"
        data-wow-offset="10"
        >
          <p className="part-two-item">I am an artist</p>
          <p className="part-two-item">experienced ux/ui designer... blah</p>
          <Link to="/projects">Check out my artstic</Link>
        </div>


      </div>
      <div className="part-three">

        <div className="wow slideInLeft"
        data-wow-duration="2s"
        data-wow-iteration="1"
        data-wow-offset="10"
        >
          <p className="part-three-item">I am a connector</p>
          <p className="part-three-item">bljkdjfkdjk</p>
        </div>

      </div>
    </div>
    )
  }
}

export default MainPage
