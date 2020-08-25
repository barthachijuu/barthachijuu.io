/**
 * Test store addons
 */

import store from '../store/createStore';
import logger from '../store/middleware/logger';

describe('configureStore', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  let rootStore;
  beforeAll(() => {
    rootStore = store;
  });

  // mock module.hot
  const module = {
    hot: {
      accept: jest.fn(),
    },
  };
  describe('injectedReducers', () => {
    it('should contain an object for reducers', () => {
      expect(typeof rootStore.asyncReducers).toBe('object');
    });
  });

  describe('injectedSagas', () => {
    it('should contain an object for sagas', () => {
      expect(typeof store.injectedSagas).toBe('object');
    });
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });

  describe('logger middleware', () => {
    const next = jest.fn();
    const action = { type: 'TRY_THE_LOGGER', payload: { your: 'data' } };
    logger(store)(next)(action);
  });

  describe('module.hot', () => {
    it('should only call hot.accept() if hot is defined', () => {
      const defaultReducers = require('../store/reducers').default; // eslint-disable-line global-require
      module.hot.accept('', () => {
        store.replaceReducer(defaultReducers(store.asyncReducers));
      });
      store.replaceReducer(defaultReducers(store.asyncReducers));
      expect(module.hot.accept).toHaveBeenCalled();
    });
  });
});
