import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../stylesheets/navbar.scss';
import { Tooltip } from '@mui/material';
import {
  LightMode, DarkMode, Menu, Close,
} from '@mui/icons-material';
// import Iconbar from './Iconbar';
import ModeContext from '../contexts/ModeContext';
import '../stylesheets/animation.scss';
import useWindowSize from '../hooks/useWindowSize';
import useDisplay from '../hooks/useDisplay';

const Navbar = () => {
  const { mode, handleMode } = useContext(ModeContext);
  const { display, handleDisplay } = useDisplay();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (mode) {
      document.querySelector('nav').classList.add('lightnav');
      document.querySelector('nav').classList.remove('darknav');
      document.querySelector('.mobile-menu').style.backgroundColor = '#fff';
      document.querySelector('.mobile-menu').style.color = '#111';
    } else {
      document.querySelector('nav').classList.add('darknav');
      document.querySelector('nav').classList.remove('lightnav');
      document.querySelector('.mobile-menu').style.backgroundColor = '#000';
      document.querySelector('.mobile-menu').style.color = 'lightgray';
    }
  });

  return (
    <>
      <nav className="darknav">
        {windowSize.innerWidth > 768 && (
          <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="projects">Projects</NavLink>
            <NavLink to="recommendations">Recommendations</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <div
              id="modeDiv transition"
              style={{ position: 'absolute', top: '1rem', right: '1rem' }}
            >
              {mode ? (
                <>
                  <Tooltip title="Change to Light Mode">

                    <DarkMode onClick={handleMode} color="#111" cursor="pointer" />
                  </Tooltip>
                </>
              ) : (
                <>
                  <Tooltip title="Change to Dark Mode">
                    <LightMode onClick={handleMode} color="#fff" cursor="pointer" />
                  </Tooltip>
                </>
              )}
            </div>
          </>
        )}
        {windowSize.innerWidth < 768 && display === 'none' && (
          <Menu onClick={handleDisplay} color="inherit" cursor="pointer" />
        )}
        {windowSize.innerWidth < 768 && display === 'block' && (
          <Close onClick={handleDisplay} color="inherit" cursor="pointer" />
        )}
        <div
          id="modeDiv transition"
          style={{ position: 'absolute', top: '1rem', right: '1rem' }}
        >
          {mode ? (
            <>
              <Tooltip title="Change to Light Mode">
                <DarkMode onClick={handleMode} color="#111" cursor="pointer" />
              </Tooltip>
            </>
          ) : (
            <>
              <Tooltip title="Change to Dark Mode">
                <LightMode onClick={handleMode} color="#fff" cursor="pointer" />
              </Tooltip>
            </>
          )}
        </div>
      </nav>
      <div style={{ display }} className="mobile-menu slide-in-left">
        <ul>
          <li className="links-motion">
            <NavLink to="/" onClick={handleDisplay}>
              Home
            </NavLink>
          </li>
          <li className="links-motion">
            <NavLink to="about" onClick={handleDisplay}>
              About
            </NavLink>
          </li>
          <li className="links-motion">
            <NavLink to="projects" onClick={handleDisplay}>
              Projects
            </NavLink>
          </li>
          <li className="links-motion">
            <NavLink to="recommendations" onClick={handleDisplay}>
              Recommendations
            </NavLink>
          </li>
          <li className="links-motion">
            <NavLink to="contact" onClick={handleDisplay}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <Iconbar /> */}
      <Outlet />
    </>
  );
};

export default Navbar;
