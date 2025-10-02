const express = require("express");
const tarefasRouter = require("./routes/tarefaRouter");
const app = express();

app.use(express.json());
app.use("/tarefas", tarefasRouter);


module.exports = app;