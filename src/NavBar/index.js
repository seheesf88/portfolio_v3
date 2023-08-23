import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.scss';

const NavBar = () => {
  const btns = [
    {
      text: "chat with SeHee",
      icon: "./icons/face.svg",
      alt: "face",
      path: "/"
    },
    {
      text: "Share My Project",
      icon: "./icons/phone.svg",
      alt: "phone",
      path: "/skills"
    },
    {
      text: "Participants",
      icon: "./icons/phone.svg",
      alt: "phone",
      path: "/projects"
    },
    {
      text: "Contacts",
      icon: "./icons/phone.svg",
      alt: "phone",
      path: "/contacts"
    }
  ];

  return (
    <div className="navBar">
      {
        btns.map((btn, idx) => {
          return (
            <Link className="navBar__btn" key={idx} to={btn.path}>
              <img src={btn.icon} className="navBar__btn-icon" alt={btn.alt} />
              <div class="navBar__btn-text">{ btn.text }</div>
            </Link>
          )
        })
      }
    </div>
  );
}

export default NavBar;
