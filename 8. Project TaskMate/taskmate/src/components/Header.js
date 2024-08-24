import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export const Header = () => {
  const [theme, SetTheme] = useState(
    JSON.parse(localStorage.getItem('theme')) || 'light'
  );

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" className="logoImg" />
      </div>
      <div className="themeSelector">
        <span
          onClick={() => {
            SetTheme('medium');
          }}
          className={theme === 'medium' ? 'activeTheme medium' : 'medium'}
        ></span>
        <span
          onClick={() => {
            SetTheme('dark');
          }}
          className={theme === 'dark' ? 'activeTheme dark' : 'dark'}
        ></span>
        <span
          onClick={() => {
            SetTheme('gOne');
          }}
          className={theme === 'gOne' ? 'activeTheme gOne' : 'gOne'}
        ></span>
        <span
          onClick={() => {
            SetTheme('light');
          }}
          className={theme === 'light' ? 'activeTheme light' : 'light'}
        ></span>
        <span
          onClick={() => {
            SetTheme('gTwo');
          }}
          className={theme === 'gTwo' ? 'activeTheme gTwo' : 'gTwo'}
        ></span>
        <span
          onClick={() => {
            SetTheme('gThree');
          }}
          className={theme === 'gThree' ? 'activeTheme gThree' : 'gThree'}
        ></span>
      </div>
    </header>
  );
};
