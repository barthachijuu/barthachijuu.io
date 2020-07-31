import React from 'react';
import loadable from '@loadable/component';

/** @function
 * * Handling the API Rest resposnse, and return data and different message for status code
 * @name handlingResponse
 * @param {object} data - The response of method
 * @return {object} - The response of method, with additional info
 */
export const handlingResponse = (data) => {
  if (data && data.status !== 200) {
    switch (data.status) {
    case 401:
      data.type = 'Unauthorized';
      break;
    case 404:
      data.type = 'Not Found';
      break;
    case 500:
      data.type = 'ServerError';
      break;
    default:
      data.type = 'Invalid Data';
      break;
    }
    return { error: data };
  }
  return { response: data };
};

/**  @function
 * * Handling the null case and set to safe
 *
 * @name nullSafe
 * @param {function} func
 * @param {*} fallbackValue
 * @returns {*} the value to set safe the method
 */
export const nullSafe = (func, fallbackValue) => {
  try {
    const value = func();
    return (value === null || value === undefined) ? fallbackValue : value;
  } catch (e) {
    return fallbackValue;
  }
};

/**  @function
 * * Import a component with loadable library
 *
 * @name loadableComponent
 * @returns {$Symbols} the required component
 */
export const loadableComponent = component => (
  loadable(() => import(/* webpackPrefetch: true */ `Components/${component}`), { fallback: <div> Loading... </div> }));
