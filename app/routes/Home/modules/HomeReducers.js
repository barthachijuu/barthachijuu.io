/*
 * Home Reducer
 * Description
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 13-Jul-2020
 */

import produce from 'immer';
import { actionTypes } from './HomeActions';

const ACTION_HANDLERS = {
  [actionTypes.GET_INFO_SUCCESS]: produce((draft, action) => {
    draft.info = action.payload.response.data;
  }),
  [actionTypes.GET_INFO_FAILURE]: produce((draft) => {
    draft.info = undefined;
  }),
  [actionTypes.OPEN_MODAL]: produce((draft, action) => {
    draft.info.projects[action.payload.idx].isOpen = action.payload.status;
  }),
  [actionTypes.CLOSE_MODAL]: produce((draft, action) => {
    draft.info.projects[action.payload.idx].isOpen = action.payload.status;
  }),
  // @generator reducer:type:action

};

// The initial state of the home
const initialState = {
  info: {},
};

const home = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};

export default home;
