import React from 'react';
import './NavBar.scss';

const NavBar = () => {
  const btns = [
    {
      text: "chat with SeHee",
      icon: "./icons/face.svg",
      alt: "",
      btnHandler: () => {
        alert('here')
      }
    },
    {
      text: "Share My Project",
      icon: "./icons/phone.svg",
      alt: "",
      btnHandler: () => {
        alert('here')
      }
    },
    {
      text: "Participants",
      icon: "./icons/phone.svg",
      alt: "",
      btnHandler: () => {
        alert('here')
      }
    },
    {
      text: "Contacts",
      icon: "./icons/phone.svg",
      alt: "",
      btnHandler: () => {
        alert('here')
      }
    }
  ];

  return (
    <div className="navBar">
      {
        btns.map((btn, idx) => {
          return (
            <div className="navBar__btn" key={idx} onClick={btn.btnHandler}>
              <img src={btn.icon} className="navBar__btn-icon" alt={btn.alt} />
              <div class="navBar__btn-text">{ btn.text }</div>
            </div>
          )
        })
      }
    </div>
  );
}

export default NavBar;
