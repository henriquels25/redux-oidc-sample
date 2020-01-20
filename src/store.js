import { createStore, applyMiddleware } from 'redux';
import createRootReducer from './reducers';
import { routerMiddleware  } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

export const history = createBrowserHistory();

export const sagaMiddleware = createSagaMiddleware();

const configureStore = function (initialState) {
  return createStore(
    createRootReducer(history), // root reducer with router state
    initialState,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
      )
    ),
  )
};


export default configureStore;