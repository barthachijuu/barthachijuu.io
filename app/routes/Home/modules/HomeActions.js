/*
 *
 * Home Actions
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 13-Jul-2020
 */

import { createRequestTypes, createAction, MakeRequest } from 'Store/actions/index';

export const actionTypes = {
  GET_INFO: 'home/get_info',
  OPEN_MODAL: 'home/open_modal',
  CLOSE_MODAL: 'home/close_modal',
  // @generator action:route:type
  ...createRequestTypes('home', 'GET_INFO'),
// @generator action:route:type:request
};

// ------------------------------------
// Actions
// ------------------------------------
// @generator action:route:request
/** @action request
* * Insert a description
* @name getInfo
* @return {object} - The action object
*/
export const getInfo = new MakeRequest('home/get_info');

// @generator action:route
/** @action
* * Insert a description
* @name CloseModal
* @return {object} - The payload object
*/
export const doCloseModal = payload => createAction(actionTypes.CLOSE_MODAL, payload);
/** @action
* * Insert a description
* @name OpenModal
* @return {object} - The payload object
*/
export const doOpenModal = payload => createAction(actionTypes.OPEN_MODAL, payload);
/** @action
* * Insert a description
* @name GetInfo
* @return {object} - The payload object
*/
export const doGetInfo = payload => createAction(actionTypes.GET_INFO, payload);
