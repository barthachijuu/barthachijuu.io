/**
 *
 * Home
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 13-Jul-2020
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { HashLink as Link } from 'react-router-hash-link';
import { loadableComponent } from 'Utility/globalMethods';
import style from './style.js';

const Banner = loadableComponent('Banner');
const DotLoader = loadableComponent('DotLoader');
const ErrorPage = loadableComponent('ErrorPage');
const Navbar = loadableComponent('Navbar');
const Section = loadableComponent('Section');

const Home = (props) => {
  const classes = style();
  return (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta
        name="description"
        content="A React.js Boilerplate application"
      />
    </Helmet>
    {/failure/.test(props.enhancers.status) ? <ErrorPage /> : (
      /idle|loading/.test(props.enhancers.status) ? <DotLoader /> : (
        <div className={classes.container} id="home">
          <Navbar />
          <Banner name="I'm Bartolomeo Amico" />
          <p>
            <Link
              to="/#me"
              smooth
              className={classes.scrolldown}
            >
              <i className="fa fa-arrow-circle-down" />
            </Link>
          </p>
          <Section info={props.info} actions={props.actions} />
        </div>
      )
    )}
  </>
  );
};


Home.propTypes = {
  // Add here some propTypes
  actions: PropTypes.object,
  router: PropTypes.object,
  info: PropTypes.object,
  enhancers: PropTypes.object,
};

Home.defaultProps = {
  // Add here some default propTypes values
  actions: {},
  router: {},
  info: {},
  enhancers: {},
};

export default Home;
