import React from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" className="logoImg" />
      </div>
      <div className="themeSelector">
        <span className="medium"></span>
        <span className="dark"></span>
        <span className="gOne"></span>
        <span className="light activeTheme"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
