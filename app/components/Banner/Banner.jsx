/**
 *
 * Banner
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 14-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import Social from 'Components/Social';
import styles from './styles.js';
import formattedMessage from './languageModule';

const Banner = (props) => {
  const classes = styles();
  return (
    <>
      <div className={`row ${classes.banner}`}>
        <div className={classes.bannertext}>
          <h1>{props.name}</h1>
          <h3>{formattedMessage.presentation}</h3>
          <hr />
          <Social />
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "name". */
  name: PropTypes.string,
};

Banner.defaultProps = {
  // Add here some default propTypes values
  name: '',
};

export default Banner;
