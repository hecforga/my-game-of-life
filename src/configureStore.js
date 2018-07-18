import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import board from './reducers/board';
import running from './reducers/running';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    combineReducers({
      board,
      running,
    }),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;