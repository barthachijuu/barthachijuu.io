/**
 *
 * Jest Unit Test for
 * enhancers Redux Modules
 *
 */

import produce from 'immer';
import enhancersReducer from '../enhancers';
import { actionTypes } from '../../actions/enhancers';

// The initial state of the enhancers
let state;

describe('enhancers reducers', () => {
  beforeEach(() => {
    state = {
      error: '',
      status: 'idle',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(enhancersReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle STATUS_IDLE', () => {
    const status = 'idle';
    produce((state, draft) => {
      draft.status = status;
    });
    expect(enhancersReducer(state, { type: actionTypes.STATUS_IDLE, status: 'idle' })).toEqual(state);
  });
  it('should handle STATUS_LOADING', () => {
    const status = 'loading';
    produce((state, draft) => {
      draft.status = status;
    });
    state.status = status;
    expect(enhancersReducer(state, { type: actionTypes.STATUS_LOADING, status: 'loading' })).toEqual(state);
  });
  it('should handle STATUS_SUCCESS', () => {
    const status = 'success';
    produce((state, draft) => {
      draft.status = status;
    });
    state.status = status;
    expect(enhancersReducer(state, { type: actionTypes.STATUS_SUCCESS, status: 'success' })).toEqual(state);
  });
  it('should handle STATUS_Failure', () => {
    const status = 'failure';
    produce((state, draft) => {
      draft.status = status;
    });
    state.status = status;
    expect(enhancersReducer(state, { type: actionTypes.STATUS_FAILURE, status: 'failure' })).toEqual(state);
  });
});
