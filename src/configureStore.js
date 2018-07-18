import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import board from './reducers/board';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    combineReducers({
      board
    }),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;