/**
 *
 * Section
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 15-Jul-2020
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Education from 'Components/Education';
import Footer from 'Components/Footer';
import Me from 'Components/Me';
import Projects from 'Components/Projects';
import References from 'Components/References';
import Skills from 'Components/Skills';
import Work from 'Components/Work';

const Section = (props) => {
  useEffect(() => {
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }
    }, 0);
  });
  return (
      <>
        <div>
          <Me id="me" />
          <Work id="work" works={props.info.work} />
          <Education id="edu" edu={props.info.education} />
          <Skills id="skills" skills={props.info.skills} />
          <Projects
            id="portfolio"
            projects={props.info.projects}
            openModal={props.actions.doOpenModal}
            closeModal={props.actions.doCloseModal}
          />
          <References id="refs" references={props.info.references} />
          <Footer />
        </div>
      </>
  );
};

Section.propTypes = {
  // Add here some propTypes
  // and set a minimal description i.e.
  /** Description of prop "info". */
  info: PropTypes.object,
  /** Description of prop "actions". */
  actions: PropTypes.object,
};

Section.defaultProps = {
  // Add here some default propTypes values
  info: {},
  actions: {},
};


export default Section;
