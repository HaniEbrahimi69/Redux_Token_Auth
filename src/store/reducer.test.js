import reducer from './reducer';

describe('Test reducer store', () => {
  test('test reducer main method', () => {
    const ACTION_TEST = Symbol('Fake action for test');
    const _reducer = reducer({
      [ACTION_TEST]: (state, name) => ({
        ...state,
        name
      })
    });

    const state = _reducer({ a: 1 }, { type: ACTION_TEST, payload: 'Hani Ebrahimi' });
    expect(state).toEqual({ a: 1, name: 'Hani Ebrahimi' });
  });
});
