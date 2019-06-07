const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CateItemSchema = new Schema({
  name: String
});

// Define collection and schema for Producer
let Categories = new Schema({
  name: {
    type: String,
    default: null
  },
  item: {
    type: [CateItemSchema],
    default: null
  }
}, {
  collection: 'categories'
});

module.exports = mongoose.model('Categories', Categories);