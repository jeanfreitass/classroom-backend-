const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const apiDocksRouter = require('./routes/apiDocsRouter');

const app = express();

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api-docs', apiDocksRouter);


module.exports = app;
