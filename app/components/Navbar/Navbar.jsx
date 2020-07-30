/**
 *
 * Navbar
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 14-Jul-2020
 */

import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.js';


const Navbar = () => {
  const classes = styles();

  const link = [
    { name: 'Home', link: '#home' },
    { name: 'Me', link: '#me' },
    { name: 'Work', link: '#work' },
    { name: 'Education', link: '#edu' },
    { name: 'Skills', link: '#skills' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'References', link: '#refs' },
  ];
  return (
  <>
    <nav id="nav-wrap" className={classes.navigator}>
      <a className="mobilebtn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobilebtn" href="#" title="Hide navigation">Hide navigation</a> {/* eslint-disable-line */}
      <ul id="nav" className="navmenu">
        {link.map(navigationLink => (
          <li>
            <Link
              to={`/${navigationLink.link}`}
              smooth
              onClick={() => {
                window.location.hash = `#${navigationLink.link}`;
              }
              }
            >
              {navigationLink.name}
            </Link>
          </li>))}
      </ul>
    </nav>
  </>
  );
};


export default Navbar;
