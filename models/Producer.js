const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Producer
let Producer = new Schema({
  name: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  }
}, {
  collection: 'producers'
});

module.exports = mongoose.model('Producers', Producer);