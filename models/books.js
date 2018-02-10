"use strict"
var mongoose = require('mongoose');

var booksSchema = mongoose.Schema({
  name: String,
  email: String,
  message: String,
  phone: Number
});

var Books = mongoose.model('Books', booksSchema);
module.exports = Books;
