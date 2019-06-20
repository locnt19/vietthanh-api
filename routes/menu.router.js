const express = require('express');
const app = express();
const menusRoute = express.Router();

// Require Producer model in our routes module
let Menus = require('../models/Menus');

// Defined get data(index or listing) route
menusRoute.route('/').get(function (req, res) {
  Menus.find(function (err, menus){
    if(err){
      console.log(err);
    }
    else {
      res.json(menus);
      console.log(menus);
      
    }
  });
});

module.exports = menusRoute;