import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'; 

import App from './components/app.jsx';
import Signin from './components/auth/signin.jsx';
import Signup from './components/auth/signup.jsx';
import Signout from './components/auth/signout.jsx';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App} >
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/signout' component={Signout} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
