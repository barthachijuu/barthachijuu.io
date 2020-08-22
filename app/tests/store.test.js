/**
 * Test store addons
 */

import store from '../store/createStore';


describe('configureStore', () => {
  let rootStore;

  beforeAll(() => {
    rootStore = store;
  });

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
});
