/**
 *
 * Skills
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 17-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Skills = (props) => {
  const classes = styles();
  const handleMouseEnter = (e) => {
    e.target.style.background = '#11ABB0';
    e.target.style.transition = 'all .3s ease-in-out';
  };
  const handleMouseLeave = (e) => {
    e.target.style.background = '#313131';
  };

  const getSkills = skill => (
    <div className={`row ${classes.inside}`}>
      <h3>{skill.title}</h3>
      {skill.description.map(point => (
        <p className={classes.skillsummary}>{point}</p>
      ))}
      <div className={classes.bars}>
        {/Cross skills/i.test(skill.title) ? (
          skill.skillDetails.map(point => (
            <div className={classes.chip}>
              <div className={classes.chiphead}>{point.substr(0, 1).toUpperCase()}</div>
              <div className={classes.chipcontent}>{point}</div>
            </div>
          ))
        ) : (
          <ul className="skills">
            {skill.skillDetails.map(entry => (
              <li>
                <span
                  className={`${classes.barexpand} percentage${entry.level}`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
                <em>{entry.name}</em>
              </li>
            ))}
          </ul>)}
      </div>
    </div>
  );
  return (
    <>
      <section id="skills" className={classes.skills}>
        <div className="row skill">
          <div className={`two columns ${classes.headercol}`}>
            <h1><span>Skills</span></h1>
          </div>
          <div className={`ten columns ${classes.maincol}`}>
            {props.skills.map((skill, index) => (
              getSkills(skill, index)
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

Skills.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "skill". */
  skills: PropTypes.array.isRequired,
};

Skills.defaultProps = {
  // Add here some default propTypes values
};

export default Skills;
