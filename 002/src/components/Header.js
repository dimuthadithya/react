import React from 'react';
import Logo from '../assets/logo.png';
import './header.css';

export const Header = () => {
  return (
    <>
      <img src={Logo} alt="logo" className="logo" />
      <div>this is a header</div>
    </>
  );
};
