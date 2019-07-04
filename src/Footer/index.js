import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

class Footer extends Component{
  constructor(){
    super()

  }

  render(){

    return(
      <div className="footer">
        <div className="footer-item">
          Linkedin
        </div>
        <div className="footer-item">
          Github
        </div>
        <div className="footer-item">
          Resume
        </div>
        <div className="footer-item">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}

export default Footer
