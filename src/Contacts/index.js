import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav'
// import { Link } from 'react-router-dom'


class Contact extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div>
        <Nav />
        <h1>Contact</h1>
        <div>Email: seheesf88@gmail.com</div>
        <div>Linkedin: </div>
        <div>Github: </div>
        <div>Resume: <span>Download</span></div>
      </div>
    )
  }
}

export default Contact
