const express = require('express');
const app = express();
const multer = require('multer');
const uploadRoute = express.Router();
const crypto = require('crypto');
const mime = require('mime');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      let filename = raw.toString('hex') + Date.now() + '.' + mime.getExtension(file.mimetype);
      console.log(filename);
      cb(null, filename);
    });
  }
})

const upload = multer({
  storage: storage
}).array('photo', 5);

uploadRoute.post('/', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    return res.send("Upload Completed for " + path);
  });
})

module.exports = uploadRoute;