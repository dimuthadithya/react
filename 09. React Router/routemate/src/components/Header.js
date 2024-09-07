import React from 'react';
import Logo from '../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <Link to="/" className="logo-name">
        <img src={Logo} alt="" />
        <span>RouteMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
