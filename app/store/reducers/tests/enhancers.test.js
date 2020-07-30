/**
 *
 * Jest Unit Test for
 * enhancers Redux Modules
 *
 */

import enhancersReducer from '../enhancers';
import { actionTypes } from '../../actions/enhancers';


describe('enhancers reducers', () => {
  it('should return the initial state', () => {
    expect(enhancersReducer(undefined, {})).toEqual({
      error: '',
      status: 'idle',
    });
  });
  it('should return the idle state', () => {
    expect(enhancersReducer(undefined, {
      types: actionTypes.STATUS_IDLE,
      status: 'idle',
    })).toEqual({
      error: '',
      status: 'idle',
    });
  });
  it('should return the loading state', () => {
    expect(enhancersReducer({ error: '', status: 'loading' }, {
      types: actionTypes.STATUS_LOADING,
      status: 'loading',
    })).toEqual({
      error: '',
      status: 'loading',
    });
  });
  it('should return the success state', () => {
    expect(enhancersReducer({ error: '', status: 'success' }, {
      types: actionTypes.STATUS_SUCCESS,
      status: 'success',
    })).toEqual({
      error: '',
      status: 'success',
    });
  });
  it('should return the failure state', () => {
    expect(enhancersReducer({ error: '', status: 'failure' }, {
      types: actionTypes.STATUS_FAILURE,
      status: 'failure',
    })).toEqual({
      error: '',
      status: 'failure',
    });
  });
});
