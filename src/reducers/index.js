"use strict"
import {combineReducers} from 'redux';

// HERE IMPORT REDUCERS TO BE COMBINED
import {booksReducers} from './booksReducers';

//HERE COMBINE THE REDUCERS
export default combineReducers({
  books: booksReducers
})
