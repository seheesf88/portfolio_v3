import React, { Component } from 'react';
import './MainPage.css';
import WOW from "wowjs";
// import { Link } from 'react-router-dom'


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
      <div className="top">
        <div className="wow slideInLeft"
        data-wow-duration="2s"
        data-wow-iteration="1"
        data-wow-offset="10"
        >
          <p>Hi, I am SeHee!</p>
          <p>I am a Jr. Web developer</p>
        </div>
      </div>
      <div className="partone">

      </div>
      <div className="parttwo">

      </div>
      <div className="bottom">

      </div>
    </div>
    )
  }
}

export default MainPage
