import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './NavBarV4.scss';

const NavBar = () => {
  const btns = [
    {
      text: "Skills",
      path: "/skills"
    },
    {
      text: "Projects",
      path: "/projects"
    },
    {
      text: "Experience",
      path: "/experience"
    },
    {
      text: "Contacts",
      path: "/contacts"
    }
  ];

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="navBar row px-2 g-0 px-md-5 py-2">
      <div className="navBar__logo col-6">
        <Link style={{ textDecoration: 'none'}} to="/">
          <img style={{ width: '180px', paddingTop: '18px'}} src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className={`navBar__items col-6 px-5 ${menuVisible ? 'show' : ''}`}>
        {
          btns.map((btn, idx) => {
            return (
              <div className="">
                <Link className="navBar__btn mx-5" key={idx} to={btn.path}>
                  <div class="navBar__btn-text">{ btn.text }</div>
                </Link>
              </div>
            )
          })
        }
      </div>
      <div className="navBar__hamburger col-6">
        <div className={`hamburger-icon ${menuVisible ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
