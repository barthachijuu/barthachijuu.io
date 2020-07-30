/**
 *
 * Jest Unit Test for
 * Home Redux Modules
 *
 */


import Home from '../modules/HomeReducers';
import { actionTypes } from '../modules/HomeActions';

const initialState = {
  info: {},
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
    const mockResponse = { ...initialState };
    expect(Home(initialState, { type: 'GET_INFO_SUCCESS', response: {} }))
      .toEqual({
        ...mockResponse,
      });
  });
});
