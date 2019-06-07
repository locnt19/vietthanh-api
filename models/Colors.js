const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Colors = new Schema({
  name: {
    type: String,
    default: null
  }
}, {
  collection: 'colors'
});

module.exports = mongoose.model('Colors', Colors);