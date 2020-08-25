/**
 *
 * Jest Unit Test for
 * Home Redux Modules
 *
 */

import { take, put } from 'redux-saga/effects';
import { retrieveInfo, watchRetrieveInfo } from '../modules/HomeSagas';
import * as actions from '../modules/HomeActions';


describe('get info saga', () => {
  let retrieveInfoGenerator;

  beforeEach(() => {
    retrieveInfoGenerator = retrieveInfo();

    const selectDescriptor = retrieveInfoGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = retrieveInfoGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch action "GET_INFO" ', () => {
    const generator = watchRetrieveInfo();
    expect(generator.next().value).toEqual(take('home/get_info', retrieveInfo));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_INFO_REQUEST"', () => {
    const gen = retrieveInfo();
    const request = { payload: {} };
    const putDescriptor = gen.next(request).value;
    expect(putDescriptor).toEqual(put({ type: actions.actionTypes.GET_INFO_REQUEST, payload: {} }));
  });

  it('should dispatch action "GET_INFO_SUCCESS"', () => {
    const gen = retrieveInfo({});
    const payload = { response: { } };
    gen.next();
    gen.next();
    expect(gen.next(payload).value).toEqual(put({ type: actions.actionTypes.GET_INFO_SUCCESS, payload }));
  });

  it('should dispatch action "GET_INFO_FAILURE"', () => {
    const gen = retrieveInfo({});
    const payload = { error: { } };
    gen.next();
    gen.next();
    expect(gen.next(payload).value).toEqual(put({ type: actions.actionTypes.GET_INFO_FAILURE, payload }));
    expect(gen.next().done).toBeFalsy();
  });
});
