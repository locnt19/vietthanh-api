const express = require('express');
const app = express();
const userRoutes = express.Router();

// Require user model in our routes module
const User = require('../models/User');

// Defined store route
userRoutes.route('/register').post(function (req, res) {
  let user = new User(req.body);
  console.log(user);
  user.save()
    .then(user => {
      res.status(200).json({'user': 'user in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
userRoutes.route('/').get(function (req, res) {
    User.find(function (err, user){
    if(err){
      console.log(err);
    }
    else {
      res.json(user);
    }
  });
});

// Defined edit route
userRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  User.findById(id, function (err, user){
      res.json(user);
  });
});

//  Defined update route
userRoutes.route('/update/:id').post(function (req, res) {
    User.findById(req.params.id, function(err, next, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
        user.password = req.body.password;
        user.name = req.body.name;
        user.birthday = req.body.birthday;
        user.address = req.body.address;
        user.phoneNumber = req.body.phoneNumber;
        user.rank = req.body.rank;
        user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
userRoutes.route('/delete/:id').get(function (req, res) {
    User.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRoutes;