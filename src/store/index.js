import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import reducers from '../actions';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export default ({ history }) => {
  const store = createStore(
    reducers(history),
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({ history }),
        routerMiddleware(history),
      ),
    ),
  );

  return store;
};
