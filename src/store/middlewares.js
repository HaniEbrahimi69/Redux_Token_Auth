import { ACTION_UPDATE_TOKEN } from './actions';

export default {
  log: store => next => action => {
    const _ = next(action);
    return _;
  },
  reload: store => next => action => {
    const _ = next(action);
    if (action.type === ACTION_UPDATE_TOKEN) setTimeout(() => window.location.reload());
    return _;
  }
};
