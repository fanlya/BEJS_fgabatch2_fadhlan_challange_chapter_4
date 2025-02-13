var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const middlewareLogRequest = require('./middlewares/logpath');
const INDEX_ROUTES = require('./routes');

var app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(INDEX_ROUTES);

module.exports = app;
