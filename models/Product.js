const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// object
var priceSchema = new Schema({
  value: Number,
  rate: Number
});
var branchSchema = new Schema({
  name: String,
  inventory: Number
});
var specificationsSchema = new Schema({
  prop: String,
  detail: String
});
var userSchema = new Schema({
  idUser: String,
  summary: String,
  content: String,
  numberOfStars: Number,
  images: {
    type: [String],
    default: null
  },
  created: {
    type: Date,
    default: Date.now
  }

});
var mainDetailSchema = new Schema({
  content: {
    type: String,
    default: null
  },
  images: {
    type: [String],
    default: null
  }
});
var detailsSchema = new Schema({
  mainDetail: mainDetailSchema,
  specifications: [specificationsSchema]
});

// Define collection and schema for Product
let Product = new Schema({
  name: {
    type: String,
    default: null
  },
  producer: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: null
  },
  rawPrice: Number,
  discountPrice: {
    type: priceSchema,
    default: null
  },
  onlinePrice: {
    type: priceSchema,
    default: null
  },
  weekendPrice: {
    type: priceSchema,
    default: null
  },
  color: {
    type: String,
    default: null
  },
  branch: {
    type: branchSchema,
    default: null
  },
  new: {
    type: Number,
    default: 1
  },
  shortDesc: {
    type: String,
    default: null
  },
  details: {
    type: detailsSchema,
    default: null
  },
  ratings: {
    type: [userSchema],
    default: null
  },
  status: {
    type: Number,
    default: 1
  },
}, {
  collection: 'products'
});

module.exports = mongoose.model('Product', Product);