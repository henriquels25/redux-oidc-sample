import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './store';
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
import userManager from "./auth/userManager";
import { loadUser } from "redux-oidc";
import { OidcProvider } from 'redux-oidc';

const store = configureStore();
loadUser(store, userManager);

ReactDOM.render(
    <Provider store={store}>
        <OidcProvider store={store} userManager={userManager}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </OidcProvider>
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
