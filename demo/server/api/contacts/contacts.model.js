'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactsSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  mobile: String,
  active: Boolean
});

module.exports = mongoose.model('Contacts', ContactsSchema);