import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__name">
        SeHee(Software engineer)
      </div>
      <div className="header__status">
        <div className="header__status-light" />
        <span className="header__status-text">
          ON
        </span>
      </div>
    </div>
  );
}

export default Header;
