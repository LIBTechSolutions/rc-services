"use strict"
// REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
// REACT-ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// IMPORT COMBINED REDUCERS
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk, logger));

import BooksList from './components/pages/booksList';
import BooksForm from './components/pages/booksForm';
import Main from './main';

const Routes = (
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={BooksList}/>
            <Route path="/admin" component={BooksForm}/>
        </Route>
      </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);
