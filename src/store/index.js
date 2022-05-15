import { createStore, applyMiddleware, compose } from "redux";
import {
  connect,
  useSelector as coreUseSelector,
  shallowEqual
} from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import actions, { ACTION_ROOT_RESET } from "./actions";
import reducer from "./reducer";
import middlewares from "./middlewares";
import initialState from "./initial-state";

/**
 * for handle Redux Devtools in browser
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * default state
 */
const preloadedState = initialState;

/**
 * app reducer
 */
const appReducer = reducer(actions);

/**
 * root reducer hight level
 * @param {object} state default state
 * @param {Symbol} action action
 */
const rootReducer = (state, action) => {
  if (action.type === ACTION_ROOT_RESET) {
  
    const {  token  } = state;
    state = {
      ...preloadedState, 
      token 
    };
  }

  return appReducer({ ...state }, action);
};

/**
 * config redux persist
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: [ 
    "token" 
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * create store
 */
const store = createStore(
  persistedReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(middlewares.log, middlewares.reload))
);

/**
 * create persistor
 */
const persistor = persistStore(store);

/**
 * dispatch
 * @param {object} object
 * @param {string} object.type type of action
 * @param {*} object.payload data send to reducer
 */
const dispatch = store.dispatch;

/**
 * dispatches
 * @param {array} actions array of actions
 * @returns {undefined}
 */
const dispatches = actions => actions.forEach(action => dispatch(action));
 

const useSelector = selector => coreUseSelector(selector, shallowEqual);

export { connect, dispatch, dispatches,   persistor, useSelector };

window.store = store;

export default store;
