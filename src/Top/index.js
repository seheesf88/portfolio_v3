import React, { Component } from 'react';
import './Top.css';
import WOW from "wowjs";
// import { Link } from 'react-router-dom'


class Top extends Component{
  constructor(){
    super()

  }


  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    return(
      <div className="top">
        <div className="wow slideInLeft"
        data-wow-duration="2s"
        data-wow-iteration="1"
        data-wow-offset="10"
        >
          <p>Hi, I am SeHee!</p>
          <p>I am Jr. Web developer!</p>
        </div>
    </div>
    )
  }
}

export default Top
