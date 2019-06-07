const express = require('express');
const app = express();
const branchesRoute = express.Router();

// Require Producer model in our routes module
let Branches = require('../models/Branches');

// Defined get data(index or listing) route
branchesRoute.route('/').get(function (req, res) {
  Branches.find(function (err, branches){
    if(err){
      console.log(err);
    }
    else {
      res.json(branches);
    }
  });
});

module.exports = branchesRoute;