// 1. Importar o framework
const express = require("express")
// 2. Criar uma instância de uma aplicação
const app = express()

//Criar middleware
app.get('/',(req,res) => {
    res.send("Olá user!")
})

// 3. Iniciar a aplicação na porta desejada
app.listen(8000,()=>{
    console.log("Aplicação está Online!")
})