/**
 *
 * Footer
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 27-Jul-2020
 */

import React from 'react';
import styles from './styles.js';


const Footer = () => {
  const classes = styles();
  return (
    <>
      <footer className={classes.footer}>
        <div className="row">
          <div className="twelve columns">
            <ul className={classes.sociallink}>
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
            <ul className={classes.copyright}>
              <li>
                This site is developed in React.js by&nbsp;
                <a
                  href="https://barthachijuu.dev"
                  title="Bartolomeo Amico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Bartolomeo Amico&nbsp;
                </a>
                from the original design of Ceevee from&nbsp;
                <a
                  href="http://www.styleshout.com/"
                  title="Styleshout"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Styleshout
                </a>
                &nbsp; and the&nbsp;
                <a
                  href="https://github.com/barthachijuu/FeReactArk/"
                  title="Fe React Ark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 Fe React Ark project
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.gotop}>
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-arrow-circle-up" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};


export default Footer;
