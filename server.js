const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./db');

// router
const productRoute = require('./routes/product.route');
const producerRoute = require('./routes/producer.route');
const categoriesRoute = require('./routes/categories.route');
const branchesRoute = require('./routes/branches.route');
const colorsRoute = require('./routes/colors.route');
const uploadRoute = require('./routes/upload.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
// app use router
app.use('/products', productRoute);
app.use('/producers', producerRoute);
app.use('/categories', categoriesRoute);
app.use('/branches', branchesRoute);
app.use('/colors', colorsRoute);
app.use('/upload', uploadRoute);

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});