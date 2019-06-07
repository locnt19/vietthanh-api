const express = require('express');
const app = express();
const categoriesRoute = express.Router();

// Require Producer model in our routes module
let Categories = require('../models/Categories');

// Defined get data(index or listing) route
categoriesRoute.route('/').get(function (req, res) {
  Categories.find(function (err, categories){
    if(err){
      console.log(err);
    }
    else {
      res.json(categories);
    }
  });
});

module.exports = categoriesRoute;