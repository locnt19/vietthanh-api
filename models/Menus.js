const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CateItemSchema = new Schema({
  name: String
});

// Define collection and schema for Producer
let Menus = new Schema({
  name: {
    type: String,
    default: null
  },
}, {
  collection: 'menus' // memu cmm ak` dcmmmm
});

module.exports = mongoose.model('Menus', Menus);