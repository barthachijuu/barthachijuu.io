/*
 *
 * Home Sagas
 *
 * @version 1.0.0
 * @author Bartolo Amico
 * @since 13-Jul-2020
 */

import { put, take, call, all } from 'redux-saga/effects';
import { doStatusSuccess, doStatusFailure } from 'Store/actions/enhancers';
import * as api from 'Api/home/home';
import * as actions from './HomeActions';

// remember to delete the example code, before you
// start to edit this file


export function* retrieveInfo() {
  yield put(actions.getInfo.request());
  const { response, error } = yield call(api.getInfo);
  if (response) {
    yield put(actions.getInfo.success(response));
    yield put(doStatusSuccess());
  } else {
    yield put(actions.getInfo.failure(error));
    yield put(doStatusFailure());
  }
}
// @generator saga

// @generator saga:watch

export function* watchRetrieveInfo() {
  while (yield take(actions.actionTypes.GET_INFO)) {
    yield call(retrieveInfo);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootSaga() {
  yield all([
    watchRetrieveInfo(),
    // @generator saga:fork

  ]);
}
