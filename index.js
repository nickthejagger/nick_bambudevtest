const express    = require('express');        // call express
const bodyParser = require('body-parser');

var app        = express();                 // define our app using express
var port = process.env.PORT || 8000;
var router = express.Router();
var routes = require('./Router/index');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port);
console.log('Running on: ' + port);

