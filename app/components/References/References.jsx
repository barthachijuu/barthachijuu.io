/**
 *
 * References
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 27-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import styles from './styles.js';


const References = (props) => {
  const classes = styles();
  const settings = {
    autoplay: true,
    decorators: [],
    framePadding: '10px',
    cellSpacing: 30,
    wrapAround: true,
    withoutControls: true,
    enableKeyboardControls: false,
    heightMode: 'current',
  };

  const getRefs = refs => (
    <div>
      <blockquote>
        <p>{refs.reference}</p>
        <cite>
          {refs.name}
          <br />
          {`${refs.position}, ${refs.company}`}
        </cite>
      </blockquote>
    </div>
  );

  return (
    <>
      <section id="refs" className={classes.references}>
        <div className={classes.textcontainer}>
          <div className="row">
            <div className={`two columns ${classes.headercol}`}>
              <h1>
                <i className={`fa fa-quote-left ${classes.citation}`} />
                <span>References</span>
              </h1>
            </div>
            <div className={`columns ${classes.nukacontainer}`}>
              <div className={classes.nukaslider}>
                <Carousel {...settings}>
                  {props.references.map((entry, index) => (
                    getRefs(entry, index)
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

References.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "projects". */
  references: PropTypes.array.isRequired,
};

References.defaultProps = {
  // Add here some default propTypes values
};

export default References;
