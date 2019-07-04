import React, { Component } from 'react';
import './Contact.css';
import Nav from '../Nav'
import { Link } from 'react-router-dom'


class Contacts extends Component{
  constructor(){
    super()

  }

  render(){


    return(
      <div>
        <Nav />
        <h1>Contacthjhj</h1>
        <div>Email: seheesf88@gmail.com</div>
        <div>Linkedin: <Link to=""></Link> </div>
        <div>Github: <Link to=""></Link> </div>
        <div>Resume: <span>Download</span></div>
      </div>
    )
  }
}

export default Contacts
