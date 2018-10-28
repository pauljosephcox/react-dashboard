// nvm user 8.0.0

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {createStore, compose, applyMiddleware} from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
import {routerMiddleware, connectRouter, ConnectedRouter} from 'connected-react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FirebaseConfig, FirebaseReduxConfig } from './config/Firebase';
import firebase from 'firebase';

// ----------------------------------
// Dependancies
// ----------------------------------

import rootReducer from './Reducers';

import AppSwitcher from './Components/AppSwitcher'
import Account from './Components/Account'
import Logout from './Components/Logout'
import Signup from './Components/Signup'
import PasswordReset from './Components/PasswordReset'
import Oops from './Components/Oops'

// ----------------------------------
// Styles
// ----------------------------------

import './scss/base.scss'

// ----------------------------------
// Create Redux Store
// ----------------------------------

const history = createBrowserHistory();
const store = createStore(
    connectRouter(history)(rootReducer),
    compose(
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, FirebaseReduxConfig),
        applyMiddleware(
            routerMiddleware(history),
            promise(),
            thunk,
            createLogger(),
        )
    )
);

// ----------------------------------
// Render Application
// ----------------------------------

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
              <Route render={({ location }) => (

                <TransitionGroup>
                  <CSSTransition key={location.key} classNames="transition" timeout={500}>
                    <Switch location={location}>
                        <Route path="/" exact component={AppSwitcher}  />
                        <Route path="/account" component={Account} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/reset" component={PasswordReset} />
                        <Route path="/*" component={Oops} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />

            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
