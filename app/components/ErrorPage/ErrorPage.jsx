/**
 *
 * ErrorPage
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 28-Jul-2020
 */

import React from 'react';
import styles from './styles.js';


const ErrorPage = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.errorcontainer}>
        <div className={classes.notfound}>
          <h1>500</h1>
          <h3>Server Error</h3>
          <h2>
            Sorry for the inconvenience, but there seems to be a problem with the server.
            <br />
            In the meantime, you can visit mine
          </h2>
          <a href="https://github.com/barthachijuu">Github Page</a>
        </div>
      </div>
    </>
  );
};


export default ErrorPage;
