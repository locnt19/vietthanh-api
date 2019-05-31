const express = require('express');
const app = express();
const productRoute = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');

// Defined store route
productRoute.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'product': 'Product in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoute.route('/').get(function (req, res) {
    Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

// Defined edit route
productRoute.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Product.findById(id, function (err, product){
      res.json(product);
  });
});

//  Defined update route
productRoute.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, next, product) {
    if (!product)
      return next(new Error('Could not load Document'));
    else {
        product.name = req.body.name;
        product.producer = req.body.producer;
        product.type = req.body.type;
        product.price = req.body.price;
        product.color = req.body.color;
        product.inventory = req.body.inventory;
        product.shortDesc = req.body.shortDesc;
        product.Description = req.body.Description;

        product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
productRoute.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, product){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = productRoute;