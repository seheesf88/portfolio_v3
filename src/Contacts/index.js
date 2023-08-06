import React, { Component } from 'react';
import './Contact.css';

class Contacts extends Component{
  constructor(){
    super()

  }

  render(){
    return(
      <div className="contact-main">
        <h1>Contact.</h1>
        <div className="contact-container">
          <div className="avatar">
            <img id="avatar" src="./connect.jpg" />
          </div>
          <div className="avatar-discription">
            <div className="contact-intro">
              <div id="contact-name">SeHee</div>
              <div className="contact-address">San Francisco, CA</div>
              <div className="contact-address">seheesf88@gmail.com</div>
              <div className="contact-address" id="findmeon">Find me on..</div>
            </div>
            <div className="contact-info">
              <span className="contact-link"><a href="mailto:seheesf88@gmail.com"><img className="contact" src="./email.png" /></a></span>
              <span className="contact-link"><a href="https://www.linkedin.com/in/sehee-son/"><img className="contact" src="./linkedin-logo.png" /></a></span>
              <span className="contact-link"><a href="https://github.com/seheesf88"><img className="contact" src="./github.png" /></a></span>
              <span className="contact-link"><a href="../SeHee_Son_resume.pdf" download><img className="contact" src="./download.png" /></a></span>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts