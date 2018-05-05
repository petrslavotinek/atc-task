import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import * as reducers from 'data/reducers';

const createEnhancers = () => {
  const middlewares = [
    thunkMiddleware
  ];

  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(...middlewares);
  } else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return composeEnhancers(
      applyMiddleware(
        ...middlewares
      )
    );
  }
};

const configureStore = (initialState = {}) => {
  const enhancers = createEnhancers();
  const rootReducer = combineReducers({
    ...reducers
  });

  return createStore(
    rootReducer,
    initialState,
    enhancers
  );
};

export default configureStore;