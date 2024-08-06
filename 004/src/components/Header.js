import React from 'react';
import Logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
      <a href="exenova.com">Home</a>
    </header>
  );
};
