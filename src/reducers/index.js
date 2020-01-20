import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer } from 'redux-oidc';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    auth: reducer
});

export default createRootReducer;