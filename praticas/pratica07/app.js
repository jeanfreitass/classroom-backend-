require("dotenv").config()
const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const produtosRouter = require("./routes/produtosRouter")


const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSSWD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`;


mongoose
  .connect(url)
  .then(()=>console.log("Conectado ao Mongo DB"))
  .catch((err)=> console.log("Erro ao conectar com Mongo DB"))
const app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/produtos', produtosRouter);
module.exports = app;
