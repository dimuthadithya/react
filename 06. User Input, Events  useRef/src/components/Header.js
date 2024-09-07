import React from 'react';
import Logo from '../assets/logo.png';
import './Header.css'

export const Header = () => {
  return (
    <header>
      <div>
        <img src={Logo} alt="" />
        <a href="google.com">Home</a>
      </div>
    </header>
  );
};
