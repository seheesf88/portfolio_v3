import React, { Component } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom'


class Nav extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div className="navbar">
          <div className="nav-list" id="logo"><Link style={{ textDecoration: 'none'}} to="/">SEHEE.SON.</Link></div>
          <div className="nav-list item-list">

            <div className="nav-item"><Link style={{ textDecoration: 'none'}} to="/projects">Projects.</Link></div>
            <div className="nav-item"><Link style={{ textDecoration: 'none'}} to="/skills">Skills.</Link></div>
            <div className="nav-item"><Link style={{ textDecoration: 'none'}} to="/contact">Contact.</Link></div>
          </div>
      </div>
    )
  }
}

export default Nav


// <div className="nav-item"><Link style={{ textDecoration: 'none'}} to="/aboutme">About me.</Link></div>
