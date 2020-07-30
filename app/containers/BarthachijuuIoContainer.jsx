/**
 *
 * BarthachijuuIo
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import injectSheet from 'react-jss';
import style from '../styles/jss/main';


class BarthachijuuIoContainer extends Component {
  static propTypes = {
    authRoutes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    }))).isRequired,
    noauthRoutes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.shape({
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
      component: PropTypes.func.isRequired,
    }))).isRequired,
    store: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.store.dispatch({
      type: 'enhancers/status_loading',
    });
    setTimeout(() => {
      this.props.store.dispatch({
        type: 'home/get_info',
      });
    }, 1000);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { authRoutes, noauthRoutes } = this.props;
    const loggedApp = (
      authRoutes.routes.map(({ component, ...otherRouteProp }) => (
        <Route {...otherRouteProp} key={otherRouteProp.path} render={component} />
      ))
    );

    return (
      <>
        <Router>
          <div className="main-container">
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
            >
              <meta name="description" content="A React.js Boilerplate" />
            </Helmet>
            <Route path="/" />
            <Switch>
              {noauthRoutes.routes.map(({ component, ...otherRouteProp }) => (
                <Route {...otherRouteProp} key={otherRouteProp.path} render={component} />
              ))}
              {loggedApp}
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default injectSheet(style)(BarthachijuuIoContainer);
