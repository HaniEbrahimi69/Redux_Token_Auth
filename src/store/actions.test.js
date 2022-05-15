import actions, { 
  ACTION_UPDATE_TOKEN, 
} from './actions';
import initialState from './initial-state';

const _initialState = initialState;

describe('Test store actions', () => {
  // Token
  test('test token actions', () => {
    expect(actions[ACTION_UPDATE_TOKEN](_initialState, 'Test').token).toBe('Test');
  });
});
