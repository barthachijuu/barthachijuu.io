/**
 *
 * Social
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 15-Jul-2020
 */

import React from 'react';
import styles from './styles.js';


const Social = () => {
  const classes = styles();
  return (
    <>
      <ul className={classes.social}>
        <li>
          <a href="mailto:mail@barthachijuu.dev">
            <i className="fa fa-envelope" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bartoloamico/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="http://github.com/barthachijuu" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github" />
          </a>
        </li>
      </ul>
  </>
  );
};


export default Social;
