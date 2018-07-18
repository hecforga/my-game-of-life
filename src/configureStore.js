import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import board from './reducers/board';
import running from './reducers/running';
import step from './reducers/step';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    combineReducers({
      board,
      running,
      step,
    }),
    applyMiddleware(...middlewares)
  );
};

export default configureStore;