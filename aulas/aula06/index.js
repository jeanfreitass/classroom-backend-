
// 1. Importar o framework
const express = require("express")
const router = require('./router')

// 2. Criar uma instância de uma aplicação
const app = express()

//midleware embutido ou integrado
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//middleware de terceiros
// app.use(cors());

// midleware de roteamento
app.use((req, res, next)=>{
    console.log("Passei pelo middleware de app");
    next()
})


app.use('/tarefas', router);

// 2.1. criar um middleware
app.get('/', (req, res) => {
    res.send("Middleware online");
});

// criar middleware de erro
app.use((err, req ,res ,next)=>{
    res.status(500).send(err, message);
})


// 3. iniciar a aplicação em uma porta
app.listen(3000, ()=>{
    console.log("App está On!");
});
