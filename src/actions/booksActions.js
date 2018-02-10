"use strict"
import {
GET_BOOKS,
POST_BOOK,
DELETE_BOOK,
UPDATE_BOOK,
GET_BOOKS_REJECTED,
POST_BOOK_REJECTED,
DELETE_BOOK_REJECTED,
RESET_BUTTON
} from './types'
import axios from 'axios';
// GET A BOOK
export const getBooks = () => {
  return (dispatch) => {
    axios.get('/api/books')
      .then((response) => {
        dispatch({ type: GET_BOOKS, payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: GET_BOOKS_REJECTED, payload: err })
      })
  }
}
// POST A BOOK
export const postBooks = (book) => {
  return (dispatch) => {
    axios.post('/api/books', book)
      .then((response) => {
        dispatch({ type: POST_BOOK, payload: response.data })
      })
      .catch((err) => {
        dispatch({ type: POST_BOOK_REJECTED, payload: 'there was an error while posting a new book'})
      })
  }
}

// DELETE A BOOK
export const deleteBooks = (id) => {
  return (dispatch) => {
    axios.delete('/api/books/' + id)
      .then((response) => {
        dispatch({type: DELETE_BOOK, payload: id})
      })
      .catch((err) => {
        dispatch({ type: DELETE_BOOK_REJECTED, payload: err })
      })
  }
}

// UPDATE A BOOK
export const updateBooks = (book) => {
  return {
          type: UPDATE_BOOK,
          payload: book
        }
}
// RESET FORM BUTTON
export const resetButton = () => {
  return {
          type: RESET_BUTTON
        }
}
