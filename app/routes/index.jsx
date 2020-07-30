// We only need to import the modules necessary for initial render
// When you add a first route be sure to remove the comment from the lines below.

import React, { lazy } from 'react';
import LazyComponent from 'Utility/LazyComponent';

const Home = lazy(() => import(/* webpackChunkName: "Home" */ './Home'));
// @generator routes:import

export const Components = {
  // @generator routes:component export
  Home,
};

export const createAuthRoutes = () => ({
  routes: [
    {
      path: '/',
      exact: true,
      component: props => <LazyComponent {...props} componentName="Home" />,
    }, // @generator routes:define:auth
  ],
});

// These routes don't need the user to be logged in.

export const createUnauthRoutes = () => ({
  routes: [
    // @generator routes:define:unauth
  ],
});

export default createAuthRoutes;
