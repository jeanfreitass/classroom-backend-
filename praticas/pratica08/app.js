require("dotenv").config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const produtosRouter = require('../pratica08/routes/produtosRouter');
const usersRouter = require('../pratica08/routes/usersRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', produtosRouter);
app.use('/users', usersRouter);

module.exports = app;
