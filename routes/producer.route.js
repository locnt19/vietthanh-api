const express = require('express');
const app = express();
const producerRoute = express.Router();

// Require Producer model in our routes module
let Producer = require('../models/Producer');

// Defined get data(index or listing) route
producerRoute.route('/').get(function (req, res) {
  Producer.find(function (err, producers){
    if(err){
      console.log(err);
    }
    else {
      res.json(producers);
    }
  });
});

module.exports = producerRoute;