/**
 *
 * Me
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 16-Jul-2020
 */

import React from 'react';
import styles from './styles.js';
import formattedMessage from './languageModule';

const Me = () => {
  const classes = styles();
  return (
    <>
      <section id="me" className={classes.me}>
        <div className="row">
          <div className="two columns">
            <img className={classes.profilepic} src="images/profilepic.jpg" alt="" />
          </div>
          <div className={`ten columns ${classes.maincol}`}>
            <h2>About Me</h2>
            <p>{formattedMessage.process}</p>
            <p>{formattedMessage.skills}</p>
            <p>{formattedMessage.coach}</p>
            <div className="row row">
              <div className={`columns ${classes.contactdetails}`}>
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Milan</span>
                  <br />
                  <span>
                    Italy
                  </span>
                  <br />
                  <span>
                    <i className="fa fa-at" />
                      (+39)320 8655003
                  </span>
                  <br />
                  <a href="mailto:mail@barthachijuu.dev">
                    mail@barthachijuu.dev
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Me;
