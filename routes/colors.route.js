const express = require('express');
const app = express();
const colorsRoute = express.Router();

// Require Producer model in our routes module
let Colors = require('../models/Colors');

// Defined get data(index or listing) route
colorsRoute.route('/').get(function (req, res) {
  Colors.find(function (err, colors){
    if(err){
      console.log(err);
    }
    else {
      res.json(colors);
    }
  });
});

module.exports = colorsRoute;