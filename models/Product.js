const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
let Product = new Schema({
  name: {
    type: String
  },
  producer: {
    type: String
  },
  type: {
    type: String
  },
  price: {
    type: Number
  },
  color: {
    type: String
  },
  inventory: {
    type: Number
  },
  shortDesc: {
    type: String
  },
  Description: {
    type: String
  },
  status: {
    type: Number
  },
},{
    collection: 'products'
});

module.exports = mongoose.model('Product', Product);
