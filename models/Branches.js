const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Branches = new Schema({
  name: {
    type: String,
    default: null
  },
  address: {
    type: String,
    default: null
  },
  tel: {
    type: String,
    default: null
  },
  found: {
    type: Date,
    default: Date.now()
  }
}, {
  collection: 'branches'
});

module.exports = mongoose.model('Branches', Branches);