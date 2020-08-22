/**
 *
 * Work
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 16-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { getDisplayDate } from 'Utility/utils';
import styles from './styles.js';


const Work = (props) => {
  const classes = styles();
  const viewJob = (entry, index, total) => (
    <div className="row item">
      <div className="twelve columns">
        <h3><a href={entry.website}>{entry.company}</a></h3>
        <p className={classes.info}>
          {entry.position}
          <span> &bull; </span>
          <span className={classes.infosummary}>{entry.summary}</span>
          <span> &bull; </span>
          <em className={classes.infosummary}>
            {getDisplayDate(entry.startDate, entry.endDate)}
          </em>
        </p>
        {entry.highlights.map(point => (
          <p className={classes.point}>
            <span className={classes.bulletpoint}>&bull; </span>
            {point}
          </p>
        ))}
      </div>
      {index === total ? <br /> : <hr />}
    </div>
  );

  return (
    <>
      <section id="work" className={classes.work}>
        <div className="row">
          <div className={`two columns ${classes.headercol}`}>
            <h1><span>Work</span></h1>
          </div>
          <div className={`ten columns ${classes.maincol}`}>
            {props.works.map((entry, index) => (viewJob(entry, index, props.works.length - 1)))}
          </div>
        </div>
      </section>
    </>
  );
};

Work.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "works". */
  works: PropTypes.array,
};

Work.defaultProps = {
  // Add here some default propTypes values
  works: [],
};

export default Work;
