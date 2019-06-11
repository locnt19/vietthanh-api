const express = require('express');
const app = express();
const multer = require('multer');
const uploadRoute = express.Router();
const crypto = require('crypto');
const mime = require('mime');

// set the directory for the uploads to the uploaded to
var DIR = './uploads/';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    // cb(null, `${Date.now()}`)
    // cb(null, Date.now())
    crypto.pseudoRandomBytes(16, function (err, raw) {
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype));
    });
  }
})

//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({
  // dest: DIR
  storage: storage
}).array('photo', 5);

//our file upload function.
uploadRoute.post('/', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    // No error occured.
    path = req.files.path;
    return res.send("Upload Completed for " + path);
  });
})

module.exports = uploadRoute;