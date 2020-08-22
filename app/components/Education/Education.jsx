/**
 *
 * Education
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 17-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayDate } from 'Utility/utils';
import styles from './styles.js';


const Education = (props) => {
  const classes = styles();

  const viewEdu = (entry, index, total) => (
    <div className="row item" key={entry.institution}>
      <div className="twelve columns">
        <h3>{entry.institution}</h3>
        <p className={classes.info}>
          {entry.area}
          <span> &bull; </span>
          <span className={classes.infosummary}>{entry.summary}</span>
          <span> &bull; </span>
          <em className={classes.infosummary}>
            {getDisplayDate(entry.startDate, entry.endDate)}
          </em>
        </p>
        <p className={classes.courses}>Courses</p>
        {entry.courses.map(course => (
          <p className={classes.point}>
            <span className={classes.bulletpoint}>&bull; </span>
            {course}
          </p>
        ))}
      </div>
      {index === total ? <br /> : <hr />}
    </div>
  );
  return (
    <>
      <section id="edu" className={classes.edu}>
        <div className="row">
          <div className={`two columns ${classes.headercol}`}>
            <h1><span>Education</span></h1>
          </div>
          <div className={`ten columns ${classes.maincol}`}>
            {props.edu.map((entry, index) => (viewEdu(entry, index, props.edu.length - 1)))}
          </div>
        </div>
      </section>
    </>
  );
};

Education.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "edu". */
  edu: PropTypes.array,
};

Education.defaultProps = {
  // Add here some default propTypes values
  edu: [],
};

export default Education;
