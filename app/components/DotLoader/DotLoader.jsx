/**
 *
 * DotLoader
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 16-Jul-2020
 */

import React from 'react';
import styles from './styles.js';

const DotLoader = () => {
  const classes = styles();
  return (
    <>
      <div className={classes.loadingpage}>
        <div className={classes.loadingcontainer}>
          <div className={classes.cmspinner} />
        </div>
      </div>
    </>
  );
};


export default DotLoader;
