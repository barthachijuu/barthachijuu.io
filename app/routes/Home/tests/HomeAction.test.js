/**
 *
 * Jest Unit Test for
 * Home Redux Modules
 *
 */

import * as actions from '../modules/HomeActions';

describe('actions', () => {
  it('should create a sample test', () => {
    const text = 'Action creator';
    expect(text).toEqual('Action creator');
  });
  it('should call the get info api', () => {
    const payload = { };
    const expectedAction = {
      type: actions.actionTypes.GET_INFO,
      payload,
    };
    expect(actions.doGetInfo(payload)).toEqual(expectedAction);
  });
  it('should call the open modal action', () => {
    const payload = { idx: 0, status: true };
    const expectedAction = {
      type: actions.actionTypes.OPEN_MODAL,
      payload,
    };
    expect(actions.doOpenModal(payload)).toEqual(expectedAction);
  });
  it('should call the close modal action', () => {
    const payload = { idx: 0, status: false };
    const expectedAction = {
      type: actions.actionTypes.CLOSE_MODAL,
      payload,
    };
    expect(actions.doCloseModal(payload)).toEqual(expectedAction);
  });
  describe('GET_INFO actions', () => {
    it('should create a GET_INFO_REQUEST action and pass the request', () => {
      const expectedAction = {
        type: actions.actionTypes.GET_INFO_REQUEST,
        payload: { request: {} },
      };
      expect(actions.getInfo.request({})).toEqual(expectedAction);
    });
    it('should create a GET_INFO_SUCCESS action and correctly handle response and payload', () => {
      const response = {};
      const payload = undefined;
      const expectedAction = {
        type: actions.actionTypes.GET_INFO_SUCCESS,
        payload: { payload: undefined, response: {} },
      };
      expect(actions.getInfo.success(response, payload)).toEqual(expectedAction);
    });
    it('should create a GET_INFO_FAILURE action and correctly handle error and payload', () => {
      const error = {};
      const payload = undefined;
      const expectedAction = {
        type: actions.actionTypes.GET_INFO_FAILURE,
        payload: { payload: undefined, error: {} },

      };
      expect(actions.getInfo.failure(error, payload)).toEqual(expectedAction);
    });
  });
});
