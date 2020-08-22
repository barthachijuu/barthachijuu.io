/**
 *
 * Jest Unit Test for
 * Home Redux Modules
 *
 */

import produce from 'immer';
import Home from '../modules/HomeReducers';
import { actionTypes } from '../modules/HomeActions';

const state = {
  info: {
    projects: [
      { name: '', isOpen: false },
      { name: '', isOpen: false },
    ],
  },
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(Home(undefined, {})).toEqual({
      info: {},
    });
  });
  it('should change the modal state to open it', () => {
    expect(Home({ isOpen: true }, {
      types: actionTypes.OPEN_MODAL,
      payload: { idx: 0, status: true },
    })).toEqual({
      isOpen: true,
    });
  });
  it('should change the modal state to close it', () => {
    expect(Home({ isOpen: false }, {
      types: actionTypes.CLOSE_MODAL,
      payload: { idx: 0, status: false },
    })).toEqual({
      isOpen: false,
    });
  });
  it('should handle GET_INFO_SUCCESS action', () => {
    const storeState = Home(state, {
      type: actionTypes.GET_INFO_SUCCESS,
      payload: { response: { data: [] } },
    });
    const newstate = produce(state, (draft) => {
      draft.info = [];
    });
    expect(storeState).toEqual(newstate);
  });
  it('should handle GET_INFO_FAILURE action', () => {
    const storeState = Home(state, {
      type: actionTypes.GET_INFO_FAILURE,
      payload: undefined,
    });
    const newstate = produce(state, (draft) => {
      draft.info = undefined;
    });
    expect(storeState).toEqual(newstate);
  });
  it('should handle OPEN_MODAL action', () => {
    const storeState = Home(state, {
      type: actionTypes.OPEN_MODAL,
      payload: { payload: { idx: 0, status: true } },
    });
    const newstate = produce(state, (draft, action) => {
      draft.info.projects[action.payload.idx].isOpen = action.payload.status;
    });
    expect(storeState).toEqual(newstate);
  });
  it('should handle CLOSE_MODAL action', () => {
    const storeState = Home(state, {
      type: actionTypes.CLOSE_MODAL,
      payload: { payload: { idx: 0, status: true } },
    });
    const newstate = produce(state, (draft, action) => {
      draft.info.projects[action.payload.idx].isOpen = action.payload.status;
    });
    expect(storeState).toEqual(newstate);
  });
});
