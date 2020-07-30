/**
 *
 * Projects
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 21-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-responsive-modal';
import styles from './styles.js';

const Projects = (props) => {
  const classes = styles();
  const getProjects = (project, index) => (
    <div className="columns">
      {/* eslint-disable */}
      <div className={classes.itemwrap} onClick={() => props.openModal({ status: true, idx: index })}>
      {/* eslint-enable */}
        <img
          src={project.image.thumb}
          alt={project.name}
        />
        <div className={classes.overlay}>
          <div className={classes.itemmeta}>
            <h5>{project.name}</h5>
            <p>{project.category}</p>
          </div>
        </div>
      </div>
      <Modal
        open={project.isOpen}
        onClose={() => props.closeModal({ status: false, idx: index })} /* eslint-disable-line */
        center
        classNames={{
          animationIn: 'customEnterAnimation',
          animationOut: 'customLeaveAnimation',
        }}
        animationDuration={1000}
      >
        <div className={classes.modalContent}>
          <img
            src={project.image.modal}
            alt={project.name}
          />
          <div className={classes.description}>
            <h5>{project.name}</h5>
            <p>{project.summary}</p>
            <span className={classes.categories}>
              <i className="fa fa-tag" />
              {project.keywords.join(', ')}
            </span>
          </div>
          <div className={classes.link}>
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Details
            </a>
            <button
              type="button"
              className={classes.popupdismiss}
              onClick={() => props.closeModal({ status: false, idx: index })}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );

  return (
    <>
      <section id="portfolio" className={classes.projects}>
        <div className="row">
          <div className="offset-2 ten columns collapsed">
            <h1>Portfolio</h1>
            <div id="portfolio-wrapper" className={`${classes.portfoliowrapper} bgrid-quarters s-bgrid-thirds cf`}>
              {props.projects.map((entry, index) => (
                getProjects(entry, index)
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Projects.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "projects". */
  projects: PropTypes.array.isRequired,
  /** Description of prop "openModal". */
  openModal: PropTypes.func.isRequired,
  /** Description of prop "closeModal". */
  closeModal: PropTypes.func.isRequired,
};

Projects.defaultProps = {
  // Add here some default propTypes values
};

export default Projects;
