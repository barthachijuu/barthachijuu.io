/**
 *
 * Jest Unit Test for
 * Home Redux Modules
 *
 */

import { take, call, put } from 'redux-saga/effects';
import * as api from 'Api/home/home';
import { retrieveInfo, watchRetrieveInfo } from '../modules/HomeSagas';
import * as actions from '../modules/HomeActions';


describe('watchRetrieveInfo', () => {
  it('should dispatch action "GET_NEWS" ', () => {
    const generator = watchRetrieveInfo();
    expect(generator.next().value)
      .toEqual(take('home/get_info', retrieveInfo));
    expect(generator.next().done).toBeTruthy();
  });

  it('should dispatch action "GET_INFO_FAILURE" with result from fetch getInfo API', () => {
    const mockResponse = {};
    const gen = retrieveInfo();
    gen.next();
    expect(gen.next(true).value).toEqual(call(api.getInfo));
    expect(gen.next(mockResponse).value).toEqual(put(actions.getInfo.failure(mockResponse)));
    expect(gen.next().done).toBeTruthy();
  });
});
