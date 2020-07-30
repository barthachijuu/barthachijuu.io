import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/HomeContainer';
// @generator route:import

const HomeRoot = props => (
  <>
    <Switch>
      <Route path={`${props.match.path}`} exact component={Home} />
      {/* @generator route:subroute */}
      <Redirect to={`${props.match.path}`} push />
    </Switch>
  </>
);

HomeRoot.propTypes = {
  match: PropTypes.object.isRequired,
};

export default HomeRoot;
